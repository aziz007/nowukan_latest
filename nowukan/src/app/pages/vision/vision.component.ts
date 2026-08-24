import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Vision</p>
        <h1 class="section-title">A World Where English Opportunity Has No Barriers</h1>

        <p class="sub">
          We envision a world where everyone, regardless of where they live or their financial
          circumstances, has access to affordable, high-quality English language development
          and assessment.
        </p>

        <p>
          We aim to help remove the barriers of cost, connectivity and access, giving
          individuals and communities the opportunity to learn, communicate and reach their
          full potential.
        </p>
        <p>
          Through innovation, collaboration and responsible technology, we want to make English
          language opportunity more accessible, inclusive and impactful worldwide.
        </p>

        <p class="note"><strong>Breaking barriers. Opening opportunities. Empowering people.</strong></p>

        <div class="btn-row">
          <a routerLink="/collaborate" class="btn btn-dark">Collaborate With Us</a>
        </div>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/pricing" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class VisionComponent {}
