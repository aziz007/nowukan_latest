import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <div class="section-title">Enterprise</div>
        <p class="sub">Roll out NowUkan across your institution or organisation with dedicated support.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Free Trial</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class EnterpriseComponent {}
