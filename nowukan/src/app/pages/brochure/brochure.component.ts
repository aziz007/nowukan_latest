import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brochure',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Brochure</p>
          <h1 class="section-title">Explore nowUKan</h1>

          <p class="sub">
            Discover more about nowUKan, our solutions, technology and approach to English
            language development and assessment.
          </p>

          <p>
            Browse our range of brochures and download the regional brochure most relevant to
            you, whether you are a learner, educator, organisation, government, NGO or potential
            partner.
          </p>

          <h3>Professional Educators</h3>
          <p>
            If you are a language tutor, nowUKan can complement and reinforce the English skills
            you teach, giving your students additional opportunities to practise vocabulary,
            pronunciation and communication outside your lessons.
          </p>
          <p>
            nowUKan is a valuable addition to your teaching, supporting continued language
            development, greater confidence and independent practice.
          </p>
          <p>
            Through our affiliate programme, you can also generate an additional income stream
            by recommending nowUKan to your students and their families.
          </p>

          <p class="note"><strong>View, download and share our brochures.</strong></p>

          <h3>Download A Regional Brochure</h3>
          <ul class="brochure-list">
            <li><a href="assets/brochures/european.pdf" target="_blank" rel="noopener">European</a></li>
            <li><a href="assets/brochures/south-asia.pdf" target="_blank" rel="noopener">South Asia</a></li>
            <li><a href="assets/brochures/south-east-asia.pdf" target="_blank" rel="noopener">South East Asia</a></li>
            <li><a href="assets/brochures/south-america.pdf" target="_blank" rel="noopener">South America</a></li>
            <li><a href="assets/brochures/middle-east.pdf" target="_blank" rel="noopener">Middle East</a></li>
            <li><a href="assets/brochures/african-continent.pdf" target="_blank" rel="noopener">African Continent</a></li>
            <li><a href="assets/brochures/central-eastern-europe.pdf" target="_blank" rel="noopener">Central / Eastern Europe</a></li>
            <li><a href="assets/brochures/chinese-speaking.pdf" target="_blank" rel="noopener">Chinese Speaking</a></li>
          </ul>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <div class="brochure-stack">
            <figure class="brochure-cover">
              <img src="assets/brochures/european-cover.jpg" alt="nowUKan European Edition brochure cover" />
              <figcaption>European Edition</figcaption>
            </figure>
            <figure class="brochure-cover">
              <img src="assets/journey/government-cover.jpg" alt="nowUKan Global Government Edition brochure cover" />
              <figcaption>Global Government Edition</figcaption>
            </figure>
            <figure class="brochure-cover">
              <img src="assets/journey/ngo-cover.jpg" alt="nowUKan NGO Edition brochure cover" />
              <figcaption>NGO Edition</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BrochureComponent {}
