import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-colleges',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <div class="section-title">Colleges and Training Providers</div>
        <p class="sub">Flexible English development for colleges and training providers.</p>
        <p>Full content for this page is coming soon.</p>
        <div class="btn-row">
          <a routerLink="/contact" class="btn btn-primary">Contact Our Team</a>
          <a routerLink="/download" class="btn btn-dark">Free Trial</a>
        </div>
      </div>
    </section>
  `,
})
export class CollegesComponent {}
