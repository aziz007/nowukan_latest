import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-security',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">How It Works</p>
        <h1 class="section-title">Data Security</h1>

        <p class="sub">Your data belongs to you. Your privacy matters to us.</p>

        <p>
          Your privacy is paramount to us. nowUKan is designed with privacy and data security
          in mind, with the application operating offline after installation.
        </p>
        <p>
          We do not data mine, sell or share personal user information for commercial
          purposes.
        </p>
        <p>
          The limited information collected during registration is used only to manage your
          account and, where necessary, identify you when you contact us for support.
        </p>

        <p class="note"><strong>Your data belongs to you. Your privacy matters to us.</strong></p>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/register" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class DataSecurityComponent {}
