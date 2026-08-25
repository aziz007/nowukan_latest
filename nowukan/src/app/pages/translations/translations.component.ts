import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-translations',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">How It Works</p>
        <h1 class="section-title">Translation Support</h1>

        <p class="sub">
          Key instructional content within the app is supported by our UI translation option,
          helping learners at lower fluency levels of English navigate the application.
        </p>

        <p>
          During the onboarding process, you simply select your native language to help you
          navigate the app and access translation support where we feel it may be needed.
        </p>
        <p>
          Translation services may be turned off at any time by selecting English in the
          language section, which can be found inside the account section of the app.
        </p>
        <p>
          Need help understanding something else, or have a question? Our support team is here
          to help:
          <a href="mailto:support@nowukan.io?subject=Support%20From%20Website">support&#64;nowukan.io</a>
        </p>

        <p class="note"><strong>Understand more. Learn faster. Build confidence.</strong></p>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/register" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class TranslationsComponent {}
