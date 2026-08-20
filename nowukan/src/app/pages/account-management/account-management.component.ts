import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-management',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">How It Works</p>
        <h1 class="section-title">Account Management</h1>

        <p class="sub">
          Your nowUKan account gives you access to your learning journey and allows you to
          manage your personal details and account information.
        </p>

        <p>
          Whether you are using a free trial, a paid account or an Enterprise licence, our aim
          is to make account management simple and straightforward.
        </p>
        <p>
          If you lose your device, it is stolen, or you replace or upgrade your hardware,
          please contact our support team:
          <a href="mailto:support@nowukan.io?subject=Support%20From%20Website">support&#64;nowukan.io</a>
        </p>
        <p>
          We can deactivate your existing account and provide you with a new user account.
        </p>

        <p class="note">
          <strong>Note:</strong> For security purposes, user accounts cannot be transferred
          between devices. Access to your existing account will be removed before a new
          account is issued.
        </p>

        <p class="note"><strong>Simple access. Effective management.</strong></p>

        <div class="btn-row">
          <a routerLink="/pricing" class="btn btn-gold">Register Now</a>
          <a routerLink="/pricing" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class AccountManagementComponent {}
