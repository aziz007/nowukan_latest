import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LANDING_PAGES, LandingPage, findLanding } from './landing-data';
import { TOPIC_PAGES, TopicPage } from '../learn/learn-data';

/** One template for every commercial search page in landing-data.ts. */
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (page; as p) {
      <section class="page-shell">
        <div class="container" [class.lp-hero]="!!p.image">
          <div class="prose prose-wide">
            <p class="eyebrow">{{ p.eyebrow }}</p>
            <h1 class="section-title">{{ p.heading }}</h1>
            <p class="sub">{{ p.lead }}</p>
            <div class="btn-row">
              <a routerLink="/download" class="btn btn-gold">Free 7-Day Trial</a>
              <a routerLink="/buy-now" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
          @if (p.image) {
            <figure class="lp-hero-img">
              <img [src]="p.image" [alt]="p.imageAlt" fetchpriority="high" decoding="async" />
            </figure>
          }
        </div>

        <div class="container prose prose-wide lp">
          @for (s of p.sections; track s.heading) {
            <h2>{{ s.heading }}</h2>
            @for (para of s.paragraphs ?? []; track para) { <p>{{ para }}</p> }
            @if (s.bullets) {
              <ul class="learn-checks">
                @for (b of s.bullets; track b) { <li>{{ b }}</li> }
              </ul>
            }
          }

          @if (topics.length) {
            <h2>Try it now: free topic previews</h2>
            <div class="learn-grid learn-grid-4">
              @for (t of topics; track t.slug) {
                <a class="learn-card learn-card-sm" [routerLink]="['/learn-english/topics', t.slug]">
                  <h3>{{ t.heading }}</h3>
                  <span class="blog-more">Words, phrases & dialogue →</span>
                </a>
              }
            </div>
            <p class="learn-more-link"><a routerLink="/learn-english">See the full Real-Life English Map →</a></p>
          }

          <h2>Questions and answers</h2>
          <div class="faq-list">
            @for (f of p.faqs; track f.q) {
              <details class="faq-item">
                <summary><h3>{{ f.q }}</h3></summary>
                <div class="faq-answer">{{ f.a }}</div>
              </details>
            }
          </div>

          <aside class="blog-cta">
            <h2>No subscriptions. No internet dependency. No distractions.</h2>
            <p>Just practical English learning, wherever and whenever you want. Try it free for 7 days.</p>
            <div class="btn-row">
              <a routerLink="/download" class="btn btn-gold">Free 7-Day Trial</a>
              <a routerLink="/buy-now" class="btn btn-primary">Buy Now</a>
              <a routerLink="/book-a-consultation" class="btn btn-dark">For Schools &amp; Organisations</a>
            </div>
          </aside>

          <h2>You may also like</h2>
          <div class="btn-row">
            @for (r of related; track r.slug) {
              <a class="btn" [routerLink]="['/', r.slug]">{{ r.eyebrow }}</a>
            }
          </div>
        </div>
      </section>
    }
  `,
})
export class LandingPageComponent {
  readonly page: LandingPage | undefined = findLanding(inject(ActivatedRoute).snapshot.data['slug']);
  readonly topics = (this.page?.topics ?? [])
    .map((s) => TOPIC_PAGES.find((t) => t.slug === s))
    .filter((t): t is TopicPage => !!t);
  readonly related = (this.page?.related ?? [])
    .map((s) => LANDING_PAGES.find((l) => l.slug === s))
    .filter((l): l is LandingPage => !!l);
}
