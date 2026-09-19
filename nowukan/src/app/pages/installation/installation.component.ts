import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell page-shell-tight">
      <div class="container prose prose-wide">
        <p class="eyebrow">How It Works</p>
        <h1 class="section-title">Installation</h1>

        <p class="sub">Installing nowUKan is quick and straightforward.</p>

        <p>
          Once installed, the application can operate offline, allowing you to continue
          learning without relying on a continuous internet connection.
        </p>
        <p>
          This makes nowUKan particularly suitable for learners and organisations in areas
          where internet access may be limited or unreliable.
        </p>
        <p>
          If you have any technical issue or simply need help, please reach out to our tech
          team: <a href="mailto:tech@nowukan.io?subject=Tech%20Team%20-%20Website">tech&#64;nowukan.io</a>
        </p>
      </div>
    </section>

    <section class="page-shell page-shell-tight">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <h3>Minimum Device Requirements</h3>
          <ul>
            <li>Operating system: [confirm minimum Android / iOS version]</li>
            <li>Storage: [confirm minimum free storage]</li>
            <li>RAM: [confirm minimum RAM]</li>
            <li>Screen size: [confirm minimum screen size]</li>
          </ul>

          <p class="note"><strong>Install once. Learn anywhere.</strong></p>

          <div class="btn-row">
            <a routerLink="/download" class="btn btn-benefits">Free Trial</a>
          </div>
        </div>

        <div class="journey-visual">
          <div class="icon-badge-panel">
            <span class="icon-badge-ico">
              <svg viewBox="0 0 100 100" width="72" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="installIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <rect x="32" y="10" width="36" height="76" rx="8" fill="none" stroke="url(#installIconGrad)" stroke-width="5"/>
                <line x1="44" y1="78" x2="56" y2="78" stroke="url(#installIconGrad)" stroke-width="5" stroke-linecap="round"/>
                <path d="M50 32v26M40 48l10 12 10-12" fill="none" stroke="#1687FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="icon-badge-label">Works Offline<br />After Install</span>
          </div>
          <figure class="people-cutout">
            <img src="assets/img/installation-graphic.png" alt="nowUKan installing and working fully offline" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class InstallationComponent {}
