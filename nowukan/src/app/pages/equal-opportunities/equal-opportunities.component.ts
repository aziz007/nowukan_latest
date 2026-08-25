import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-equal-opportunities',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">About</p>
        <h1 class="section-title">Equal Opportunities</h1>

        <p class="sub">
          We believe that the English language unlocks opportunities, drives economic
          growth, and creates lasting change.
        </p>

        <p>
          Everyone, regardless of their background, ethnicity, location, or financial
          circumstances, should receive the support they need to access, succeed in, and
          progress through education, enabling them to reach their full potential.
        </p>
        <p>
          Education is a fundamental right with the power to transform lives, providing
          individuals with the tools they need to shape their futures.
        </p>
        <p>
          English is the global language of business, media, and opportunity, and we are
          committed to supporting those who seek to access it.
        </p>
        <p>
          That is why we have developed a solution designed to support learners and remove
          the traditional barriers that many people face worldwide.
        </p>

        <h3>nowUKan — Affordable, Sustainable, and Inclusive ESL Development &amp; Assessment</h3>
        <p>
          Our affordable, low-cost approach aims to create a level playing field where
          everyone can benefit from the opportunities that proficiency in English can offer.
        </p>
        <p>
          We provide unmatched cost savings, making our solution ideal for large-scale
          education initiatives, including those in remote communities with limited internet
          access.
        </p>
        <p>
          Through partnerships with governments, NGOs, and educational institutions
          worldwide, we can and will make English development and assessment accessible to
          all.
        </p>

        <div class="btn-row">
          <a routerLink="/collaborate" class="btn btn-primary">Collaborate With Us</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class EqualOpportunitiesComponent {}
