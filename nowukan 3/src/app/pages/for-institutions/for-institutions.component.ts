import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-for-institutions',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <h1 class="section-title">For Institutions</h1>
        <p class="sub">Deploy nowUKan across classrooms and programmes with confidence.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Download the App</a>
          <a routerLink="/" class="btn">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class ForInstitutionsComponent {}
