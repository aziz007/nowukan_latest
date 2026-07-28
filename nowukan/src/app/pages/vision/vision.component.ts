import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <div class="section-title">Our Vision</div>
        <p class="sub">A world where language is never the barrier between a person and their potential.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Free Trial</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class VisionComponent {}
