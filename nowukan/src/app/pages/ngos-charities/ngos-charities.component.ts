import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ngos-charities',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Sectors</p>
        <h1 class="section-title">NGOs &amp; Charities</h1>

        <p class="sub">
          Reach underserved communities and support learners who may face financial,
          geographical or connectivity barriers.
        </p>

        <p>
          nowUKan's low cost and offline capability make it particularly suitable for
          community, integration and development programmes, helping organisations reach more
          people within existing budgets.
        </p>
        <p>
          Whether supporting refugees, migrants, disadvantaged communities or wider development
          initiatives, nowUKan provides a practical way to extend access to English language
          learning.
        </p>

        <p class="note"><strong>Partner with us to help make English accessible to more people.</strong></p>

        <div class="btn-row">
          <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
          <a routerLink="/collaborate" class="btn btn-dark">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class NgosCharitiesComponent {}
