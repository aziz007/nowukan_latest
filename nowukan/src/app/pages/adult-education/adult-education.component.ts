import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adult-education',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Programmes</p>
        <h1 class="section-title">Adult Education</h1>

        <p class="sub">
          nowUKan is ideal to support adult learners with accessible English language
          development and assessment that can complement existing education and training
          programmes.
        </p>

        <p>
          We provide practical language practice, pronunciation feedback and structured
          learning that can be used in classrooms or independently at home, helping to develop
          your vocabulary and build your language confidence.
        </p>
        <p>
          Its low cost and offline capability can help education providers reach more learners
          while working within limited budgets.
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

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/pricing" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class AdultEducationComponent {}
