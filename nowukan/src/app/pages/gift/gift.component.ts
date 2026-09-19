import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Get Started</p>
          <h1 class="section-title">Gift nowUKan</h1>

          <p class="sub">Give someone the opportunity to develop their English with nowUKan.</p>

          <p>
            Whether it's a friend, family member, colleague, student, employee, or simply
            somebody you feel deserves the opportunity, a nowUKan gift provides access to
            practical English language development and assessment, pronunciation practice and
            confidence-building activities.
          </p>
          <p>
            An affordable and meaningful gift that can support learning, career development and
            new opportunities, while helping someone build the English skills and confidence
            they need to achieve more.
          </p>

          <p class="note"><strong>Give the gift of English and help change someone's life forever!</strong></p>

          <div class="btn-row">
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <div class="icon-badge-panel">
            <span class="icon-badge-ico">
              <svg viewBox="0 0 100 100" width="72" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="giftIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <rect x="18" y="46" width="64" height="42" rx="4" fill="none" stroke="url(#giftIconGrad)" stroke-width="5"/>
                <rect x="12" y="32" width="76" height="16" rx="3" fill="none" stroke="url(#giftIconGrad)" stroke-width="5"/>
                <line x1="50" y1="32" x2="50" y2="88" stroke="url(#giftIconGrad)" stroke-width="5"/>
                <path d="M50 32c-4-14-28-16-28-4c0 8 14 8 28 4z" fill="none" stroke="url(#giftIconGrad)" stroke-width="5" stroke-linejoin="round"/>
                <path d="M50 32c4-14 28-16 28-4c0 8-14 8-28 4z" fill="none" stroke="url(#giftIconGrad)" stroke-width="5" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="icon-badge-label">Give The Gift<br />Of English</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class GiftComponent {}
