import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pilot-programme',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Programmes</p>
          <h1 class="section-title">Pilot Programme</h1>

          <p class="sub">
            Want to see how nowUKan could work within your organisation or community before
            committing to a larger scale regional or national programme?
          </p>

          <p>
            Our pilot scheme provides an opportunity to introduce nowUKan to a selected group of
            learners, evaluate engagement and outcomes, and understand how it can support your
            specific objectives.
          </p>
          <p>
            To start a pilot programme and evaluate the suitability of nowUKan, please contact
            us to arrange a video call with a senior member of our team.
          </p>

          <p class="note">
            <strong>Note:</strong> Our pilot programme is only available to larger institutions
            and government bodies.
          </p>

          <p class="note"><strong>Contact us today to discuss and arrange your pilot programme.</strong></p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Book A Consultation</a>
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="step-phone">
            <img src="assets/img/img-a808eb8bdb.jpeg" alt="nowUKan Dialogue section screen" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class PilotProgrammeComponent {}
