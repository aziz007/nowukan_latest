import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partner-with-us',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Programmes</p>
        <h1 class="section-title">Partner With Us</h1>

        <p class="sub">
          We welcome partnerships with organisations that share our ambition to make English
          language development and assessment more accessible and affordable.
        </p>

        <p>
          Whether you are an educator, NGO, government organisation, employer, reseller, agent
          or technology and education provider, we are open to exploring new opportunities to
          collaborate.
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
          Through our affiliate programme, you can also generate an additional income stream by
          recommending nowUKan to your students.
        </p>

        <p class="note"><strong>Let's work together to create greater access and impact.</strong></p>

        <div class="btn-row">
          <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
        </div>
      </div>
    </section>
  `,
})
export class PartnerWithUsComponent {}
