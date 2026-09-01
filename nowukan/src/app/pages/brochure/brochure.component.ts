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
          <figure class="brochure-cover">
            <img src="assets/brochures/european-cover.jpg" alt="nowUKan European Edition brochure cover" />
            <figcaption>European Edition</figcaption>
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class BrochureComponent {}
