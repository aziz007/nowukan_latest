import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Free Trial</p>
          <h1 class="section-title">Try nowUKan Free for 7 Days</h1>

          <p class="sub">
            Experience nowUKan for yourself with our<br />
            7-day free trial.
          </p>

          <p>
            Explore the learning journey, practise your English, test your pronunciation<br />
            and discover how our platform can help you develop your language skills<br />
            and confidence.
          </p>
          <p>
            There is no obligation to continue. Take the time to explore the app,<br />
            understand how it works and decide whether nowUKan is right for you.
          </p>

          <p class="note"><strong>Start your free trial today.</strong></p>

          <div class="btn-row">
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>

          <p>
            Your 7-day free trial gives you the opportunity to experience nowUKan<br />
            before deciding whether to continue.
          </p>
          <p>
            If you choose to continue, our exceptionally low-cost, one-time pricing<br />
            means there are no recurring monthly subscription fees. You pay once<br />
            and can use the app for life.
          </p>

          <p class="sub">
            Prefer a classroom rollout?
            <a routerLink="/institutions/pilot-programme">Request a pilot →</a>
          </p>
        </div>

        <div class="journey-visual">
          <figure class="people-cutout trial-badge">
            <img src="assets/img/free-trial-badge.webp" alt="100% Free Trial — try nowUKan now" width="512" height="514" />
          </figure>
          <div class="icon-badge-label" style="text-align:center">7 Days Free<br />No Obligation</div>
        </div>
      </div>
    </section>
  `,
})
export class DownloadComponent {}
