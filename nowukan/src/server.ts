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

      // Promo code used? Tell the CRM so single-use codes are used up.
      // Logged but not retried on failure: a retry could hit an already-used
      // code and fail forever. Check the logs for ❌ lines.
      const voucherCode = session.metadata?.['voucher_code'];
      if (voucherCode) {
        if (voucherRedeemEnabled()) {
          try {
            await redeemVoucher(voucherCode, email);
            console.log('✅ Voucher redeemed in CRM:', voucherCode, email, session.id);
          } catch (err) {
            console.error('❌ Voucher redeem failed — redeem manually in the CRM:', voucherCode, email, session.id, err);
          }
        } else {
          console.log('ℹ️ Voucher used (CRM redeem not enabled yet):', voucherCode, email, session.id);
        }
      }

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
// ---------------------------------------------------------------------------
// Promo codes (CRM vouchers)
// ---------------------------------------------------------------------------

function crmConfig() {
  return {
    apiKey: process.env['EXTERNAL_API_KEY'],
    baseUrl: process.env['EXTERNAL_API_BASE_URL'] || 'https://staging.nowukan.app/api/external',
  };
}

interface VoucherLookup {
  valid: true;
  code: string;
  real_price: number;
  discount_percentage: number;
  discount_amount: number;
  discounted_price: number;
}

/**
 * Asks the CRM about a promo code. Read-only: checking never uses a code up.
 * Returns the voucher, or null if the CRM says it is unknown / expired / used
 * (HTTP 404). Throws for anything else (bad key, rate limit, outage).
 */
