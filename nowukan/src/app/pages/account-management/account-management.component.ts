import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-management',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <div class="section-title">Learner Account Management</div>
        <p class="sub">How learner accounts are assigned, managed and tracked.</p>
        <p>Full content for this page is coming soon.</p>
        <div class="btn-row">
          <a routerLink="/contact" class="btn btn-primary">Contact Our Team</a>
          <a routerLink="/download" class="btn btn-dark">Free Trial</a>
        </div>
      </div>
    </section>
  `,
})
export class AccountManagementComponent {}
