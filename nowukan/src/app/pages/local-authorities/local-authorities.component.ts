import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-local-authorities',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Sectors</p>
        <h1 class="section-title">Local Authorities</h1>

        <p class="sub">
          Support local communities with accessible English language development and
          assessment for residents, workers and newcomers where English may not be the first
          language, helping to improve integration.
        </p>

        <p>
          nowUKan can help local authorities extend language provision while working within
          limited budgets and reaching communities where access to traditional learning may be
          difficult.
        </p>
        <p>
          Its offline capability also provides an opportunity to support learners in community
          settings and areas with limited or unreliable internet access.
        </p>
        <p>
          For further information or to discuss our Enterprise Programme, contact us to arrange
          a video call with a senior member of our team.
        </p>

        <p class="note"><strong>Talk to us about supporting your local community.</strong></p>

        <div class="btn-row">
          <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
          <a routerLink="/collaborate" class="btn btn-dark">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class LocalAuthoritiesComponent {}
