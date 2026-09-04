import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-security',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell page-shell-tight">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">How It Works</p>
          <h1 class="section-title">Data Security</h1>

          <p class="sub">Your data belongs to you. Your privacy matters to us.</p>

          <p>
            Your privacy is paramount to us. nowUKan is designed with privacy and data security
            in mind, with the application operating offline after installation.
          </p>
          <p>
            We do not data mine, sell or share personal user information for commercial
            purposes.
          </p>
          <p>
            The limited information collected during registration is used only to manage your
            account and, where necessary, identify you when you contact us for support.
          </p>

          <p class="note"><strong>Your data belongs to you. Your privacy matters to us.</strong></p>

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
                  <linearGradient id="dsIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <path d="M32 44V32a18 18 0 0 1 36 0v12" fill="none" stroke="url(#dsIconGrad)" stroke-width="5" stroke-linecap="round"/>
                <rect x="22" y="44" width="56" height="42" rx="10" fill="none" stroke="url(#dsIconGrad)" stroke-width="5"/>
                <circle cx="50" cy="63" r="6" fill="url(#dsIconGrad)"/>
                <path d="M50 69v9" stroke="url(#dsIconGrad)" stroke-width="5" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="icon-badge-label">Zero Data<br />Mining</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class DataSecurityComponent {}
