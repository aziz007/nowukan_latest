import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-security',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <div class="section-title">Data Security</div>
        <p class="sub">
          We are committed to ensuring the security and protection of our customers and
          website visitors.
        </p>
        <p>
          This page will set out how nowUKan protects your data, the safeguards we apply, and
          your rights. Full content coming soon.
        </p>
        <div class="btn-row">
          <a routerLink="/contact" class="btn btn-primary">Contact The Team</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class DataSecurityComponent {}
