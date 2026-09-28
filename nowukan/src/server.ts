import 'dotenv/config';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import Stripe from 'stripe';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { STRIPE_PLANS } from './stripe-plans';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

const stripeSecretKey = process.env['STRIPE_SECRET_KEY'];
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

/**
 * Stripe webhook — MUST receive the raw request body (not JSON-parsed) so
 * the signature can be verified. This is why it's registered before
 * `express.json()` below, with its own raw-body middleware.
 *
 * Configure STRIPE_WEBHOOK_SECRET from the Stripe Dashboard → Developers →
 * Webhooks → your endpoint → "Signing secret". Point the webhook at
 * https://yourdomain.com/api/stripe-webhook and subscribe it to at least
 * `checkout.session.completed`.
 *
 * This is the SOURCE OF TRUTH that payment succeeded — not the browser
 * being redirected to the success page, which anyone could visit directly
 * without paying. Fulfilment (unlocking access, sending confirmation
 * emails, etc.) should happen from this handler.
 */
app.post(
  '/api/stripe-webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const webhookSecret = process.env['STRIPE_WEBHOOK_SECRET'];

    if (!stripe || !webhookSecret) {
      console.error('Stripe webhook received but STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET is not set.');
      res.status(500).send('Webhook not configured.');
      return;
    }

    const signature = req.headers['stripe-signature'];
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, signature as string, webhookSecret);
    } catch (err) {
      console.error('Stripe webhook signature verification failed:', err);
      res.status(400).send(`Webhook Error: ${(err as Error).message}`);
      return;
    }

    if (event.type !== 'checkout.session.completed') {
      res.json({ received: true });
      return;
    }

    const session = event.data.object as Stripe.Checkout.Session;
    if (session.payment_status !== 'paid') {
      console.log('Checkout completed but not paid yet:', session.id, session.payment_status);
      res.json({ received: true });
      return;
    }

    // The buyer types their email on Stripe's page, so read it from there.
    const email = session.customer_details?.email || session.customer_email;
    if (!email) {
      console.error('Paid checkout has no email — cannot update CRM:', session.id);
      res.json({ received: true });
      return;
    }

    try {
      await sendPaymentStatusToCrm(email);
      console.log('✅ Payment status sent to CRM:', email, session.id);
      res.json({ received: true });
    } catch (err) {
      // 500 makes Stripe retry this webhook automatically (for up to 3 days).
      console.error('❌ Failed to send payment status to CRM:', email, session.id, err);
      res.status(500).send('CRM update failed.');
    }
  },
);

/**
 * Tells the CRM that this user has paid.
 *
 * ASSUMED ENDPOINT — the API docs provided so far only cover the GET
 * (read-only) version of /users/billing-status. Confirm the write endpoint
 * with the backend developer; the path, method and status value can be
 * changed via .env without touching this code:
 *   CRM_BILLING_STATUS_PATH   (default /users/billing-status)
 *   CRM_BILLING_STATUS_METHOD (default POST)
 *   CRM_PAID_STATUS           (default Paid)
 */
async function sendPaymentStatusToCrm(email: string): Promise<void> {
  const apiKey = process.env['EXTERNAL_API_KEY'];
  const baseUrl =
    process.env['EXTERNAL_API_BASE_URL'] || 'https://staging.nowukan.app/api/external';
  const path = process.env['CRM_BILLING_STATUS_PATH'] || '/users/billing-status';
  const method = process.env['CRM_BILLING_STATUS_METHOD'] || 'POST';
  const status = process.env['CRM_PAID_STATUS'] || 'Paid';

  if (!apiKey) throw new Error('EXTERNAL_API_KEY is not set.');

  const response = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, billing_status: status }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`CRM responded ${response.status}: ${body.slice(0, 500)}`);
  }
}

app.use(express.json());

/**
 * Create a Stripe Checkout session.
 *
 * The frontend sends only a `planKey` (e.g. "lifetime") — never an amount.
 * The real price is looked up server-side from STRIPE_PLANS so the price
 * can never be tampered with from the browser or devtools.
 *
 * Configure STRIPE_SECRET_KEY and SITE_URL via environment variables.
 */
