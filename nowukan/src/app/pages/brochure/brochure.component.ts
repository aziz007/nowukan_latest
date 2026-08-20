import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brochure',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Brochure</p>
        <h1 class="section-title">Explore nowUKan</h1>

        <p class="sub">
          Discover more about nowUKan, our solutions, technology and approach to English
          language development and assessment.
        </p>

        <p>
          Browse our range of brochures to find the information most relevant to you, whether
          you are a learner, educator, organisation, government, NGO or potential partner.
        </p>
        <p>
          If you are a language tutor, nowUKan can complement and reinforce the English
          language skills you teach, providing your students with additional opportunities to
          practise vocabulary, pronunciation and communication outside your lessons.
        </p>
        <p>
          nowUKan is a valuable addition to your teaching and can help support your students'
          continued language development and confidence.
        </p>
        <p>
          Through our affiliate programme, you can also generate an additional income stream
          by recommending nowUKan to your students.
        </p>

        <p class="note"><strong>View, download and share our brochures.</strong></p>

        <div class="btn-row">
          <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
          <a routerLink="/collaborate" class="btn btn-dark">Collaborate With Us</a>
        </div>

        <div class="btn-row">
          <a routerLink="/pricing" class="btn btn-gold">Register Now</a>
          <a routerLink="/pricing" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class BrochureComponent {}
