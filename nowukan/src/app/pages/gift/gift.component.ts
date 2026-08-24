import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Get Started</p>
        <h1 class="section-title">Gift nowUKan</h1>

        <p class="sub">Give someone the opportunity to develop their English with nowUKan.</p>

        <p>
          Whether it's a friend, family member, colleague, student, employee, or simply
          somebody you feel deserves the opportunity, a nowUKan gift provides access to
          practical English language development and assessment, pronunciation practice and
          confidence-building activities.
        </p>
        <p>
          An affordable and meaningful gift that can support learning, career development and
          new opportunities, while helping someone build the English skills and confidence
          they need to achieve more.
        </p>

        <p class="note"><strong>Give the gift of English and help change someone's life forever!</strong></p>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/pricing" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class GiftComponent {}
