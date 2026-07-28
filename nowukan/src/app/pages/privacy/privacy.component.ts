import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <div class="section-title">Privacy Policy</div>
        <p class="sub">This page will contain the full Privacy Policy for nowUKan Ltd.</p>
        <p>Paste the Privacy Policy document content here. (Placeholder until the final copy is supplied.)</p>
        <div class="btn-row">
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class PrivacyComponent {}
