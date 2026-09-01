import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Free Trial</p>
        <h1 class="section-title">Try nowUKan Free for 7 Days</h1>

        <p class="sub">Experience nowUKan for yourself with our 7-day free trial.</p>

        <p>
          Explore the learning journey, practise your English, test your pronunciation and
          discover how our platform can help you develop your language skills and confidence.
        </p>
        <p>
          There is no obligation to continue. Take the time to explore the app, understand how
          it works and decide whether nowUKan is right for you.
        </p>

        <h3>Start Your Free Trial Today</h3>
        <div class="store-badges">
          <a class="store-badge" href="#" rel="noopener" aria-label="Download on the App Store">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.97-.19 2.15-.88 3.31-.79 1.63.13 2.83.79 3.61 2.05-3.35 2-2.56 6.1.68 7.31-.58 1.58-1.34 3.15-2.68 3.6zM12.03 7.25c-.15-2.23 1.66-4.09 3.74-4.25.29 2.13-1.68 4.27-3.74 4.25z"/></svg>
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </a>
          <a class="store-badge" href="#" rel="noopener" aria-label="Get it on Google Play">
            <svg viewBox="0 0 24 24" width="26" height="26"><path fill="#00D4FF" d="M3.6 2.4c-.4.3-.6.8-.6 1.4v16.4c0 .6.2 1.1.6 1.4l.1.1L13 12.3v-.2L3.7 2.3z"/><path fill="#FFCE00" d="M16.1 15.4 13 12.3v-.6l3.1-3.1 5.5 3.1c1.2.7 1.2 1.9 0 2.6z"/><path fill="#FF3D57" d="M16.1 15.4 13 12l-9.4 9.4c.4.4 1 .5 1.7.1z"/><path fill="#38EF7D" d="M16.1 8.6 4.3 2.1c-.7-.4-1.3-.3-1.7.1L13 12z"/></svg>
            <span>
              <small>GET IT ON</small>
              Google Play
            </span>
          </a>
        </div>
        <br />

        <p>
          Your 7-day free trial gives you the opportunity to experience nowUKan before deciding
          whether to continue.
        </p>
        <p>
          If you choose to continue, our exceptionally low-cost, one-time pricing means there
          are no recurring monthly subscription fees. You pay once and can use the app for
          life.
        </p>

        <p class="sub">
          Prefer a classroom rollout?
          <a routerLink="/institutions/pilot-programme">Request a pilot →</a>
        </p>
      </div>
    </section>
  `,
})
export class DownloadComponent {}
