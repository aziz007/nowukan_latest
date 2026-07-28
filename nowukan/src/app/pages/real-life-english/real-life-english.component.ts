import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-real-life-english',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <div class="section-title">Real-Life English</div>
        <p class="sub">Learn the English people actually use — at work, at home, on the move.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Download the App</a>
          <a routerLink="/" class="btn">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class RealLifeEnglishComponent {}
