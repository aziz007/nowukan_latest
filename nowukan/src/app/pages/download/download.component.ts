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
        <div class="btn-row">
          <a class="btn btn-benefits" href="#" rel="noopener">Download on the App Store</a>
          <a class="btn btn-benefits" href="#" rel="noopener">Get it on Google Play</a>
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
