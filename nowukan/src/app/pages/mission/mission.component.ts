import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Mission</p>
          <h1 class="section-title">Making English Language Learning Accessible and Affordable to Everyone!</h1>

          <p class="sub">
            Our mission was to make English language development and assessment affordable and
            accessible to a global audience, so that's exactly what we've done!
          </p>

          <p>
            We believe that English can unlock opportunities, improve lives and help people
            participate more fully in education, employment and society.
          </p>
          <p>
            By combining innovative technology, proven learning methods and an affordable,
            scalable approach, nowUKan aims to remove the traditional barriers of cost,
            connectivity and access.
          </p>
          <p>
            From individual learners to schools, governments, NGOs and organisations worldwide,
            we want to help more people learn, communicate, progress and succeed.
          </p>

          <h3>Why English Matters</h3>
          <p>
            English is a global language of education, employment, business, technology, science,
            travel and communication.
          </p>
          <p>
            For millions of people, English proficiency can open doors to education, career
            development, business growth and global opportunities.
          </p>
          <p>
            We believe access to English should not be limited by location, income or access to
            technology.
          </p>

          <p class="note"><strong>More access. More opportunity. Greater impact.</strong></p>

          <div class="btn-row">
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="brochure-cover">
            <img src="assets/journey/mission-global.jpg" alt="nowUKan Global Edition — Empowering millions across the globe" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class MissionComponent {}
