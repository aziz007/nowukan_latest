import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collaborate-teaser',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="collaborate-teaser">
      <div class="container collab-teaser-grid">
        <div class="collab-teaser-icon">
          <svg viewBox="0 0 100 100" width="84" height="84" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="collabTeaserGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#F6C85F" />
                <stop offset="1" stop-color="#D6A536" />
              </linearGradient>
            </defs>
            <circle cx="38" cy="50" r="26" fill="none" stroke="url(#collabTeaserGrad)" stroke-width="6" />
            <circle cx="62" cy="50" r="26" fill="none" stroke="#1687FF" stroke-width="6" />
          </svg>
        </div>
        <div class="collab-teaser-copy">
          <div class="section-title"><h2>Let's Work Together</h2></div>
          <p>
            We welcome collaboration with marketing agencies, influencers, educational
            professionals, academic institutions, EdTech providers, governments, NGOs, and
            HR &amp; L&amp;D teams worldwide — anyone who shares our mission of making English
            language development accessible to everyone.
          </p>
          <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class CollaborateTeaserComponent {}