async function lookupVoucher(code: string): Promise<VoucherLookup | null> {
  const { apiKey, baseUrl } = crmConfig();
  if (!apiKey) throw new Error('EXTERNAL_API_KEY is not set.');

  const response = await fetch(`${baseUrl}/vouchers/lookup`, {
    method: 'POST',
    headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ code }),
  });

  if (response.status === 404) return null;
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Voucher lookup failed: HTTP ${response.status} ${JSON.stringify(data).slice(0, 300)}`);
  }
  if (data?.valid !== true || typeof data.discounted_price !== 'number') return null;
  return data as VoucherLookup;
}

/**
 * THE PRICING RULE — the one place that decides what a promo code charges.
 *
 *  - If the CRM's real_price is LOWER than our normal price, charge the CRM's
 *    discounted_price exactly (backend developer: "Charge discounted_price").
 *  - Otherwise, apply the CRM's percentage to our normal price, so a promo
 *    code can never make anyone pay MORE than the normal price.
 *
 * All amounts are in pence. The result is always between 0 and planAmount.
 */
function priceWithVoucher(planAmount: number, voucher: VoucherLookup): number {
  const realPrice = Math.round(voucher.real_price * 100);
  const pence =
    realPrice < planAmount
      ? Math.round(voucher.discounted_price * 100)
      : Math.round(planAmount * (1 - voucher.discount_percentage / 100));
  return Math.min(planAmount, Math.max(0, pence));
}

/** Stripe's minimum card charge in GBP is 30p. */
const STRIPE_MIN_CHARGE_PENCE = 30;

/**
 * Tells the CRM a code was used by this buyer (and sets them to Paid).
 *
 * The CRM endpoint (POST /vouchers/redeem { code, email }) is being built by
 * the backend developer. Until it exists, keep CRM_VOUCHER_REDEEM_ENABLED
 * unset/false: single-use codes then stay valid after use, and 100%-off codes
 * are refused at checkout (they cannot be registered as Paid without it).
 */
function voucherRedeemEnabled(): boolean {
  return process.env['CRM_VOUCHER_REDEEM_ENABLED'] === 'true';
}

async function redeemVoucher(code: string, email: string): Promise<void> {
  const { apiKey, baseUrl } = crmConfig();
  if (!apiKey) throw new Error('EXTERNAL_API_KEY is not set.');
  const path = process.env['CRM_VOUCHER_REDEEM_PATH'] || '/vouchers/redeem';
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ code, email }),
  });
  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`Voucher redeem failed: HTTP ${response.status} ${body.slice(0, 300)}`);
  }
}

/**
 * Simple per-visitor rate limit for promo code checks: stops people guessing
 * codes and protects the CRM's 30-requests-per-minute limit.
 */
const voucherHits = new Map<string, number[]>();
function voucherRateLimited(req: express.Request): boolean {
  const ip = String(req.headers['x-forwarded-for'] || req.ip || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const recent = (voucherHits.get(ip) || []).filter((t) => now - t < 60_000);
  recent.push(now);
  voucherHits.set(ip, recent);
  if (voucherHits.size > 5000) voucherHits.clear(); // keep memory bounded
  return recent.length > 8;
}

const isEmail = (v: unknown): v is string =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/**
 * Cart "Apply" button: checks a promo code and returns the price to show.
 * Display only — checkout re-checks the code itself, so this can't be abused.
 */
app.post('/api/voucher/check', async (req, res) => {
  const code = typeof req.body?.code === 'string' ? req.body.code.trim() : '';
  const plan = STRIPE_PLANS['lifetime'];
  if (!code) {
    res.status(400).json({ valid: false, message: 'Please enter a promo code.' });
    return;
  }
  if (voucherRateLimited(req)) {
    res.status(429).json({ valid: false, message: 'Too many attempts. Please wait a minute and try again.' });
    return;
  }
  try {
    const voucher = await lookupVoucher(code);
    if (!voucher) {
      res.status(404).json({ valid: false, message: 'This promo code is not valid or has expired.' });
      return;
    }
    const price = priceWithVoucher(plan.amount, voucher);
    if (price === 0 && !voucherRedeemEnabled()) {
      res.status(409).json({
        valid: false,
        message: 'This code cannot be used online yet. Please contact us to redeem it.',
      });
      return;
    }
    if (price > 0 && price < STRIPE_MIN_CHARGE_PENCE) {
      res.status(409).json({ valid: false, message: 'This code cannot be used online. Please contact us.' });
      return;
    }
    res.json({
      valid: true,
      code: voucher.code,
      discountPercentage: voucher.discount_percentage,
      originalPrice: plan.amount,
      price,
    });
  } catch (err) {
    console.error('Promo code check error:', err);
    res.status(502).json({ valid: false, message: 'We could not check this code right now. Please try again shortly.' });
  }
});

interface LifetimeCheckoutOptions {
  email: string;
  amount: number; // pence, already discounted if a voucher applies
  voucherCode: string | null;
  metadata: Record<string, string>;
  successUrl: string;
  cancelUrl: string;
}

/**
 * Creates the Stripe Checkout session for Lifetime Access and returns its URL.
 * Shared by the Cart and Buy Now pages so both charge exactly the same way:
 * nowUKan branding, Stripe Tax, Adaptive Pricing (local currency), voucher.
 */
async function createLifetimeCheckout(o: LifetimeCheckoutOptions): Promise<string> {
  if (!stripe) throw new Error('Stripe is not configured.');
  const plan = STRIPE_PLANS['lifetime'];
  const siteUrl = process.env['SITE_URL'] || 'https://nowukan.io';

  // Optional: the product tax category. If not set, Stripe uses the preset
  // tax code from Dashboard -> Settings -> Tax. Set it in .env once your
  // accountant confirms the right category for the app.
  const taxCode = process.env['STRIPE_TAX_CODE'] || undefined;

  const baseParams: Stripe.Checkout.SessionCreateParams = {
    mode: plan.mode,
    customer_email: o.email,
    // Read back by the webhook after payment.
    metadata: {
      ...o.metadata,
      ...(o.voucherCode ? { voucher_code: o.voucherCode, original_amount: String(plan.amount) } : {}),
    },
    line_items: [
      {
        price_data: {
          currency: plan.currency,
          product_data: {
            name: o.voucherCode ? `${plan.name} (voucher ${o.voucherCode})` : plan.name,
            ...(taxCode ? { tax_code: taxCode } : {}),
          },
          unit_amount: o.amount,
          // Tax is always added ON TOP of the price, never absorbed into it.
          tax_behavior: 'exclusive',
        },
        quantity: 1,
      },
    ],
    // Stripe Tax adds local GST/VAT based on the billing address — only in
    // countries with a tax REGISTRATION in Dashboard -> Tax -> Registrations.
    automatic_tax: { enabled: true },
    billing_address_collection: 'required',
    // Adaptive Pricing: overseas buyers pay in their local currency; Stripe
    // settles to us in GBP. The 2-4% conversion fee is paid by the buyer.
    adaptive_pricing: { enabled: true },
    success_url: o.successUrl,
    cancel_url: o.cancelUrl,
  };

  // nowUKan branding on the Stripe page, set per session so it can't go
  // missing if Dashboard branding differs between live and sandbox accounts.
  const logoUrl = process.env['STRIPE_BRANDING_LOGO_URL'] || `${siteUrl}/brand/nowukan-logo.png`;
  const brandedParams = {
    ...baseParams,
    branding_settings: { display_name: 'nowUKan', logo: { type: 'url', url: logoUrl } },
  } as unknown as Stripe.Checkout.SessionCreateParams;

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.create(brandedParams, { apiVersion: '2025-09-30.clover' });
  } catch (brandingErr) {
    // Never let branding block a payment: retry without it and log why.
    console.warn('Stripe rejected branding settings — continuing without them:', (brandingErr as Error).message);
    session = await stripe.checkout.sessions.create(baseParams);
  }
  if (!session.url) throw new Error('Stripe returned no checkout URL.');
  return session.url;
}

app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) {
    console.error('STRIPE_SECRET_KEY is not set — checkout cannot run.');
    res.status(500).json({ error: 'Checkout is temporarily unavailable.' });
    return;
  }

  const { planKey, email, promoCode } = req.body ?? {};
  const plan = STRIPE_PLANS[planKey];

  if (!plan) {
    res.status(400).json({ error: 'Unknown plan.' });
    return;
  }
  if (!isEmail(email)) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }
  const buyerEmail = email.trim();

  const siteUrl = process.env['SITE_URL'] || 'https://nowukan.io';

  // Promo code: ALWAYS re-checked with the CRM here. The price is never taken
  // from the browser.
  let amount = plan.amount;
  let voucherCode: string | null = null;
  if (typeof promoCode === 'string' && promoCode.trim()) {
    try {
      const voucher = await lookupVoucher(promoCode.trim());
      if (!voucher) {
        res.status(400).json({ error: 'This promo code is not valid or has expired.' });
        return;
      }
      amount = priceWithVoucher(plan.amount, voucher);
      voucherCode = voucher.code;
    } catch (err) {
      console.error('Promo code re-check at checkout failed:', err);
      res.status(502).json({ error: 'We could not check your promo code right now. Please try again shortly.' });
      return;
    }

    // 100% off: no payment to take, so skip Stripe and redeem directly.
    if (amount === 0) {
      if (!voucherRedeemEnabled()) {
        res.status(409).json({ error: 'This code cannot be used online yet. Please contact us to redeem it.' });
        return;
      }
      try {
        await redeemVoucher(voucherCode, buyerEmail);
        console.log('✅ Free voucher redeemed:', voucherCode, buyerEmail);
        res.json({ url: `${siteUrl}/checkout/success?voucher=1` });
      } catch (err) {
        console.error('❌ Free voucher redeem failed:', voucherCode, buyerEmail, err);
        res.status(502).json({ error: 'We could not redeem this code right now. Please try again shortly.' });
      }
      return;
    }
    if (amount < STRIPE_MIN_CHARGE_PENCE) {
      res.status(409).json({ error: 'This code cannot be used online. Please contact us.' });
      return;
    }
  }

  try {
    const url = await createLifetimeCheckout({
      email: buyerEmail,
      amount,
      voucherCode,
      metadata: { flow: 'cart' },
      successUrl: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${siteUrl}/checkout/cancel`,
    });
    res.json({ url });
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
/**
 * "Win Free Lifetime English" competition entry form.
 *
 * Emails each entry to COMPETITION_NOTIFY_EMAIL (default info@nowukan.io) via
 * Resend, the same email service the newsletter signup uses. The entrant's
 * address is set as reply-to, so replying goes straight to them.
 * Needs RESEND_API_KEY and NEWSLETTER_FROM_EMAIL (a Resend-verified sender).
 */
