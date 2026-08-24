import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Get Started</p>
        <h1 class="section-title">Personal Use Or Multiple User Licences?</h1>

        <div class="path-grid">
          <div class="card">
            <div class="ico">🧑</div>
            <h3>Personal Use</h3>
            <p>
              For personal use, register today and take advantage of our free 7-day trial.
            </p>
            <p>
              This gives you the opportunity to explore nowUKan, experience the platform for
              yourself and see how well it meets your English language development and
              assessment needs.
            </p>
            <div class="btn-row">
              <a routerLink="/register" class="btn btn-gold">Register Now</a>
              <a routerLink="/pricing" class="btn btn-primary">Buy Now</a>
            </div>
          </div>

          <div class="card">
            <div class="ico">🏢</div>
            <h3>Multiple User Licences</h3>
            <p>
              For multiple user licences, book a consultation with a senior member of our
              team. We can discuss your requirements and provide clear, transparent pricing
              tailored to your organisation, programme or learner group.
            </p>
            <div class="btn-row">
              <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
            </div>
          </div>
        </div>

        <p>
          If you are a language tutor, nowUKan can complement and reinforce the English
          language skills you teach, providing your students with additional opportunities to
          practise vocabulary, pronunciation and communication outside your lessons.
        </p>
        <p>
          Our approach is designed to keep costs exceptionally low, with one-off pricing and
          no recurring monthly subscriptions.
        </p>
        <p>
          For larger volumes, pricing can start from just a few pounds per learner, with
          lifetime use included.
        </p>
        <p>
          If you're looking to provide access for a small group or a large-scale programme, we
          can help you find the most appropriate and cost-effective option.
        </p>

        <div class="btn-row">
          <a routerLink="/collaborate" class="btn btn-dark">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class GetStartedComponent {}
