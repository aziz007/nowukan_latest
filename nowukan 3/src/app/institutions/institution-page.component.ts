import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { INSTITUTION_PAGES, InstitutionPage, findInstitutionPage } from './institution-data';

/** Template for enterprise sector pages and trust pages (content in institution-data.ts). */
@Component({
  selector: 'app-institution-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (page; as p) {
      <section class="page-shell">
        <div class="container" [class.lp-hero]="!!p.image">
          <div class="prose prose-wide">
            <nav class="blog-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><a routerLink="/">Home</a></li>
                <li><a routerLink="/enterprise">Enterprise</a></li>
                <li aria-current="page">{{ p.eyebrow }}</li>
              </ol>
            </nav>
            <p class="eyebrow">{{ p.eyebrow }}</p>
            <h1 class="section-title">{{ p.heading }}</h1>
            <p class="sub">{{ p.lead }}</p>
            <div class="btn-row">
              <a routerLink="/book-a-consultation" class="btn btn-gold">Book A Consultation</a>
              @if (p.kind === 'sector') {
                <a routerLink="/institutions/pilot-programme" class="btn btn-primary">Request A Pilot</a>
              }
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

          @if (p.kind === 'sector') {
            <h2>How a programme works</h2>
            <div class="learn-grid learn-grid-4">
              <div class="learn-card"><span class="blog-cat">1</span><h3>Consultation</h3><p>A video call with a senior member of our team to understand your objectives.</p></div>
              <div class="learn-card"><span class="blog-cat">2</span><h3>Pilot</h3><p>Evaluate engagement and outcomes with a selected group of learners.</p></div>
              <div class="learn-card"><span class="blog-cat">3</span><h3>Licences</h3><p>Prepaid volume licences at fixed, transparent pricing. No subscriptions.</p></div>
              <div class="learn-card"><span class="blog-cat">4</span><h3>Rollout</h3><p>Learners install once; nowUKan then works fully offline.</p></div>
            </div>
            <p class="learn-more-link">
              <a routerLink="/implementation">Implementation</a> ·
              <a routerLink="/assessment">Assessment</a> ·
              <a routerLink="/procurement">Procurement</a> ·
              <a routerLink="/data-security">Data security</a>
            </p>
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
            <h2>One organisation. Thousands of learners. One simple solution.</h2>
            <p>Talk to a senior member of our team about volume licences, pilots and bespoke options.</p>
            <div class="btn-row">
              <a routerLink="/book-a-consultation" class="btn btn-gold">Book A Consultation</a>
              <a routerLink="/contact" class="btn btn-dark">Contact Us</a>
            </div>
          </aside>

          <h2>{{ p.kind === 'sector' ? 'Other sectors' : 'More for organisations' }}</h2>
          <div class="btn-row">
            @for (o of others; track o.slug) {
              <a class="btn" [routerLink]="['/', o.slug]">{{ o.eyebrow }}</a>
            }
          </div>
        </div>
      </section>
    }
  `,
})
export class InstitutionPageComponent {
  readonly page: InstitutionPage | undefined = findInstitutionPage(inject(ActivatedRoute).snapshot.data['slug']);
  readonly others = INSTITUTION_PAGES.filter((o) => o.kind === this.page?.kind && o.slug !== this.page?.slug && !o.draft);
}
