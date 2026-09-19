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
  (req, res) => {
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

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        // TODO: this is where real fulfilment goes — e.g. look up
        // session.customer_email / session.metadata, mark the order as
        // paid in your database, send a confirmation email, provision
        // account access, etc. Logged for now so you can see it firing.
        console.log('✅ Checkout session completed:', session.id, session.customer_email);
        break;
      }
      default:
        console.log(`Unhandled Stripe event type: ${event.type}`);
    }

    res.json({ received: true });
  },
);

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

  try {
    const session = await stripe.checkout.sessions.create({
      mode: plan.mode,
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: plan.currency,
            product_data: { name: plan.name },
            unit_amount: plan.amount,
            ...(plan.mode === 'subscription'
              ? { recurring: { interval: plan.interval || 'month' } }
              : {}),
          },
          quantity: 1,
        },
      ],
      // Stripe Tax calculates and adds the correct local GST/VAT automatically
      // based on the customer's billing address. Requires Stripe Tax to be
      // switched on in the Dashboard (Settings -> Tax) and your product's tax
      // category configured there before this will actually apply anything.
      automatic_tax: { enabled: true },
      billing_address_collection: 'required',
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout session error:', err);
    res.status(502).json({ error: 'Unable to start checkout. Please try again.' });
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
