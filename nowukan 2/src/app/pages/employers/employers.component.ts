import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employers',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Sectors</p>
          <h1 class="section-title">Employers</h1>

          <p class="sub">
            Help employees develop the English language and communication skills needed to
            perform confidently in the workplace.
          </p>

          <p>
            nowUKan can support workforce development, career progression, customer
            communication, employee integration and the development and growth of international
            business.
          </p>

          <p class="note"><strong>Investing In Your Staff Pays Dividends.</strong></p>

          <p>
            By helping employees improve vocabulary, pronunciation and practical communication,
            organisations can support stronger workplace interactions, greater confidence and
            improved opportunities for career development.
          </p>
          <p>
            For further information or to discuss our Enterprise Programme, contact us to arrange
            a video call with a senior member of our team.
          </p>

          <p class="note"><strong>Work with us to develop your workforce and strengthen communication.</strong></p>

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
                  <linearGradient id="employersIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <rect x="14" y="38" width="72" height="46" rx="6" fill="none" stroke="url(#employersIconGrad)" stroke-width="5"/>
                <path d="M36 38v-8c0-4 3-7 7-7h14c4 0 7 3 7 7v8" fill="none" stroke="url(#employersIconGrad)" stroke-width="5" stroke-linejoin="round"/>
                <path d="M14 58h72" stroke="url(#employersIconGrad)" stroke-width="5"/>
                <rect x="43" y="52" width="14" height="12" rx="2" fill="none" stroke="#1687FF" stroke-width="5"/>
              </svg>
            </span>
            <span class="icon-badge-label">Workplace<br />Communication</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class EmployersComponent {}
