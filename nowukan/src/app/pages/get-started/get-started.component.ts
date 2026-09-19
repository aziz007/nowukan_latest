import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Get Started</p>
        <h1 class="section-title">Personal Use Or Multiple User Licences?</h1>

        <div class="path-grid">
          <div class="card">
            <div class="ico">
              <svg viewBox="0 0 100 100" width="40" height="40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="personIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="32" r="16" fill="none" stroke="url(#personIconGrad)" stroke-width="6"/>
                <path d="M22 82c0-16 12-28 28-28s28 12 28 28" fill="none" stroke="url(#personIconGrad)" stroke-width="6" stroke-linecap="round"/>
              </svg>
            </div>
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
              <a routerLink="/register" class="btn btn-primary">Buy Now</a>
            </div>
          </div>

          <div class="card">
            <div class="ico">
              <svg viewBox="0 0 100 100" width="40" height="40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="orgIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <path d="M14 38 50 18l36 20" fill="none" stroke="url(#orgIconGrad)" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>
                <path d="M18 38h64" stroke="url(#orgIconGrad)" stroke-width="6" stroke-linecap="round"/>
                <path d="M24 38v34M40 38v34M60 38v34M76 38v34" stroke="url(#orgIconGrad)" stroke-width="6" stroke-linecap="round"/>
                <path d="M14 80h72" stroke="url(#orgIconGrad)" stroke-width="6" stroke-linecap="round"/>
              </svg>
            </div>
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
          <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class GetStartedComponent {}
