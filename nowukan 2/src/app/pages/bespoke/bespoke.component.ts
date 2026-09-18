import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bespoke',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Programmes</p>
          <h1 class="section-title">Bespoke</h1>

          <p class="sub">
            Every organisation and programme has different requirements. Our bespoke approach
            allows us to work with you to understand your objectives, learner numbers, delivery
            environment, budget and specific programme needs.
          </p>

          <p>
            From large-scale education initiatives and workforce development to community and
            integration programmes, we can explore the most appropriate and cost-effective way to
            deploy nowUKan.
          </p>
          <p>
            We can also work with organisations to develop and integrate bespoke content,
            activities and learning pathways that support a specific programme, curriculum or
            initiative they are looking to achieve.
          </p>
          <p>
            These can be integrated into the nowUKan experience and made available exclusively to
            your users, creating a dedicated learning environment tailored to your objectives.
          </p>
          <p>
            Whether you need additional learning materials, a dedicated programme, sector-specific
            content or a customised learning pathway, our team can work with you to develop a
            solution that fits your requirements.
          </p>

          <p class="note"><strong>Talk to us about your requirements and let's develop a solution together.</strong></p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Book A Consultation</a>
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="step-phone">
            <img src="assets/img/img-c8fe49600d.jpeg" alt="nowUKan QuickFire section screen" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class BespokeComponent {}
