import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adult-education',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout journey-layout-wide">
        <div class="journey-copy prose">
          <p class="eyebrow">Programmes</p>
          <h1 class="section-title">Adult Education</h1>

          <p class="sub">
            nowUKan is ideal for supporting adult learners with accessible English language
            development and assessment that can complement existing education and training
            programmes.
          </p>

          <p>
            We provide practical language practice, pronunciation feedback and structured
            learning that can be used in the classroom or independently at home, helping
            learners develop their vocabulary and build confidence in using English.
          </p>
          <p>
            If you are a language tutor, nowUKan can complement and reinforce the English
            language skills you teach, providing your students with additional opportunities to
            practise vocabulary, pronunciation and communication outside your lessons.
          </p>
          <p>
            nowUKan is a valuable addition to your teaching and can help your students continue
            developing their English language skills and confidence.
          </p>
          <p>
            Through our affiliate programme, you can also generate an additional income stream by
            recommending nowUKan to your students.
          </p>

          <div class="btn-row">
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="people-cutout">
            <img
              src="assets/img/adult-education.webp"
              alt="Adult learners studying English together in class and at home, around a glowing open book and connected globe"
              width="1536"
              height="961"
            />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class AdultEducationComponent {}
