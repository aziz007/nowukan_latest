import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <h1 class="section-title">Journey</h1>
          <p class="sub">Simple. Intuitive. Designed Around You.</p>

          <p>Learning English should feel like a journey, not a test.</p>
          <p>
            nowUKan has been designed with a clear, intuitive user experience that makes every
            step easy to understand and navigate.
          </p>

          <h3>Hear, Engage and Practise Real World English</h3>
          <p>
            Learn at your own pace, practise regularly, revisit saved areas when needed, and
            track your progress as your confidence grows.
          </p>

          <h3>From Words to Conversation</h3>
          <p>Your journey follows a simple, structured pathway:</p>
          <p class="journey-path"><strong>Words → Phrases → Dialogue → QuickFire</strong></p>
          <p>
            Build your vocabulary, strengthen your understanding, practise real-world
            conversations, and challenge yourself with our QuickFire activities, designed to
            test and reinforce your language retention.
          </p>
          <p>
            Each stage builds on the last, helping you develop knowledge, pronunciation,
            understanding and confidence.
          </p>

          <h3>Learn. Practise. Progress.</h3>
          <p>
            With simple navigation, clear visual feedback on every pronunciation attempt, and an
            engaging user experience, nowUKan keeps you focused on what matters — developing your
            English language skills and building confidence.
          </p>
          <p>
            To support your overall development, we have included dedicated sections covering
            the English alphabet, English phonetic sounds, and over 30,000 of the most commonly
            used English words and phrases.
          </p>

          <p class="note"><strong>Your journey. Your pace. Your progress.</strong></p>

          <div class="btn-row">
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <figure class="step-phone">
            <img src="assets/img/img-9418e1f160.jpeg" alt="nowUKan Words section screen" />
          </figure>
          <figure class="step-phone">
            <img src="assets/explain/word-speedometer.png" alt="nowUKan on-device pronunciation scoring screen" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class JourneyComponent {}
