import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CHECKOUT_FLOW } from '../../core/checkout-flow';

interface AppliedPromo {
  code: string;
  discountPercentage: number;
  price: number; // pence
}

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
            <img class="cart-line-icon" src="assets/img/cart-trolley.webp" alt="" aria-hidden="true" width="56" height="55" />
            <div>
              <strong>nowUKan — Lifetime Access (Buy Direct)</strong>
              <p class="note" style="margin:4px 0 0">One-time payment · Full app access · All future updates · <span class="promo-agents">Look out for Promo Codes from our Global Agents</span></p>
            </div>
          </div>
          <div class="cart-line-price">
            @if (promo(); as p) {
              <span class="cart-price-was">£11.99</span> {{ formatPence(p.price) }}
            } @else {
              £11.99
            }
          </div>
        </div>

        <div class="promo-box">
          @if (promo(); as p) {
            <p class="promo-applied">
              ✅ Promo code <strong>{{ p.code }}</strong> applied — {{ p.discountPercentage }}% off.
              <button type="button" class="promo-remove" (click)="removePromo()">Remove</button>
            </p>
          } @else {
            <label for="promo-code">Have a promo code?</label>
            <div class="promo-row">
              <input
                id="promo-code"
                type="text"
                autocomplete="off"
                placeholder="Enter promo code"
                [value]="promoInput()"
                (input)="promoInput.set($any($event.target).value)"
                (keydown.enter)="applyPromo()"
              />
              <button type="button" class="btn btn-dark" [disabled]="promoChecking()" (click)="applyPromo()">
                {{ promoChecking() ? 'Checking…' : 'Apply' }}
              </button>
            </div>
            @if (promoError()) {
              <p class="note promo-error">{{ promoError() }}</p>
            }
          }
        </div>

        <div class="cart-line cart-line-secondary">
          <div class="cart-line-item">
            <img class="cart-line-icon" src="assets/img/cart-trolley.webp" alt="" aria-hidden="true" width="56" height="55" />
            <div>
              <strong>nowUKan — Lifetime Access (App Store Price)</strong>
              <p class="note" style="margin:4px 0 0">One-time payment · Full app access · All future updates · No promotional codes</p>
            </div>
          </div>
          <div class="cart-line-price">£14.99</div>
        </div>
        <div class="cart-footer">
          <div class="cart-footer-info">
            <p class="cart-secure">Checkout Securely with Stripe</p>
            <p class="cart-specialist">
              <strong>Specialist rates for high-volume users – governments, NGOs, and academia. Please contact us for further details.</strong>
            </p>
            <p class="note">Local tax (VAT/GST), if applicable, is calculated and added at checkout.</p>
          </div>

          <div class="cart-footer-actions">
            @if (directFlow) {
              <div class="cart-email">
                <label for="cart-email">Email address *</label>
                <input
                  id="cart-email"
                  type="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  [value]="email()"
                  (input)="email.set($any($event.target).value)"
                />
                <p class="note" style="margin:6px 0 0">We'll use this for your receipt and to activate your lifetime access.</p>
              </div>
            }

            @if (error()) {
              <p class="note cart-error">{{ error() }}</p>
            }

            <div class="cart-actions">
              <a routerLink="/" class="btn btn-dark">Back to Home</a>
              <button
                type="button"
                class="btn btn-primary cart-checkout-btn"
                [disabled]="loading()"
                (click)="checkout()"
              >
                {{ loading() ? 'Redirecting to secure checkout…' : promo()?.price === 0 ? 'Get Free Access' : 'Checkout with Stripe' }}
              </button>
              <a routerLink="/book-a-consultation" class="btn btn-benefits cart-consult-btn">Book A Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CartComponent {
  private readonly router = inject(Router);
  /** true = earlier flow (email + Stripe here); false = hand over to the Buy Now form. */
  readonly directFlow = CHECKOUT_FLOW === 'direct';
  readonly error = signal<string | null>(null);
  readonly loading = signal(false);
  readonly email = signal('');

  readonly promoInput = signal('');
  readonly promoChecking = signal(false);
  readonly promoError = signal<string | null>(null);
  readonly promo = signal<AppliedPromo | null>(null);

  formatPence(pence: number): string {
    return pence === 0 ? 'FREE' : `£${(pence / 100).toFixed(2)}`;
  }

  async applyPromo(): Promise<void> {
    const code = this.promoInput().trim();
    this.promoError.set(null);
    if (!code) {
      this.promoError.set('Please enter a promo code.');
      return;
    }
    this.promoChecking.set(true);
    try {
      const response = await fetch('/api/voucher/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data.valid) {
        this.promo.set({ code: data.code, discountPercentage: data.discountPercentage, price: data.price });
      } else {
        this.promoError.set(data.message || 'This promo code is not valid.');
      }
    } catch {
      this.promoError.set('We could not check this code right now. Please try again shortly.');
    } finally {
      this.promoChecking.set(false);
    }
  }

  removePromo(): void {
    this.promo.set(null);
    this.promoInput.set('');
    this.promoError.set(null);
  }

  checkout(): void {
    if (this.directFlow) {
      this.directCheckout();
      return;
    }
    // Buy Now flow: continue on the Buy Now form, carrying any applied code.
    const code = this.promo()?.code;
    this.router.navigate(['/buy-now'], code ? { queryParams: { code } } : {});
  }

  /** Earlier flow: email (+ optional promo code) straight to Stripe. */
  private async directCheckout(): Promise<void> {
    const email = this.email().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.error.set('Please enter a valid email address.');
      document.getElementById('cart-email')?.focus();
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planKey: 'lifetime', email, promoCode: this.promo()?.code || undefined }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      this.loading.set(false);
      this.error.set(data.error || 'Something went wrong starting checkout.');
      if (response.status === 400 && /promo code/i.test(data.error || '')) this.promo.set(null);
    } catch {
      this.loading.set(false);
      this.error.set('Unable to reach checkout right now. Please try again shortly.');
    }
  }
}
