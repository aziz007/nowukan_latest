import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <div class="section-title">Get the NowUkan app</div>
        <p class="sub">
          Everything you need to start learning real English — free to download,
          on iOS and Android.
        </p>
        <div class="btn-row">
          <a class="btn btn-primary" href="#" rel="noopener">Download on the App Store</a>
          <a class="btn btn-primary" href="#" rel="noopener">Get it on Google Play</a>
        </div>
        <p class="sub" style="margin-top:24px">
          Prefer a classroom rollout?
          <a routerLink="/pilot-programme">Request a pilot →</a>
        </p>
      </div>
    </section>
  `,
})
export class DownloadComponent {}
