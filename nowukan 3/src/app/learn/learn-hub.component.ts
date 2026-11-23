import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LEVELS, PILLARS, TOPIC_PAGES, topicSlug } from './learn-data';

@Component({
  selector: 'app-learn-hub',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide lp">
        <p class="eyebrow">Learn English</p>
        <h1 class="section-title">Real-Life English, From First Words to Fluent Conversation</h1>
        <p class="sub">
          Speak English with confidence: practical, real-world British English with CEFR aligned
          content from A1 to C2, on-device speech analysis, fully offline learning and one low,
          one-off payment.
        </p>
        <p>
          nowUKan is built around the situations you actually meet: interviews, appointments, travel,
          study, work and everyday life. Each topic takes you through four stages,
          <strong>Words → Phrases → Dialogue → QuickFire</strong>, so you do not just recognise English,
          you can say it.
        </p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-gold">Free 7-Day Trial</a>
          <a routerLink="/buy-now" class="btn btn-primary">Buy Now</a>
        </div>

        <h2>Choose your level</h2>
        <div class="learn-grid learn-grid-3">
          @for (l of levels; track l.key) {
            <a class="learn-card" [routerLink]="['/learn-english', l.key]">
              <span class="blog-cat">{{ l.name }}</span>
              <h3>{{ l.label }}</h3>
              <p>{{ l.intro }}</p>
              <span class="blog-more">Explore {{ l.name }} →</span>
            </a>
          }
        </div>

        <h2>Popular topics</h2>
        <div class="learn-grid learn-grid-4">
          @for (t of featured; track t.slug) {
            <a class="learn-card learn-card-sm" [routerLink]="['/learn-english/topics', t.slug]">
              <h3>{{ t.heading }}</h3>
              <span class="blog-more">Words, phrases & dialogue →</span>
            </a>
          }
        </div>

        <h2>The Real-Life English Map</h2>
        <p>{{ topicCount }} topic areas, organised into eight pillars. Every topic is available at all three levels in the app.</p>
        <div class="learn-grid learn-grid-2">
          @for (p of pillars; track p.name) {
            <div class="learn-card learn-pillar">
              <h3>{{ p.name }}</h3>
              <p>{{ p.summary }}</p>
              <ul class="learn-topic-list">
                @for (t of p.topics; track t) {
                  <li>
                    @if (slug(t); as s) {
                      <a [routerLink]="['/learn-english/topics', s]">{{ t }}</a>
                    } @else {
                      <span>{{ t }}</span>
                    }
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <aside class="blog-cta">
          <h2>The website shows the depth. The app delivers the learning.</h2>
          <p>Try every topic, at every level, free for 7 days. Then pay once and keep it for life.</p>
          <div class="btn-row">
            <a routerLink="/download" class="btn btn-gold">Free 7-Day Trial</a>
            <a routerLink="/book-a-consultation" class="btn btn-dark">For Schools &amp; Organisations</a>
          </div>
        </aside>
      </div>
    </section>
  `,
})
export class LearnHubComponent {
  readonly levels = LEVELS;
  readonly pillars = PILLARS;
  readonly featured = TOPIC_PAGES;
  readonly topicCount = PILLARS.reduce((n, p) => n + p.topics.length, 0);
  readonly slug = topicSlug;
}
