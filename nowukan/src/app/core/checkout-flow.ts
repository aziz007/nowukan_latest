/**
 * ONE SETTING that chooses how people buy nowUKan Lifetime Access.
 *
 *  'buy-now' — Buy Now buttons open the full Buy Now form (same fields as
 *              Register Now + voucher). The account is created in the CRM,
 *              then Stripe, then the Congratulations page. Trial users are
 *              recognised and upgraded. The Cart's checkout button also goes
 *              to the Buy Now form.
 *
 *  'direct'  — The earlier flow: Buy Now buttons open the Cart, where the
 *              buyer enters just their email (+ optional promo code) and goes
 *              straight to Stripe. No account is created by the website.
 *
 * Change the value below, then rebuild (npm run build) and restart.
 */
export const CHECKOUT_FLOW: 'buy-now' | 'direct' = 'buy-now';
