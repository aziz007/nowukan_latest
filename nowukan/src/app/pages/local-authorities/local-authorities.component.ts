import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-local-authorities',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <div class="section-title">Councils and Local Authorities</div>
        <p class="sub">Practical English programmes for councils and local communities.</p>
        <p>Full content for this page is coming soon.</p>
        <div class="btn-row">
          <a routerLink="/contact" class="btn btn-primary">Contact Our Team</a>
          <a routerLink="/download" class="btn btn-dark">Free Trial</a>
        </div>
      </div>
    </section>
  `,
})
export class LocalAuthoritiesComponent {}
