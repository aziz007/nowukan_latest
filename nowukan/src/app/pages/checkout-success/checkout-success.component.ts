import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell success-shell">
      <div class="container success-card">
        <div class="success-check">
          <svg viewBox="0 0 200 200" width="120" height="120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <radialGradient id="successGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#2CB24A" stop-opacity="0.55" />
                <stop offset="70%" stop-color="#2CB24A" stop-opacity="0.15" />
                <stop offset="100%" stop-color="#2CB24A" stop-opacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="url(#successGlow)" />
            <circle cx="100" cy="100" r="62" fill="rgba(44,178,74,0.18)" stroke="#2CB24A" stroke-width="4" />
            <path d="M72 100l20 20 36-40" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        @if (isUpgrade) {
          <!-- Scenario 12: existing trial user has just purchased Lifetime Access.
               They already have a working login — no new credentials to show. -->
          <h1 class="success-title">Your Lifetime Access Is Active!</h1>
          <p class="success-message">
            Congratulations! Your nowUKan Lifetime Access is now active. You can continue
            learning and practising English, without worrying about your trial ending.
          </p>
          <p class="success-message">Pay once. Learn for life. No subscription.</p>

          <div class="btn-row" style="justify-content:center">
            <a routerLink="/download" class="btn btn-primary">Continue Learning</a>
            <a routerLink="/contact" class="btn btn-dark">Contact Support</a>
          </div>
        } @else {
          <!-- Scenario 13: brand-new purchase with no prior trial account.
               TODO: email/tempPassword below are placeholders until the
               backend confirms whether these can be shown here directly
               (vs. email-only) and how the webhook passes them through. -->
          <h1 class="success-title">Purchase Successful!</h1>
          <p class="success-message">
            Congratulations and welcome to nowUKan! Your Lifetime Access has now been
            successfully activated.
          </p>

          @if (email) {
            <div class="success-credentials">
              <div><strong>Email:</strong> {{ email }}</div>
              @if (tempPassword) {
                <div><strong>Temporary Password:</strong> {{ tempPassword }}</div>
              }
            </div>
          }

          <p class="success-message">
            We have also sent your unique username and temporary password to your registered
            email address. Please check your inbox (and spam folder) for access instructions.
          </p>

          <div class="btn-row" style="justify-content:center">
            <a routerLink="/download" class="btn btn-primary">Download the App</a>
            <a routerLink="/contact" class="btn btn-dark">Contact Support</a>
          </div>
        }
      </div>
    </section>
  `,
})
export class CheckoutSuccessComponent {
  private readonly route = inject(ActivatedRoute);

  /**
   * Note: this whole page is display-only. The presence of a session_id in
   * the URL is NOT proof of payment — anyone could visit this URL directly.
   * Real fulfilment happens server-side from the Stripe webhook
   * (checkout.session.completed) in src/server.ts, not from this page.
   */
  readonly sessionId = this.route.snapshot.queryParamMap.get('session_id');

  /**
   * TODO: 'type' isn't wired up yet. The plan is to set this at checkout
   * time — before creating the Stripe Checkout session, look up the
   * customer's billing status via GET /users/billing-status; if they're
   * already a Trial user, build the success_url as
   * /checkout/success?type=upgrade, otherwise ?type=new (or omit it).
   * That decision depends on the backend flow question still open with
   * Muaz/the client.
   */
  readonly isUpgrade = this.route.snapshot.queryParamMap.get('type') === 'upgrade';

  /**
   * TODO: not wired up yet either — depends on whether the backend can
   * return these synchronously for display here, or only send them by
   * email (the open "display temp password instantly" question).
   */
  readonly email = this.route.snapshot.queryParamMap.get('email');
  readonly tempPassword = this.route.snapshot.queryParamMap.get('temp_password');
}
