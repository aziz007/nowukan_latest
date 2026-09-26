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

          <h3 class="nowrap-desktop">Minimum Device Requirements</h3>
          <ul class="spec-list">
            @for (spec of confirmedSpecs; track spec.label) {
              <li><strong>{{ spec.label }}:</strong> {{ spec.value }}</li>
            }
          </ul>

          <p class="note"><strong>Install once. <br />Learn anywhere.</strong></p>

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
export class InstallationComponent {
  /**
   * Minimum device requirements shown on the page.
   *
   * Any entry with an empty value is hidden automatically, so an unconfirmed
   * placeholder can never appear on the live site. To add a spec once the
   * app team confirms it, just fill in its value.
   *
   * Operating system wording is taken from the site's own Terms & Conditions
   * (terms.component.html) — keep the two in sync if it changes.
   */
  readonly specs: { label: string; value: string }[] = [
    { label: 'Operating system', value: 'Android 9 or above, or iOS 9 or above (iPhone 5S or newer, 64-bit)' },
    { label: 'Storage', value: '' }, // e.g. 'At least 500 MB free space' — TO CONFIRM
    { label: 'RAM', value: '' }, // e.g. '2 GB' — TO CONFIRM
    { label: 'Screen size', value: '' }, // e.g. '4.7 inches or larger' — TO CONFIRM
  ];

  readonly confirmedSpecs = this.specs.filter((s) => s.value.trim() !== '');
}
