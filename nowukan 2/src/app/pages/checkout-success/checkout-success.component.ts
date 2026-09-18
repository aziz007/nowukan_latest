import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Order Confirmed</p>
        <h1 class="section-title">Thank You — You're All Set!</h1>
        <p class="sub">
          Your payment was successful. A confirmation will be sent to your email shortly.
        </p>
        <p>
          You can now download the app and log in with the account details you registered
          with. If anything doesn't look right, contact us and we'll sort it straight away.
        </p>

        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Download the App</a>
          <a routerLink="/contact" class="btn btn-dark">Contact Support</a>
        </div>
      </div>
    </section>
  `,
})
export class CheckoutSuccessComponent {
  private readonly route = inject(ActivatedRoute);

  /**
   * Note: this is display-only. The presence of a session_id in the URL is
   * NOT proof of payment — anyone could visit this URL directly. Real
   * fulfilment happens server-side from the Stripe webhook
   * (checkout.session.completed) in src/server.ts, not from this page.
   */
  readonly sessionId = this.route.snapshot.queryParamMap.get('session_id');
}
