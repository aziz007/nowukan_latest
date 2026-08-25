import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <h1 class="section-title">Your Cart</h1>
        <p class="sub">
          Your cart is empty for now. Checkout will be available here shortly.
        </p>
        <div class="btn-row">
          <a routerLink="/pricing" class="btn btn-primary">View Plans</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class CartComponent {}
