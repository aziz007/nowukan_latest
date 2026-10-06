/**
 * PAUSE for sign-ups and payments is now controlled per server in .env:
 *
 *   SIGNUPS_AND_PAYMENTS_PAUSED=true    -> paused (Register Now, Pay securely
 *                                          via Stripe and Checkout with Stripe
 *                                          are disabled, and the server refuses
 *                                          those requests)
 *   (missing, or anything else)          -> everything works
 *
 * e.g. staging: leave it out (enabled for testing)
 *      production: SIGNUPS_AND_PAYMENTS_PAUSED=true until launch day
 * Restart the site after changing it (no rebuild needed).
 */
export const PAUSED_MESSAGE = 'Registration and purchases will open very soon. Thank you for your patience.';

/** Fallback for code that can't read the server's .env (the unused Netlify function). */
export const SIGNUPS_AND_PAYMENTS_PAUSED = false;
