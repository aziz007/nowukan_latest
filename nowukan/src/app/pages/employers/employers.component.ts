import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employers',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Sectors</p>
        <h1 class="section-title">Employers</h1>

        <p class="sub">
          Help employees develop the English language and communication skills needed to
          perform confidently in the workplace.
        </p>

        <p>
          nowUKan can support workforce development, career progression, customer
          communication, employee integration and the development and growth of international
          business.
        </p>

        <p class="note"><strong>Investing In Your Staff Pays Dividends.</strong></p>

        <p>
          By helping employees improve vocabulary, pronunciation and practical communication,
          organisations can support stronger workplace interactions, greater confidence and
          improved opportunities for career development.
        </p>
        <p>
          For further information or to discuss our Enterprise Programme, contact us to arrange
          a video call with a senior member of our team.
        </p>

        <p class="note"><strong>Work with us to develop your workforce and strengthen communication.</strong></p>

        <div class="btn-row">
          <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
          <a routerLink="/collaborate" class="btn btn-dark">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class EmployersComponent {}
