import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pilot-programme',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
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
          To start a pilot programme, please contact us to arrange a video call with a senior
          member of our team.
        </p>
        <p>
          We will discuss your requirements and can offer tailored, cost-effective pricing and
          terms for your pilot programme.
        </p>

        <p class="note">
          <strong>Note:</strong> Our pilot programme is available to institutions and
          government bodies only and is subject to a minimum order quantity (MOQ) following the
          initial trial period.
        </p>

        <p>
          We can provide free user accounts, allowing you to evaluate the suitability of
          nowUKan.
        </p>

        <p class="note"><strong>Contact us to discuss your pilot programme.</strong></p>

        <div class="btn-row">
          <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
          <a routerLink="/collaborate" class="btn btn-dark">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class PilotProgrammeComponent {}
