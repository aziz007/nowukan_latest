import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
        <p class="eyebrow">Get Started</p>
        <h1 class="section-title">Pricing</h1>
        <p class="sub">Simple plans for learners, families and institutions.</p>

        <p>
          nowUKan offers an exceptionally one time low-cost for life, no hidden costs and none
          of those unwanted monthly subscriptions.
        </p>
        <p>
          Buying directly through our website is the most cost-effective way to purchase the
          app — <a href="https://nowukan.io" target="_blank" rel="noopener">nowukan.io</a>
        </p>
        <p>English language development and assessment for just a few pounds . . .</p>

        <p class="pricing-volume">For volume licence purchases, please contact us directly.</p>

        <p>
          A senior member of our team will talk with you to understand your objectives and
          requirements and then provide the best pricing options for your organisation.
        </p>
        <p>We also offer a free 7-day trial, so you can try nowUKan before you buy.</p>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/buy-now" class="btn btn-primary">Buy Now</a>
          <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
        </div>
        </div>

        <div class="journey-visual journey-visual-top">
          <figure class="people-cutout pricing-coin">
            <img src="assets/img/pricing-coin.webp" alt="Gold coin with a price tag" width="600" height="609" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class PricingComponent {}
