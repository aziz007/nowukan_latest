import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_CATEGORIES, BlogCategory, SORTED_POSTS } from './blog-posts';
import { formatPostDate } from './blog-format';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <p class="eyebrow">Learn With nowUKan</p>
        <h1 class="section-title">Blog</h1>
        <p class="sub blog-intro">
          Practical tips for learning English, guides for schools and organisations, and news from the nowUKan team.
        </p>

        <div class="blog-filters" role="group" aria-label="Filter articles by category">
          <button type="button" class="blog-chip" [class.active]="!active()" [attr.aria-pressed]="!active()" (click)="active.set(null)">
            All ({{ posts.length }})
          </button>
          @for (c of categories; track c) {
            <button type="button" class="blog-chip" [class.active]="active() === c" [attr.aria-pressed]="active() === c" (click)="active.set(c)">
              {{ c }} ({{ count(c) }})
            </button>
          }
        </div>

        <div class="blog-grid">
          @for (post of shown(); track post.slug) {
            <article class="blog-card">
              <a class="blog-card-link" [routerLink]="['/blog', post.slug]" [attr.aria-label]="post.title">
                <div class="blog-card-media">
                  <img [src]="post.image" [alt]="post.imageAlt" loading="lazy" decoding="async" />
                </div>
                <div class="blog-card-body">
                  <p class="blog-meta">
                    <span class="blog-cat">{{ post.category }}</span>
                    <span>{{ fmt(post.date) }} · {{ post.readMinutes }} min read</span>
                  </p>
                  <h2>{{ post.title }}</h2>
                  <p class="blog-excerpt">{{ post.description }}</p>
                  <span class="blog-more">Read article →</span>
                </div>
              </a>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class BlogListComponent {
  readonly posts = SORTED_POSTS;
  readonly fmt = formatPostDate;
  /** Only categories that have at least one post. */
  readonly categories = BLOG_CATEGORIES.filter((c) => SORTED_POSTS.some((p) => p.category === c));
  readonly active = signal<BlogCategory | null>(null);
  readonly shown = computed(() => {
    const c = this.active();
    return c ? this.posts.filter((p) => p.category === c) : this.posts;
  });
  count(c: BlogCategory): number {
    return this.posts.filter((p) => p.category === c).length;
  }
}