const competitionHits = new Map<string, number[]>();
app.post('/api/competition-entry', async (req, res) => {
  const resendApiKey = process.env['RESEND_API_KEY'];
  const fromEmail = process.env['NEWSLETTER_FROM_EMAIL'];
  const notifyEmail = process.env['COMPETITION_NOTIFY_EMAIL'] || 'info@nowukan.io';

  if (!resendApiKey || !fromEmail) {
    console.error('Competition entry received but RESEND_API_KEY / NEWSLETTER_FROM_EMAIL is not set.');
    res.status(500).json({ error: 'Entries are temporarily unavailable. Please try again later.' });
    return;
  }

  // Simple per-visitor limit against spam.
  const ip = String(req.headers['x-forwarded-for'] || req.ip || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const recent = (competitionHits.get(ip) || []).filter((t) => now - t < 60 * 60_000);
  recent.push(now);
  competitionHits.set(ip, recent);
  if (competitionHits.size > 5000) competitionHits.clear();
  if (recent.length > 5) {
    res.status(429).json({ error: 'Too many entries from this connection. Please try again later.' });
    return;
  }

  const clean = (v: unknown, max = 200) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
  const entry = {
    name: clean(req.body?.name),
    email: clean(req.body?.email),
    schoolName: clean(req.body?.schoolName),
    schoolWebsite: clean(req.body?.schoolWebsite),
    studentCount: clean(req.body?.studentCount, 20),
    country: clean(req.body?.country),
    role: clean(req.body?.role, 50),
    schoolType: clean(req.body?.schoolType, 50),
  };

  if (!entry.name || !isEmail(entry.email) || !entry.schoolName || !entry.country || !entry.role || !entry.schoolType) {
    res.status(400).json({ error: 'Please complete all required fields.' });
    return;
  }

  const text = [
    'New entry: Win Free Lifetime English For Your Entire School',
    '',
    `Name:               ${entry.name}`,
    `Email:              ${entry.email}`,
    `School name:        ${entry.schoolName}`,
    `School website:     ${entry.schoolWebsite || '-'}`,
    `Number of students: ${entry.studentCount || '-'}`,
    `Country:            ${entry.country}`,
    `Student / Faculty:  ${entry.role}`,
    `School type:        ${entry.schoolType}`,
    '',
    `Submitted: ${new Date().toUTCString()}`,
  ].join('\n');

  try {
    const upstream = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: fromEmail,
        to: notifyEmail,
        reply_to: entry.email,
        subject: `Competition entry — ${entry.schoolName} (${entry.role})`,
        text,
      }),
    });
    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => '');
      console.error('❌ Competition entry email failed:', upstream.status, detail);
      res.status(502).json({ error: 'We could not submit your entry. Please try again.' });
      return;
    }
    console.log('✅ Competition entry emailed:', entry.email, entry.schoolName);
    res.json({ ok: true });
  } catch (err) {
    console.error('❌ Competition entry error:', err);
    res.status(502).json({ error: 'We could not submit your entry. Please try again.' });
  }
});

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
// ---------------------------------------------------------------------------
// Accounts in the CRM (shared by Register Now and Buy Now)
// ---------------------------------------------------------------------------

