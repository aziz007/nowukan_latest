import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { BlogPost, SORTED_POSTS, findPost } from './blog-posts';
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
          <a routerLink="/blog" class="blog-back">← All articles</a>
          <p class="blog-meta">
            <span class="blog-cat">{{ p.category }}</span>
            <span>{{ fmt(p.date) }} · {{ p.readMinutes }} min read</span>
          </p>
          <h1 class="blog-title">{{ p.title }}</h1>
          <p class="blog-lead">{{ p.description }}</p>

          <figure class="blog-hero">
            <img [src]="p.image" [alt]="p.imageAlt" />
          </figure>

          <div class="blog-body prose" [innerHTML]="p.body"></div>

          <aside class="blog-cta">
            <h2>Start your English journey with nowUKan</h2>
            <p>Practise real-world English and pronunciation, offline, with one low-cost payment and no subscriptions.</p>
            <div class="btn-row">
              <a routerLink="/download" class="btn btn-gold">Free 7-Day Trial</a>
              <a routerLink="/buy-now" class="btn btn-primary">Buy Now</a>
              <a routerLink="/book-a-consultation" class="btn btn-dark">For Schools &amp; Organisations</a>
            </div>
          </aside>

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
  readonly related = SORTED_POSTS.filter((p) => p.slug !== this.post?.slug).slice(0, 3);

  constructor() {
    if (this.post) this.addArticleSchema(this.post);
    inject(DestroyRef).onDestroy(() => this.doc.head.querySelector('script[data-blog-schema]')?.remove());
  }

  /** Google "Article" structured data, so posts can show as articles in search results. */
  private addArticleSchema(p: BlogPost): void {
    const abs = (u: string) => `${SITE_ORIGIN}/${u.replace(/^\//, '')}`;
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      image: abs(p.image),
      datePublished: p.date,
      dateModified: p.date,
      author: { '@type': 'Organization', name: SITE_NAME, url: SITE_ORIGIN },
      publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: abs(LOGO_IMAGE) } },
      mainEntityOfPage: `${SITE_ORIGIN}/blog/${p.slug}`,
    };
    this.doc.head.querySelector('script[data-blog-schema]')?.remove();
    const s = this.doc.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-blog-schema', '');
    s.textContent = JSON.stringify(data);
    this.doc.head.appendChild(s);
  }
}
