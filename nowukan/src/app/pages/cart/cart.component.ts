import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Cart</p>
        <h1 class="section-title">Your Order</h1>
        <p class="sub">One-time purchase. Lifetime access. No recurring fees.</p>

        <div class="cart-line">
          <div class="cart-line-item">
            <img class="cart-line-icon" src="assets/img/price-tag-coin.webp" alt="" aria-hidden="true" width="56" height="66" />
            <div>
              <strong>nowUKan — Lifetime Access</strong>
              <p class="note" style="margin:4px 0 0">One-time payment · full app access · all future updates</p>
            </div>
          </div>
          <div class="cart-line-price">£11.99</div>
        </div>
        <p class="note" style="margin-top:8px">Local tax (VAT/GST), if applicable, is calculated and added at checkout.</p>

        @if (error()) {
          <p class="note" style="color:#ff8a8a">{{ error() }}</p>
        }

        <div class="btn-row">
          <button
            type="button"
            class="btn btn-primary"
            [disabled]="loading()"
            (click)="checkout()"
          >
            {{ loading() ? 'Redirecting to secure checkout…' : 'Checkout with Stripe' }}
          </button>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class CartComponent {
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  async checkout(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planKey: 'lifetime' }),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        this.loading.set(false);
        this.error.set(data.error || 'Something went wrong starting checkout.');
      }
    } catch {
      this.loading.set(false);
      this.error.set('Unable to reach checkout right now. Please try again shortly.');
    }
  }
}
