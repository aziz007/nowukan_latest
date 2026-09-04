import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">About</p>
          <h1 class="section-title">Where Innovation Meets Excellence</h1>

          <p class="sub">
            We are a dynamic team of visionaries, creators and innovators, united by a shared
            passion for transforming ideas into impactful solutions that make a real difference.
          </p>

          <p>
            Our dedicated team is committed to making language learning and assessment more
            affordable, scalable and accessible to people around the world.
          </p>
          <p>
            We develop our technology and content in-house, giving us greater control over the
            quality, security, reliability and continued development of our solutions.
          </p>
          <p>
            By not relying on third-party technology, we can respond quickly to changing needs,
            continuously innovate and maintain a consistent experience for our partners and end
            users.
          </p>
          <p>
            Our technology and innovation allows us to remove the traditional barriers to
            language development and assessment, making high-quality English language support
            available to everyone.
          </p>

          <p class="note"><strong>We're Building the Future of Language Learning.</strong></p>

          <div class="btn-row">
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <div class="icon-badge-panel">
            <span class="icon-badge-ico">
              <svg viewBox="0 0 100 100" width="72" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="aboutIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <path d="M50 6c14 10 20 26 20 42 0 6-2 12-5 17l-15 15-15-15c-3-5-5-11-5-17 0-16 6-32 20-42z" fill="none" stroke="url(#aboutIconGrad)" stroke-width="4" stroke-linejoin="round"/>
                <circle cx="50" cy="40" r="8" fill="none" stroke="url(#aboutIconGrad)" stroke-width="4"/>
                <path d="M34 62 L22 74 M66 62 L78 74" stroke="url(#aboutIconGrad)" stroke-width="4" stroke-linecap="round"/>
                <path d="M42 80 Q50 96 58 80" fill="none" stroke="#1687FF" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="icon-badge-label">Building The<br />Future Of Learning</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
