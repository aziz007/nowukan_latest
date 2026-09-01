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
            Support students and learners with additional English language development,
            pronunciation practice and assessment.
          </p>

          <p>
            nowUKan can complement existing teaching and learning programmes, providing students
            with an additional tool for independent practice without requiring expensive
            infrastructure or ongoing subscriptions.
          </p>
          <p>
            Universities, colleges and other academic institutions can also use nowUKan to
            support international students, improve language confidence and extend learning
            beyond the classroom.
          </p>

          <p class="note"><strong>Explore how nowUKan can complement your educational provision.</strong></p>

          <p>
            nowUKan is a valuable addition to your teaching and can help support your students'
            continued language development and confidence.
          </p>
          <p>
            Through our affiliate programme, you can also generate an additional income stream by
            recommending nowUKan to your students.
          </p>
          <p>
            For further information or to discuss our Enterprise Programme, contact us to arrange
            a video call with a senior member of our team.
          </p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Book A Consultation</a>
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="step-phone">
            <img src="assets/explain/word-able.png" alt="nowUKan phonetic detail and score screen" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class AcademiaComponent {}