interface NewUserDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password_confirmation: string;
  contact?: string | null;
  location?: string | null;
  age?: string | number | null;
}

/** Creates a user in the CRM (POST /users). Returns the CRM's status + body. */
async function createCrmUser(d: NewUserDetails): Promise<{ status: number; data: any }> {
  const { apiKey, baseUrl } = crmConfig();
  if (!apiKey) throw new Error('EXTERNAL_API_KEY is not set.');
  const upstream = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: d.firstName,
      lastName: d.lastName,
      email: d.email,
      password: d.password,
      password_confirmation: d.password_confirmation,
      contact: d.contact || null,
      location: d.location || null,
      age: d.age || null,
    }),
  });
  const data = await upstream.json().catch(() => ({}));
  return { status: upstream.status, data };
}

/**
 * Looks up a user's billing status in the CRM (GET /users/billing-status).
 *  - 200 -> { exists: true, status: 'Trial' | ... }
 *  - 404 -> user exists but has no account yet -> { exists: true, status: null }
 *  - 422 -> no such user -> { exists: false }
 * Throws for anything else (bad key, outage).
 */
async function lookupBillingStatus(
  email: string,
): Promise<{ exists: false } | { exists: true; status: string | null }> {
  const { apiKey, baseUrl } = crmConfig();
  if (!apiKey) throw new Error('EXTERNAL_API_KEY is not set.');
  const url = `${baseUrl}/users/billing-status?email=${encodeURIComponent(email)}`;
  const response = await fetch(url, { headers: { 'X-API-Key': apiKey, Accept: 'application/json' } });
  if (response.status === 422) return { exists: false };
  if (response.status === 404) return { exists: true, status: null };
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`Billing status lookup failed: HTTP ${response.status} ${JSON.stringify(data).slice(0, 300)}`);
  return { exists: true, status: data?.user?.billing_status ?? null };
}

