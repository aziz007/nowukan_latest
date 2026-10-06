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

        <h1 class="success-title">Congratulations and welcome to nowUKan!</h1>

        @if (mode === 'trial') {
          <!-- Free trial: shown after Register Now. -->
          <p class="success-message success-lead">
            Your nowUKan App's FREE TRIAL access to nowUKan App has now been <br />
            Successfully Activated.
          </p>
          <p class="success-message">
            We have sent your unique username and temporary password to your registered <br />
            Email Address.
          </p>
          <p class="success-message">Please check your inbox and spam folder for access instructions.</p>
        } @else if (isUpgrade) {
          <!-- Existing free-trial user who has just bought lifetime access:
               they keep their current login, so no new credentials are sent. -->
          <p class="success-message success-lead">
            Your nowUKan App's lifetime access has been successfully activated.
          </p>
          <p class="success-message">
            You can keep using your existing username and password. <br />
            There is no need to log in again or reinstall the app.
          </p>
        } @else {
          <!-- New buyer: account created at Buy Now, paid on Stripe. -->
          <p class="success-message success-lead">
            Your nowUKan App's lifetime access has been successfully activated.
          </p>
          <p class="success-message">
            We have sent your unique username and temporary password to your registered <br />
            Email Address.
          </p>
          <p class="success-message">Please check your inbox and spam folder for access instructions.</p>
        }

        <div class="btn-row" style="justify-content:center">
          <a routerLink="/" class="btn btn-primary">Back to Home</a>
          <a routerLink="/contact" class="btn btn-dark">Contact Support</a>
        </div>
      </div>
    </section>
  `,
})
export class CheckoutSuccessComponent {
  private readonly route = inject(ActivatedRoute);

  /**
   * Display only. Reaching this page is NOT proof of payment (anyone can
   * open the URL). Access is granted server-side by the Stripe webhook in
   * src/server.ts, which marks the user Paid in the CRM.
   *
   *  - /registration-complete          -> free trial (route data mode: 'trial')
   *  - /checkout/success?type=upgrade  -> trial user who bought lifetime access
   *  - /checkout/success?type=new      -> new buyer (account created at Buy Now)
   */
  readonly mode: 'trial' | 'purchase' = this.route.snapshot.data['mode'] === 'trial' ? 'trial' : 'purchase';
  readonly isUpgrade = this.route.snapshot.queryParamMap.get('type') === 'upgrade';
}
