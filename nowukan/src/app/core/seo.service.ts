import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  DEFAULT_OG_IMAGE,
  SEO_DATA,
  SITE_NAME,
  SITE_ORIGIN,
  SeoEntry,
} from './seo-data';

/**
 * Writes all SEO-relevant head elements for the current route.
 *
 * Called from the router's NavigationEnd handler (see AppComponent) so the tags
 * are set both during SSR (landing in the server HTML) and on client navigation.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  /** @param urlPath the route path WITHOUT a leading slash ('' for home). */
  update(urlPath: string): void {
    const path = this.normalise(urlPath);
    const entry: SeoEntry =
      SEO_DATA[path] ??
      ({
        title: `${SITE_NAME}`,
        description: SEO_DATA['']?.description ?? '',
      } as SeoEntry);

    const canonical = `${SITE_ORIGIN}/${path}`.replace(/\/$/, '') || SITE_ORIGIN;
    const image = this.absolute(entry.image ?? DEFAULT_OG_IMAGE);

    // --- Title + description ---
    this.title.setTitle(entry.title);
    this.setName('description', entry.description);

    // --- Robots ---
    this.setName(
      'robots',
      entry.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    );

    // --- Canonical (server-rendered; never altered later by JS) ---
    this.setCanonical(canonical);

    // --- Locale / language ---
    this.doc.documentElement.lang = 'en';
    this.setProperty('og:locale', 'en_GB');

    // --- Open Graph ---
    this.setProperty('og:type', path === '' ? 'website' : 'article');
    this.setProperty('og:site_name', SITE_NAME);
    this.setProperty('og:title', entry.title);
    this.setProperty('og:description', entry.description);
    this.setProperty('og:url', canonical);
    this.setProperty('og:image', image);

    // --- Twitter / X card ---
    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', entry.title);
    this.setName('twitter:description', entry.description);
    this.setName('twitter:image', image);

    // --- hreflang (single-locale for now; extend when locales are added) ---
    this.setHreflang('en', canonical);
    this.setHreflang('x-default', canonical);

    // --- JSON-LD structured data ---
    this.setJsonLd(entry, canonical);
  }

  // ---------------------------------------------------------------------------

  private normalise(p: string): string {
    return (p || '').replace(/^\//, '').replace(/\/$/, '').split('?')[0].split('#')[0];
  }

  private absolute(pathOrUrl: string): string {
    if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
    return `${SITE_ORIGIN}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
  }

  private setName(name: string, content: string): void {
    if (this.meta.getTag(`name="${name}"`)) {
      this.meta.updateTag({ name, content });
    } else {
      this.meta.addTag({ name, content });
    }
  }

  private setProperty(property: string, content: string): void {
    if (this.meta.getTag(`property="${property}"`)) {
      this.meta.updateTag({ property, content });
    } else {
      this.meta.addTag({ property, content });
    }
  }

  private setCanonical(href: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setHreflang(lang: string, href: string): void {
    const selector = `link[rel="alternate"][hreflang="${lang}"]`;
    let link = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setJsonLd(entry: SeoEntry, canonical: string): void {
    const existing = this.doc.head.querySelector('script[type="application/ld+json"]');
    if (existing) existing.remove();

    const schemaType = entry.schemaType ?? 'WebPage';
    let data: Record<string, unknown>;

    if (schemaType === 'Organization' || schemaType === 'WebSite') {
      data = {
        '@context': 'https://schema.org',
        '@type': schemaType === 'WebSite' ? 'WebSite' : 'Organization',
        name: SITE_NAME,
        url: SITE_ORIGIN,
        logo: this.absolute(DEFAULT_OG_IMAGE),
        description: entry.description,
      };
      if (schemaType === 'WebSite') {
        (data as Record<string, unknown>)['publisher'] = {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: this.absolute(DEFAULT_OG_IMAGE),
        };
      }
    } else {
      data = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        name: entry.title,
        description: entry.description,
        url: canonical,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
      };
    }

    const script = this.doc.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
