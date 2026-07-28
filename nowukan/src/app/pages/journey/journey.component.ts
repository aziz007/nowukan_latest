import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <div class="section-title">Journey</div>
        <p class="sub">See how NowUkan turns everyday moments into English practice — step by step.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Free Trial</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class JourneyComponent {}
