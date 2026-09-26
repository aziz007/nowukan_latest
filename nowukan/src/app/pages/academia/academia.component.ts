import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-academia',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Sectors</p>
          <h1 class="section-title">Academia</h1>

          <p class="sub">
            Support students and learners with additional English language development, <br />
            pronunciation practice and assessment.
          </p>

          <p>
            nowUKan can complement existing teaching and learning programmes, providing <br />
            students with an additional tool for independent practice without requiring <br />
            expensive infrastructure or ongoing subscriptions.
          </p>
          <p>
            Universities, colleges and other academic institutions can also use nowUKan <br />
            to support international students, improve language confidence and extend <br />
            learning beyond the classroom.
          </p>

          <p class="note"><strong>Explore how nowUKan can complement your <br />educational provision.</strong></p>

          <p>
            nowUKan is a valuable addition to your teaching and can help support your <br />
            students' continued language development and confidence.
          </p>
          <p>
            Through our affiliate programme, you can also generate an additional income <br />
            stream by recommending nowUKan to your students.
          </p>
          <p>
            For further information or to discuss our Enterprise Programme, contact us <br />
            to arrange a video call with a senior member of our team.
          </p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Book A Consultation</a>
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="people-cutout">
            <img src="assets/img/academia-cap.webp" alt="Gold graduation cap representing academic achievement with nowUKan" />
          </figure>
          <div class="icon-badge-label" style="text-align:center">Supporting <br />Academic Success</div>
        </div>
      </div>
    </section>
  `,
})
export class AcademiaComponent {}
