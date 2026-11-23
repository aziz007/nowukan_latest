import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout-cancel',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Checkout</p>
        <h1 class="section-title">No Payment Was Taken</h1>
        <p class="sub">
          Your checkout was cancelled — nothing has been charged.
        </p>
        <p>
          You can pick up where you left off whenever you're ready, or get in touch if you had
          any trouble at checkout.
        </p>

        <div class="btn-row">
          <a routerLink="/cart" class="btn btn-primary">Return to Cart</a>
          <a routerLink="/contact" class="btn btn-dark">Contact Us</a>
        </div>
      </div>
    </section>
  `,
})
export class CheckoutCancelComponent {}
