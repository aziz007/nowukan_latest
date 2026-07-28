import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-for-families',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <div class="section-title">For Families</div>
        <p class="sub">A safe, encouraging space for children to grow their English.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Download the App</a>
          <a routerLink="/" class="btn">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class ForFamiliesComponent {}
