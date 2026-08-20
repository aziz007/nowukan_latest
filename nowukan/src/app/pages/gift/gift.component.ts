import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <div class="section-title">Gift nowUKan</div>
        <p class="sub">Give the gift of English. Sponsor a learner or donate licences.</p>
        <p>Full content for this page is coming soon.</p>
        <div class="btn-row">
          <a routerLink="/contact" class="btn btn-primary">Contact Our Team</a>
          <a routerLink="/download" class="btn btn-dark">Free Trial</a>
        </div>
      </div>
    </section>
  `,
})
export class GiftComponent {}
