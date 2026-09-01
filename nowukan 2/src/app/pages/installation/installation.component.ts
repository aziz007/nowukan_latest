import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
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
            <span class="icon-badge-ico">📲</span>
            <span class="icon-badge-label">Works Offline<br />After Install</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class InstallationComponent {}
