/**
 * Authoritative plan catalog for Stripe Checkout.
 *
 * IMPORTANT: prices here are PLACEHOLDERS — replace `amount` (in the
 * smallest currency unit, e.g. pence/cents) and `currency` with your real
 * figures before going live. Keeping this list on the server means the
 * browser only ever sends a `planKey`, never an amount — so nobody can
 * tamper with the price from the frontend or devtools.
 */
export interface StripePlan {
  /** Shown on the Stripe Checkout page. */
  name: string;
  /** Amount in the smallest currency unit — e.g. 2999 = £29.99 / $29.99. */
  amount: number;
  /** ISO currency code, lowercase. */
  currency: string;
  /** One-time payment vs recurring subscription. */
  mode: 'payment' | 'subscription';
  /** Required if mode is 'subscription' — how often to bill. */
  interval?: 'month' | 'year';
}

export const STRIPE_PLANS: Record<string, StripePlan> = {
  // TODO: replace with your real plan(s), name(s) and price(s).
  lifetime: {
    name: 'nowUKan — Lifetime Access',
    amount: 2999, // PLACEHOLDER — e.g. 2999 = £29.99. Confirm real price before launch.
    currency: 'gbp',
    mode: 'payment',
  },
};