app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) {
    console.error('STRIPE_SECRET_KEY is not set — checkout cannot run.');
    res.status(500).json({ error: 'Checkout is temporarily unavailable.' });
    return;
  }

  const { planKey, email } = req.body ?? {};
  const plan = STRIPE_PLANS[planKey];

  if (!plan) {
    res.status(400).json({ error: 'Unknown plan.' });
    return;
  }

  const siteUrl = process.env['SITE_URL'] || 'https://nowukan.io';

  // Optional: the product tax category. If not set, Stripe uses the preset
  // tax code from Dashboard -> Settings -> Tax. Set it in .env once your
  // accountant confirms the right category for the app.
  const taxCode = process.env['STRIPE_TAX_CODE'] || undefined;

  const baseParams: Stripe.Checkout.SessionCreateParams = {
    mode: plan.mode,
    customer_email: email || undefined,
    line_items: [
      {
        price_data: {
          currency: plan.currency,
          product_data: { name: plan.name, ...(taxCode ? { tax_code: taxCode } : {}) },
          unit_amount: plan.amount,
          // Explicit, rather than relying on the account's default: tax is
          // always calculated and added ON TOP of unit_amount, never
          // absorbed into it. £11.99 is always what the buyer sees as the
          // pre-tax price.
          tax_behavior: 'exclusive',
          ...(plan.mode === 'subscription'
            ? { recurring: { interval: plan.interval || 'month' } }
            : {}),
        },
        quantity: 1,
      },
    ],
    // Stripe Tax adds the correct local GST/VAT based on the billing address.
    // NOTE: Stripe only charges tax in countries where a tax REGISTRATION has
    // been added in Dashboard -> Tax -> Registrations. Everywhere else it
    // correctly returns zero tax.
    automatic_tax: { enabled: true },
    billing_address_collection: 'required',
    // Adaptive Pricing: overseas buyers see and pay the price in their local
    // currency; Stripe settles to us in GBP. The 2-4% conversion fee is paid
    // by the buyer (they can still choose to pay in GBP instead).
    adaptive_pricing: { enabled: true },
    success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/checkout/cancel`,
  };

  // nowUKan branding on the Stripe checkout page, set per session so it can't
  // "go missing" if Dashboard branding differs between live and sandbox
  // accounts. Needs Stripe API version 2025-09-30.clover or later, so it is
  // sent with that version on this request only.
  const logoUrl =
    process.env['STRIPE_BRANDING_LOGO_URL'] || `${siteUrl}/brand/nowukan-logo.png`;
  const brandedParams = {
    ...baseParams,
    branding_settings: {
      display_name: 'nowUKan',
      logo: { type: 'url', url: logoUrl },
    },
  } as unknown as Stripe.Checkout.SessionCreateParams;

  try {
    let session: Stripe.Checkout.Session;
    try {
      session = await stripe.checkout.sessions.create(brandedParams, {
        apiVersion: '2025-09-30.clover',
      });
    } catch (brandingErr) {
      // Never let branding block a payment: retry without it and log why.
      console.warn(
        'Stripe rejected branding settings — continuing without them:',
        (brandingErr as Error).message,
      );
      session = await stripe.checkout.sessions.create(baseParams);
    }

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout session error:', err);
    res.status(502).json({ error: 'Unable to start checkout. Please try again.' });
  }
});

/**
 * Newsletter signup — footer "Receive news and updates" form.
 *
 * Sends a simple notification email to your team inbox for each signup via
 * Resend (https://resend.com). Configure RESEND_API_KEY,
 * NEWSLETTER_NOTIFY_EMAIL (where the notification goes) and
 * NEWSLETTER_FROM_EMAIL (must be a domain you've verified in Resend) via
 * environment variables — see .env.example.
 *
 * Note: this only notifies your team per signup. It does not add the
 * address to a mailing list — if you want to actually send newsletters to
 * these people later, you'll want a proper list/marketing tool as well.
 */
app.post('/api/newsletter-signup', async (req, res) => {
  const resendApiKey = process.env['RESEND_API_KEY'];
  const notifyEmail = process.env['NEWSLETTER_NOTIFY_EMAIL'];
  const fromEmail = process.env['NEWSLETTER_FROM_EMAIL'];

  if (!resendApiKey || !notifyEmail || !fromEmail) {
    console.error(
      'Newsletter signup received but RESEND_API_KEY / NEWSLETTER_NOTIFY_EMAIL / NEWSLETTER_FROM_EMAIL is not set.',
    );
    res.status(500).json({ error: 'Signup is temporarily unavailable.' });
    return;
  }

  const email = (req.body?.email ?? '').trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }

  try {
    const upstream = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: notifyEmail,
        subject: 'New newsletter signup — nowUKan',
        text: `A new visitor signed up for news and updates: ${email}`,
      }),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => '');
      console.error('Resend error:', upstream.status, detail);
      res.status(502).json({ error: 'Unable to complete signup. Please try again.' });
      return;
    }

    res.json({ ok: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    res.status(502).json({ error: 'Unable to complete signup. Please try again.' });
  }
});

/**
 * Registration proxy.
 *
 * The Angular app (browser code) must never hold the nowUKan external API
 * key directly — anything shipped to the browser is public. This route
 * runs server-side only, attaches the key from the environment, and
 * forwards the request to the real API.
 *
 * Configure EXTERNAL_API_KEY and (optionally) EXTERNAL_API_BASE_URL via
 * environment variables — see .env.example.
 */
app.post('/api/register', async (req, res) => {
  const apiKey = process.env['EXTERNAL_API_KEY'];
  const baseUrl =
    process.env['EXTERNAL_API_BASE_URL'] || 'https://staging.nowukan.app/api/external';

  if (!apiKey) {
    console.error('EXTERNAL_API_KEY is not set — registration proxy cannot run.');
    res.status(500).json({ error: 'Registration is temporarily unavailable.' });
    return;
  }

  const { firstName, lastName, email, password, password_confirmation, contact, location, age } =
    req.body ?? {};

  if (!firstName || !lastName || !email || !password || !password_confirmation) {
    res.status(400).json({ error: 'Missing required fields.' });
    return;
  }

  try {
    const upstream = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        password_confirmation,
        contact: contact || null,
        location: location || null,
        age: age || null,
      }),
    });

    const data = await upstream.json().catch(() => ({}));
    res.status(upstream.status).json(data);
  } catch (err) {
    console.error('Registration proxy error:', err);
    res.status(502).json({ error: 'Unable to reach the registration service. Please try again.' });
  }
});

/** Serve static files from the browser build. */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
    redirect: false,
  }),
);

/** All other routes are rendered by Angular SSR. */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
