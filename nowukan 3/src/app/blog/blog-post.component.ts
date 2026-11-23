import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { BlogPost, POST_GUIDES, SORTED_POSTS, findPost } from './blog-posts';
import { LANDING_PAGES } from '../landing/landing-data';
import { LEVELS, TOPIC_PAGES } from '../learn/learn-data';
import { formatPostDate } from './blog-format';
import { SITE_NAME, SITE_ORIGIN, LOGO_IMAGE } from '../core/seo-data';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (post; as p) {
      <article class="page-shell blog-article">
        <div class="container blog-article-inner">
          <nav class="blog-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/blog">Blog</a></li>
              <li aria-current="page">{{ p.title }}</li>
            </ol>
          </nav>
          <p class="blog-meta">
            <span class="blog-cat">{{ p.category }}</span>
            <span><time [attr.datetime]="p.date">{{ fmt(p.date) }}</time> · {{ p.readMinutes }} min read · by the nowUKan Team</span>
          </p>
          <h1 class="blog-title">{{ p.title }}</h1>
          <p class="blog-lead">{{ p.description }}</p>

          <figure class="blog-hero">
            <img [src]="p.image" [alt]="p.imageAlt" fetchpriority="high" decoding="async" />
          </figure>

          <div class="blog-body prose" [innerHTML]="p.body"></div>

          @if (guides.length) {
            <nav class="blog-guides" aria-label="Related guides">
              <h2>Related guides</h2>
              <ul>
                @for (g of guides; track g.path) {
                  <li><a [routerLink]="g.path">{{ g.label }} →</a></li>
                }
              </ul>
            </nav>
          }

          <aside class="blog-cta">
            <h2>Start your English journey with nowUKan</h2>
            <p>Practise real-world English and pronunciation, offline, with one low-cost payment and no subscriptions.</p>
            <div class="btn-row">
              <a routerLink="/download" class="btn btn-gold">Free 7-Day Trial</a>
              <a routerLink="/buy-now" class="btn btn-primary">Buy Now</a>
              <a routerLink="/book-a-consultation" class="btn btn-dark">For Schools &amp; Organisations</a>
            </div>
          </aside>

          <p class="blog-back-row"><a routerLink="/blog" class="blog-back">← All articles</a></p>

          @if (related.length) {
            <section class="blog-related">
              <h2>More from the blog</h2>
              <div class="blog-related-list">
                @for (r of related; track r.slug) {
                  <a [routerLink]="['/blog', r.slug]" class="blog-related-item">
                    <span class="blog-cat">{{ r.category }}</span>
                    <strong>{{ r.title }}</strong>
                  </a>
                }
              </div>
            </section>
          }
        </div>
      </article>
    }
  `,
})
export class BlogPostComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly doc = inject(DOCUMENT);
  readonly fmt = formatPostDate;
  readonly post: BlogPost | undefined = findPost(this.route.snapshot.data['slug']);
  /** Learn English and commercial pages linked from this post (POST_GUIDES in blog-posts.ts). */
  readonly guides = (POST_GUIDES[this.post?.slug ?? ''] ?? [])
    .map((path) => ({ path, label: guideLabel(path) }))
    .filter((g): g is { path: string; label: string } => !!g.label);

  /** Three related posts: same category first, then the newest others. */
  readonly related = (() => {
    const others = SORTED_POSTS.filter((p) => p.slug !== this.post?.slug);
    const same = others.filter((p) => p.category === this.post?.category);
    return [...same, ...others.filter((p) => !same.includes(p))].slice(0, 3);
  })();

  constructor() {
    if (this.post) this.addArticleSchema(this.post);
    inject(DestroyRef).onDestroy(() => this.doc.head.querySelector('script[data-blog-schema]')?.remove());
  }

  /** Google "Article" structured data, so posts can show as articles in search results. */
  private addArticleSchema(p: BlogPost): void {
    const abs = (u: string) => `${SITE_ORIGIN}/${u.replace(/^\//, '')}`;
    const url = `${SITE_ORIGIN}/blog/${p.slug}`;
    const words = p.body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    const org = { '@type': 'Organization', '@id': `${SITE_ORIGIN}/#organization`, name: SITE_NAME, url: SITE_ORIGIN, logo: { '@type': 'ImageObject', url: abs(LOGO_IMAGE) } };
    const data = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': `${url}#article`,
          headline: p.title,
          description: p.description,
          image: abs(p.image),
          datePublished: p.date,
          dateModified: p.updated ?? p.date,
          inLanguage: 'en-GB',
          articleSection: p.category,
          wordCount: words,
          author: org,
          publisher: org,
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          isPartOf: { '@type': 'Blog', '@id': `${SITE_ORIGIN}/blog`, name: `${SITE_NAME} Blog` },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_ORIGIN}/blog` },
            { '@type': 'ListItem', position: 3, name: p.title, item: url },
          ],
        },
      ],
    };
    this.doc.head.querySelector('script[data-blog-schema]')?.remove();
    const s = this.doc.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-blog-schema', '');
    s.textContent = JSON.stringify(data);
    this.doc.head.appendChild(s);
  }
}

/** Readable link text for a guide path. */
function guideLabel(path: string): string | undefined {
  const slug = path.replace(/^\//, '');
  if (slug === 'learn-english') return 'The Real-Life English Map: all topics and levels';
  const landing = LANDING_PAGES.find((p) => p.slug === slug);
  if (landing) return landing.heading;
  const topic = TOPIC_PAGES.find((t) => `learn-english/topics/${t.slug}` === slug);
  if (topic) return topic.heading;
  const level = LEVELS.find((l) => `learn-english/${l.key}` === slug);
  if (level) return level.title;
  return undefined;
}
