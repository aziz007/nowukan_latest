import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LEVELS, TOPIC_PAGES, TopicPage, findTopicPage, pillarOf } from './learn-data';
import { SpeakingChallengeComponent } from './speaking-challenge.component';

@Component({
  selector: 'app-learn-topic',
  standalone: true,
  imports: [RouterLink, SpeakingChallengeComponent],
  template: `
    @if (topic; as t) {
      <article class="page-shell">
        <div class="container prose prose-wide lp">
          <nav class="blog-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/learn-english">Learn English</a></li>
              <li aria-current="page">{{ t.heading }}</li>
            </ol>
          </nav>
          <p class="eyebrow">{{ pillar }}</p>
          <h1 class="section-title">{{ t.heading }}</h1>
          <p class="sub">{{ t.situation }}</p>

          <h2>What you will learn</h2>
          <ul class="learn-checks">
            @for (i of t.learn; track i) { <li>{{ i }}</li> }
          </ul>

          @for (x of t.extras ?? []; track x.heading) {
            <h2>{{ x.heading }}</h2>
            @for (para of x.paragraphs ?? []; track para) { <p>{{ para }}</p> }
            @if (x.bullets) {
              <ul>
                @for (b of x.bullets; track b) { <li>{{ b }}</li> }
              </ul>
            }
          }

          @for (l of levels; track l.key) {
            <section class="learn-level" [id]="l.key">
              <h2><span class="blog-cat">{{ l.name }}</span> {{ l.label }} preview</h2>
              <div class="learn-grid learn-grid-2">
                <div class="learn-card">
                  <h3>Words</h3>
                  <ul class="learn-words">
                    @for (w of t.samples[l.key].words; track w) { <li>{{ w }}</li> }
                  </ul>
                  <h3>Useful phrases</h3>
                  <ul>
                    @for (p of t.samples[l.key].phrases; track p) { <li>{{ p }}</li> }
                  </ul>
                </div>
                <div class="learn-card">
                  <h3>Short dialogue</h3>
                  <dl class="learn-dialogue">
                    @for (d of t.samples[l.key].dialogue; track $index) {
                      <dt>{{ d[0] }}</dt>
                      <dd>{{ d[1] }}</dd>
                    }
                  </dl>
                </div>
              </div>
              <p class="learn-more-link">
                <a [routerLink]="['/learn-english', l.key]">More about {{ l.name }} →</a>
              </p>
            </section>
          }

          <app-speaking-challenge [phrases]="t.challenge" />

          <p class="note">
            This page is a short preview. The nowUKan app has the full topic at every level, with
            Words, Phrases, Dialogue and QuickFire practice and feedback on every sound you say.
          </p>

          <h2>Related topics</h2>
          <div class="learn-grid learn-grid-3">
            @for (r of related; track r.slug) {
              <a class="learn-card learn-card-sm" [routerLink]="['/learn-english/topics', r.slug]">
                <h3>{{ r.heading }}</h3>
                <span class="blog-more">Open topic →</span>
              </a>
            }
          </div>

          <aside class="blog-cta">
            <h2>Practise {{ t.heading }} in the app</h2>
            <p>Free for 7 days. Then one low-cost payment, yours for life, with no subscription and no adverts.</p>
            <div class="btn-row">
              <a routerLink="/download" class="btn btn-gold">Start Your Free 7-Day Trial</a>
              <a routerLink="/buy-now" class="btn btn-primary">Buy Now</a>
            </div>
          </aside>
        </div>
      </article>
    }
  `,
})
export class LearnTopicComponent {
  readonly topic: TopicPage | undefined = findTopicPage(inject(ActivatedRoute).snapshot.data['slug']);
  readonly levels = LEVELS;
  readonly pillar = this.topic ? (pillarOf(this.topic.topic)?.name ?? 'Learn English') : '';
  readonly related = (this.topic?.related ?? [])
    .map((s) => TOPIC_PAGES.find((t) => t.slug === s))
    .filter((t): t is TopicPage => !!t);
}
