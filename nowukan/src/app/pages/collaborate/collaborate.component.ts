import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collaborate',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <div class="section-title">Collaborate With Us</div>

        <p class="sub">We welcome collaboration with like-minded professionals worldwide.</p>

        <ul class="collab-list">
          <li><strong>EdTech Sales Leaders</strong></li>
          <li><strong>KOL &amp; Influencers</strong></li>
          <li><strong>Marketing Agencies</strong></li>
          <li><strong>Governments &amp; NGOs</strong></li>
          <li><strong>eLearning Providers</strong></li>
          <li><strong>Academic Institutions</strong></li>
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
          <a routerLink="/contact" class="btn btn-primary">Contact The Team</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class CollaborateComponent {}
