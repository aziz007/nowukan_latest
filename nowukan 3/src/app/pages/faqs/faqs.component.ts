import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQS } from './faq-data';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Help</p>
        <h1 class="section-title">Frequently Asked Questions</h1>
        <p class="sub">Answers to the questions we hear most often.</p>

        <div class="faq-list">
          @for (f of faqs; track f.q; let i = $index) {
            <details class="faq-item" [open]="i === 0">
              <summary><h2>{{ f.q }}</h2></summary>
              <div class="faq-answer" [innerHTML]="f.a"></div>
            </details>
          }
        </div>

        <p>Can't find what you're looking for? <a routerLink="/contact">Contact the team</a>.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Free 7-Day Trial</a>
          <a routerLink="/buy-now" class="btn">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class FaqsComponent {
  readonly faqs = FAQS;
}
