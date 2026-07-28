import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <div class="section-title">Our Terms</div>
        <p class="sub">This page will contain the full Our Terms for nowUKan Ltd.</p>
        <p>Paste the Our Terms document content here. (Placeholder until the final copy is supplied.)</p>
        <div class="btn-row">
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class TermsComponent {}
