import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-refugee-integration',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Programmes</p>
          <h1 class="section-title">Refugee Integration</h1>

          <p class="sub">
            English language skills can play an important role in helping refugees and newcomers
            build confidence, communicate independently and participate more fully in their new
            communities.
          </p>

          <p>
            nowUKan provides an affordable and accessible way to support language development,
            helping learners build practical vocabulary, improve pronunciation and develop the
            confidence needed for everyday communication, education and employment.
          </p>
          <p>
            Our low-cost approach and offline capability make nowUKan particularly suitable for
            organisations supporting integration, especially in communities where funding or
            reliable internet access may be limited.
          </p>
          <p>
            Whether supporting initial settlement, community integration or longer-term
            employment and education pathways, nowUKan can complement existing programmes and
            help extend language support to more people.
          </p>

          <p class="note">
            <strong>Partner with us to help remove language barriers, support integration and
            create greater opportunities for refugees and newcomers.</strong>
          </p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Book A Consultation</a>
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="step-phone">
            <img src="assets/journey/K2.png" alt="nowUKan app home dashboard screen" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class RefugeeIntegrationComponent {}
