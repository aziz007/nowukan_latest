import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-government',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Sectors</p>
          <h1 class="section-title">Governments</h1>

          <p class="sub">
            nowUKan is ideal to support national and regional English language initiatives with
            an affordable, scalable solution designed to reach large numbers of learners.
          </p>

          <p>
            We help support education, employment, integration and workforce development
            programmes, helping governments extend access to English language development and
            assessment while maintaining predictable, cost-effective budgets.
          </p>
          <p>
            Our offline capability also makes nowUKan suitable for areas where internet access
            may be limited, helping extend provision to rural and underserved communities.
          </p>

          <p class="note"><strong>Work with us to expand English language opportunity at scale.</strong></p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Book A Consultation</a>
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="brochure-cover">
            <img src="assets/journey/government-cover.jpg" alt="nowUKan Global Government Edition — Affordable English, Scalable Public Impact" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class GovernmentComponent {}
