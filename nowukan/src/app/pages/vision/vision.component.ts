import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Vision</p>
          <h1 class="section-title">A World Where English Opportunity Has No Barriers</h1>

          <p class="sub">
            We envision a world where everyone, regardless of where they live or their financial
            circumstances, has access to affordable, high-quality English language development
            and assessment.
          </p>

          <p>
            We aim to remove barriers of cost, connectivity and access, giving
            individuals and communities the opportunity to learn, communicate and reach their
            full potential.
          </p>
          <p>
            Through innovation, collaboration and responsible technology, we are making English
            language development more accessible, inclusive and impactful worldwide.
          </p>
          <p>
            Our vision and commitment are also reflected in our ongoing development, including
            nowUKan Junior, which is already in the pipeline.
          </p>

          <p class="note"><strong>Breaking barriers. Opening opportunities. Empowering people.</strong></p>

          <div class="btn-row">
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="step-phone">
            <img src="assets/journey/A1.png" alt="nowUKan app home dashboard screen" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class VisionComponent {}
