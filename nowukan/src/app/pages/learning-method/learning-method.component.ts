import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learning-method',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">How It Works</p>
          <h1 class="section-title">Learning Method</h1>

          <p class="sub">
            nowUKan uses a structured and practical approach to English language development,
            helping learners build their skills progressively through vocabulary, phrases,
            dialogue, pronunciation and language retention.
          </p>

          <p>
            Our learning journey is designed to encourage regular practice, reinforce learning
            and build confidence in real-world English communication.
          </p>
          <p>
            We focus on the English you are most likely to use in everyday life, rather than
            teaching unnecessary or rarely used language. Our approach helps you develop
            practical vocabulary, strengthen your overall language skills and build the
            confidence to use English in real-world situations.
          </p>
          <p>
            Take a Free 7 Day Trial and start your English language journey with nowUKan today.
          </p>

          <p class="note"><strong>Learn. Practise. Retain. Progress.</strong></p>

          <div class="btn-row">
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="step-phone">
            <img src="assets/img/img-7e421e52d5.jpeg" alt="nowUKan Phrases section screen" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class LearningMethodComponent {}
