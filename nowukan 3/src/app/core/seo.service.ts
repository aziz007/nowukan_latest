import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  APP_PRICE,
  CONTACT_EMAIL,
  DEFAULT_OG_IMAGE,
  LOGO_IMAGE,
  SEO_DATA,
  SITE_NAME,
  SITE_ORIGIN,
  SOCIAL_PROFILES,
  SUPPORT_EMAIL,
  SeoEntry,
} from './seo-data';
import { FAQS } from '../pages/faqs/faq-data';
import { SORTED_POSTS } from '../blog/blog-posts';

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
    const known = SEO_DATA[path];
    // Unknown address = the "page not found" screen: never index it.
    const entry: SeoEntry =
      known ??
      ({
        title: `Page Not Found | ${SITE_NAME}`,
        description: 'Sorry, we could not find that page. Explore nowUKan or read our latest English learning tips.',
        noindex: true,
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
    const isArticle = !!entry.published;
    this.setProperty('og:type', isArticle ? 'article' : 'website');
    if (isArticle) {
      this.setProperty('article:published_time', entry.published!);
      this.setProperty('article:modified_time', entry.modified ?? entry.published!);
    } else {
      this.meta.removeTag('property="article:published_time"');
      this.meta.removeTag('property="article:modified_time"');
    }
    this.setProperty('og:site_name', SITE_NAME);
    this.setProperty('og:title', entry.title);
    this.setProperty('og:description', entry.description);
    this.setProperty('og:url', canonical);
    this.setProperty('og:image', image);
    this.setProperty('og:image:alt', entry.image ? entry.title : `${SITE_NAME} — Affordable English. Limitless Opportunities.`);
    if (!entry.image) {
      // Dimensions of the default share image, so platforms don't have to guess.
      this.setProperty('og:image:width', '1200');
      this.setProperty('og:image:height', '630');
    } else {
      this.meta.removeTag('property="og:image:width"');
      this.meta.removeTag('property="og:image:height"');
    }

    // --- Twitter / X card ---
    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', entry.title);
    this.setName('twitter:description', entry.description);
    this.setName('twitter:image', image);

    // --- hreflang (single-locale for now; extend when locales are added) ---
    this.setHreflang('en', canonical);
    this.setHreflang('x-default', canonical);

    // --- JSON-LD structured data ---
    this.setJsonLd(entry, canonical, path);
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

  private setJsonLd(entry: SeoEntry, canonical: string, path: string): void {
    this.doc.head.querySelectorAll('script[type="application/ld+json"]:not([data-blog-schema])').forEach((n) => n.remove());

    const schemaType = entry.schemaType ?? 'WebPage';
    // Blog posts add their own, richer "BlogPosting" data (blog-post.component.ts).
    // The not-found page gets no structured data.
    if (schemaType === 'BlogPosting' || entry.noindex) return;

    const orgId = `${SITE_ORIGIN}/#organization`;
    const siteId = `${SITE_ORIGIN}/#website`;
    const logo = { '@type': 'ImageObject', url: this.absolute(LOGO_IMAGE) };
    const organization = {
      '@type': 'Organization',
      '@id': orgId,
      name: SITE_NAME,
      legalName: 'nowUKan Ltd',
      url: SITE_ORIGIN,
      logo,
      email: CONTACT_EMAIL,
      sameAs: SOCIAL_PROFILES,
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'sales', email: CONTACT_EMAIL, url: `${SITE_ORIGIN}/book-a-consultation`, availableLanguage: ['English'] },
        { '@type': 'ContactPoint', contactType: 'customer support', email: SUPPORT_EMAIL, availableLanguage: ['English'] },
      ],
    };
    const website = {
      '@type': 'WebSite',
      '@id': siteId,
      name: SITE_NAME,
      url: SITE_ORIGIN,
      inLanguage: 'en-GB',
      publisher: { '@id': orgId },
    };
    const pageName = entry.title.split(/ [—|] /)[0].trim();
    const page: Record<string, unknown> = {
      '@type': ['FAQPage', 'ContactPage', 'Blog', 'WebPage'].includes(schemaType) ? schemaType : 'WebPage',
      '@id': `${canonical}#webpage`,
      name: entry.title,
      description: entry.description,
      url: canonical,
      inLanguage: 'en-GB',
      isPartOf: { '@id': siteId },
    };
    if (schemaType === 'Organization') page['about'] = { '@id': orgId };

    const graph: Record<string, unknown>[] = [];

    if (path === '') {
      page['about'] = { '@id': orgId };
      graph.push(organization, website, page, {
        '@type': 'MobileApplication',
        name: SITE_NAME,
        operatingSystem: 'iOS 15.0+, Android 8.0+',
        applicationCategory: 'EducationalApplication',
        description: entry.description,
        url: SITE_ORIGIN,
        image: this.absolute(LOGO_IMAGE),
        publisher: { '@id': orgId },
        offers: {
          '@type': 'Offer',
          price: APP_PRICE.amount,
          priceCurrency: APP_PRICE.currency,
          url: `${SITE_ORIGIN}/buy-now`,
          availability: 'https://schema.org/InStock',
        },
      });
    } else {
      graph.push(organization, website, page, {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: 'Home', item: SITE_ORIGIN },
          ...(entry.crumbs ?? []).map((c) => ({ name: c.name, item: `${SITE_ORIGIN}/${c.path}` })),
          { name: pageName, item: canonical },
        ].map((c, i) => ({ '@type': 'ListItem', position: i + 1, ...c })),
      });
    }
    if (entry.faqs?.length) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        mainEntity: entry.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      });
    }

    if (schemaType === 'FAQPage') {
      page['mainEntity'] = FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      }));
    }
    if (schemaType === 'Blog') {
      page['blogPost'] = SORTED_POSTS.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `${SITE_ORIGIN}/blog/${p.slug}`,
        datePublished: p.date,
        image: this.absolute(p.image),
      }));
    }

    const script = this.doc.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    this.doc.head.appendChild(script);
  }
}
