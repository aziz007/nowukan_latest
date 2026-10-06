import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell page-shell-tight">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">How It Works</p>
          <h1 class="section-title">Installation</h1>

          <p class="sub">Installing nowUKan is quick and straightforward.</p>

          <p>
            Once installed, the application can operate offline, allowing you to continue <br />
            learning without relying on a continuous internet connection.
          </p>
          <p>
            This makes nowUKan particularly suitable for learners and organisations in <br />
            areas where internet access may be limited or unreliable.
          </p>
          <p>
            If you have any technical issue or simply need help, please reach out to our <br />
            tech team: <a href="mailto:tech@nowukan.io?subject=Tech%20Team%20-%20Website">tech&#64;nowukan.io</a>
          </p>

          <p class="note"><strong>Install once. Learn anywhere.</strong></p>

          <h3>Minimum Device Specifications</h3>
          <p>
            To provide a reliable experience, the app requires a compatible mobile device <br />
            meeting the following minimum specifications:
          </p>

          <h4 class="spec-heading">Apple iOS</h4>
          <ul class="spec-list">
            <li><strong>Operating System:</strong> iOS 15.0 or later</li>
            <li><strong>CPU:</strong> 64-bit Apple processor (A7 or later)</li>
            <li><strong>RAM:</strong> 2 GB minimum</li>
            <li><strong>Storage:</strong> At least 500 MB of available storage</li>
            <li><strong>Internet:</strong> Wi-Fi or mobile data connection required for online features</li>
          </ul>
          <p class="note">
            <strong>Note:</strong> Starting in Spring 2027, all iOS apps must have a MinimumOSVersion of 15.0
          </p>

          <h4 class="spec-heading">Android</h4>
          <ul class="spec-list">
            <li><strong>Operating System:</strong> Android 8.0 (API 26) or later</li>
            <li><strong>CPU:</strong> 64-bit ARM processor recommended</li>
            <li><strong>RAM:</strong> 2 GB minimum</li>
            <li><strong>Storage:</strong> At least 500 MB of available storage</li>
            <li><strong>Internet:</strong> Wi-Fi or mobile data connection required for online features</li>
          </ul>

          <h3>Recommended Specification</h3>
          <p>For the best performance, we recommend:</p>
          <ul class="spec-list">
            <li><strong>RAM:</strong> 4 GB or more</li>
            <li>64-bit processor</li>
            <li>Latest supported version of iOS or Android</li>
            <li>At least 1 GB of available storage</li>
            <li>A reliable Wi-Fi or mobile data connection</li>
          </ul>

          <div class="btn-row">
            <a routerLink="/download" class="btn btn-benefits">Free Trial</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="people-cutout">
            <img src="assets/img/installation-graphic.webp" alt="nowUKan installing and working fully offline" />
          </figure>
          <div class="icon-badge-label icon-badge-label-oneline-lg" style="text-align:center">Works Offline After Install</div>
        </div>
      </div>
    </section>
  `,
})
export class InstallationComponent {}
