import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Legal</p>
        <h1 class="section-title">Legal</h1>
        <p class="sub">Our Terms &amp; Conditions and Privacy Policy.</p>

        <ul class="collab-list">
          <li><a routerLink="/legal/terms">Terms &amp; Conditions</a></li>
          <li><a routerLink="/legal/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </section>
  `,
})
export class LegalComponent {}
