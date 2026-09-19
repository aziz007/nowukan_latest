import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-local-authorities',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Sectors</p>
          <h1 class="section-title">Local Authorities</h1>

          <p class="sub">
            Support local communities with accessible English language development and
            assessment for residents, workers and newcomers where English may not be the first
            language, helping to improve integration.
          </p>

          <p>
            nowUKan can help local authorities extend language provision while working within
            limited budgets and reaching communities where access to traditional learning may be
            difficult.
          </p>
          <p>
            Its offline capability also provides an opportunity to support learners in community
            settings and areas with limited or unreliable internet access.
          </p>
          <p>
            For further information or to discuss our Enterprise Programme, contact us to arrange
            a video call with a senior member of our team.
          </p>

          <p class="note"><strong>Talk to us about supporting your local community.</strong></p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Book A Consultation</a>
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
          </div>
        </div>

        <div class="journey-visual">
          <div class="icon-badge-panel">
            <span class="icon-badge-ico">
              <svg viewBox="0 0 100 100" width="72" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="localAuthIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <path d="M50 10c-16 0-28 12-28 28 0 20 28 50 28 50s28-30 28-50c0-16-12-28-28-28z" fill="none" stroke="url(#localAuthIconGrad)" stroke-width="5" stroke-linejoin="round"/>
                <circle cx="42" cy="36" r="7" fill="none" stroke="url(#localAuthIconGrad)" stroke-width="5"/>
                <circle cx="58" cy="36" r="7" fill="none" stroke="#1687FF" stroke-width="5"/>
                <path d="M32 52c0-7 6-10 10-10M68 52c0-7-6-10-10-10" fill="none" stroke="url(#localAuthIconGrad)" stroke-width="5" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="icon-badge-label">Supporting Local<br />Communities</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LocalAuthoritiesComponent {}