/** Billing statuses that already mean "has lifetime access" (no second purchase). */
function alreadyPaidStatuses(): string[] {
  const configured = process.env['CRM_ALREADY_PAID_STATUSES'] || process.env['CRM_PAID_STATUS'] || 'Paid';
  return configured.split(',').map((v) => v.trim().toLowerCase()).filter(Boolean);
}

const buyNowHits = new Map<string, number[]>();
function buyNowRateLimited(req: express.Request): boolean {
  const ip = String(req.headers['x-forwarded-for'] || req.ip || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const recent = (buyNowHits.get(ip) || []).filter((t) => now - t < 60_000);
  recent.push(now);
  buyNowHits.set(ip, recent);
  if (buyNowHits.size > 5000) buyNowHits.clear();
  return recent.length > 6;
}

/**
 * Buy Now page -> "Pay securely via Stripe".
 *
 *  1. Ask the CRM whether this email already has an account.
 *     - Already paid      -> stop (no double purchase).
 *     - Existing (trial)  -> no new account; checkout is an UPGRADE.
 *     - Not found         -> create the account now with the form details.
 *  2. Re-check any voucher with the CRM and work out the price.
 *  3. Start Stripe Checkout. After payment the webhook marks the user Paid in
 *     the CRM and redeems the voucher.
 */
app.post('/api/buy-now', async (req, res) => {
  const { firstName, lastName, email, password, password_confirmation, contact, location, age, promoCode } =
    req.body ?? {};

  if (buyNowRateLimited(req)) {
    res.status(429).json({ error: 'Too many attempts. Please wait a minute and try again.' });
    return;
  }
  if (!firstName || !lastName || !isEmail(email) || !password || !password_confirmation) {
    res.status(400).json({ error: 'Please complete all required fields.' });
    return;
  }
  if (!stripe) {
    console.error('STRIPE_SECRET_KEY is not set — Buy Now cannot run.');
    res.status(500).json({ error: 'Checkout is temporarily unavailable.' });
    return;
  }
  const buyerEmail = String(email).trim();
  const plan = STRIPE_PLANS['lifetime'];
  const siteUrl = process.env['SITE_URL'] || 'https://nowukan.io';

  // 1) Voucher first, so an invalid code never creates an account.
  let amount = plan.amount;
  let voucherCode: string | null = null;
  if (typeof promoCode === 'string' && promoCode.trim()) {
    try {
      const voucher = await lookupVoucher(promoCode.trim());
      if (!voucher) {
        res.status(400).json({ error: 'This voucher code is not valid or has expired.' });
        return;
      }
      amount = priceWithVoucher(plan.amount, voucher);
      voucherCode = voucher.code;
    } catch (err) {
      console.error('Buy Now voucher check failed:', err);
      res.status(502).json({ error: 'We could not check your voucher code right now. Please try again shortly.' });
      return;
    }
  }

  if (voucherCode && amount === 0 && !voucherRedeemEnabled()) {
    res.status(409).json({ error: 'This code cannot be used online yet. Please contact us to redeem it.' });
    return;
  }
  if (amount > 0 && amount < STRIPE_MIN_CHARGE_PENCE) {
    res.status(409).json({ error: 'This code cannot be used online. Please contact us.' });
    return;
  }

  // 2) Account
  let isUpgrade = false;
  try {
    const existing = await lookupBillingStatus(buyerEmail);
    if (existing.exists) {
      if (existing.status && alreadyPaidStatuses().includes(existing.status.toLowerCase())) {
        res.status(409).json({
          error: 'This email already has nowUKan lifetime access. Please contact us if you need help logging in.',
        });
        return;
      }
      isUpgrade = true; // e.g. a free-trial user buying lifetime access
    } else {
      const created = await createCrmUser({ firstName, lastName, email: buyerEmail, password, password_confirmation, contact, location, age });
      if (created.status < 200 || created.status >= 300) {
        res.status(created.status === 422 ? 422 : 502).json(
          created.status === 422 ? created.data : { error: 'We could not create your account. Please try again.' },
        );
        return;
      }
      console.log('✅ Buy Now: account created before payment:', buyerEmail);
    }
  } catch (err) {
    console.error('Buy Now account step failed:', buyerEmail, err);
    res.status(502).json({ error: 'We could not reach our account service. Please try again shortly.' });
    return;
  }

  const successType = isUpgrade ? 'upgrade' : 'new';

  // 100% off: nothing to pay, redeem straight away.
  if (voucherCode && amount === 0) {
    try {
      await redeemVoucher(voucherCode, buyerEmail);
      console.log('✅ Buy Now: free voucher redeemed:', voucherCode, buyerEmail);
      res.json({ url: `${siteUrl}/checkout/success?type=${successType}` });
    } catch (err) {
      console.error('❌ Buy Now: free voucher redeem failed:', voucherCode, buyerEmail, err);
      res.status(502).json({ error: 'We could not redeem this code right now. Please try again shortly.' });
    }
    return;
  }

  // 3) Stripe
  try {
    const url = await createLifetimeCheckout({
      email: buyerEmail,
      amount,
      voucherCode,
      metadata: { flow: 'buy_now', upgrade: isUpgrade ? 'true' : 'false' },
      successUrl: `${siteUrl}/checkout/success?type=${successType}&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${siteUrl}/buy-now`,
    });
    res.json({ url });
  } catch (err) {
    console.error('Buy Now Stripe error:', err);
    res.status(502).json({ error: 'Unable to start payment. Please try again.' });
  }
});

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
    const upstream = await createCrmUser({ firstName, lastName, email, password, password_confirmation, contact, location, age });
    res.status(upstream.status).json(upstream.data);
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
