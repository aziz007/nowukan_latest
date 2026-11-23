import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LEVELS, Level, TOPIC_PAGES, findLevel } from './learn-data';

@Component({
  selector: 'app-learn-level',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (level; as l) {
      <section class="page-shell">
        <div class="container prose prose-wide lp">
          <nav class="blog-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/learn-english">Learn English</a></li>
              <li aria-current="page">{{ l.name }}</li>
            </ol>
          </nav>
          <p class="eyebrow">{{ l.label }}</p>
          <h1 class="section-title">{{ l.title }}</h1>
          <p class="sub">{{ l.intro }}</p>

          <div class="learn-grid learn-grid-2">
            <div class="learn-card">
              <h2>What you will be able to do</h2>
              <ul>
                @for (c of l.canDo; track c) { <li>{{ c }}</li> }
              </ul>
            </div>
            <div class="learn-card">
              <h2>What you practise</h2>
              <ul>
                @for (f of l.focus; track f) { <li>{{ f }}</li> }
              </ul>
            </div>
          </div>

          <h2>How it works at {{ l.name }}</h2>
          <p>
            Every topic follows the same four stages: <strong>Words</strong>, <strong>Phrases</strong>,
            <strong>Dialogue</strong> and <strong>QuickFire</strong>. You hear the language, say it,
            and get instant feedback from on-device speech analysis, with each sound scored from Poor to Excellent.
            It all works offline once installed.
          </p>

          <h2>{{ l.name }} topics to try</h2>
          <div class="learn-grid learn-grid-3">
            @for (t of topics; track t.slug) {
              <a class="learn-card learn-card-sm" [routerLink]="['/learn-english/topics', t.slug]" [fragment]="l.key">
                <h3>{{ t.heading }}</h3>
                <p class="learn-sample">“{{ t.samples[l.key].phrases[0] }}”</p>
                <span class="blog-more">See the {{ l.name }} preview →</span>
              </a>
            }
          </div>

          <h2>Other levels</h2>
          <div class="btn-row">
            @for (o of others; track o.key) {
              <a class="btn" [routerLink]="['/learn-english', o.key]">{{ o.name }} · {{ o.label }}</a>
            }
          </div>

          <aside class="blog-cta">
            <h2>Start practising at {{ l.name }}</h2>
            <p>Try nowUKan free for 7 days. One low-cost payment after that, with no subscription.</p>
            <div class="btn-row">
              <a routerLink="/download" class="btn btn-gold">Free 7-Day Trial</a>
              <a routerLink="/buy-now" class="btn btn-primary">Buy Now</a>
            </div>
          </aside>
        </div>
      </section>
    }
  `,
})
export class LearnLevelComponent {
  readonly level: Level | undefined = findLevel(inject(ActivatedRoute).snapshot.data['level']);
  readonly topics = TOPIC_PAGES;
  readonly others = LEVELS.filter((l) => l.key !== this.level?.key);
}
