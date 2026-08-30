import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collaborate',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Collaborate</p>
          <h1 class="section-title">Collaborate With Us</h1>

          <p class="sub">We welcome collaboration with like-minded professionals worldwide.</p>

          <ul>
            <li>Marketing agencies</li>
            <li>Influencers / KOL's</li>
            <li>Educational professionals</li>
            <li>Teachers and lecturers</li>
            <li>Academic institutions</li>
            <li>Edtech providers</li>
            <li>Training providers / VET</li>
            <li>Government and non-government organisations</li>
            <li>HR and Learning &amp; Development teams</li>
            <li>Policy makers and public-sector bodies</li>
            <li>Journalists and industry publications</li>
          </ul>

          <p>
            Our proprietary technology presents a compelling opportunity to reduce costs while
            generating an additional revenue stream.
          </p>

          <p>You can either:</p>
          <ol>
            <li>Purchase prepaid student licences to resell at your discretion; or</li>
            <li>
              Promote and direct users to our website, where they can register and enjoy a free
              7-day trial.
            </li>
          </ol>

          <p>
            We offer a monthly revenue share for all active paid users — fully traceable and
            transparently reported.
          </p>

          <p>
            <strong>Want more information?</strong> Get in touch and a member of our team will
            contact you to open dialogue.
          </p>
          <p class="note">
            <strong>Note:</strong> By contacting us, you confirm your acceptance of our Terms
            and Privacy Policy.
          </p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Contact The Team</a>
            <a routerLink="/" class="btn btn-benefits">Back to Home</a>
          </div>
        </div>

        <div class="journey-visual">
          <div class="icon-badge-panel">
            <span class="icon-badge-ico">🤝</span>
            <span class="icon-badge-label">Let's Work<br />Together</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CollaborateComponent {}
