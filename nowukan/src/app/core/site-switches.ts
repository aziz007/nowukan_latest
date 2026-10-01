/**
 * TEMPORARY PAUSE for sign-ups and payments.
 *
 * true  -> the final buttons are disabled with a "coming soon" note:
 *          - Register Now (registration form)
 *          - Pay securely via Stripe (Buy Now form)
 *          - Checkout with Stripe (Cart)
 *          and the server refuses those requests too.
 * false -> everything works normally.
 *
 * Change the value, then rebuild (npm run build) and restart.
 */
export const SIGNUPS_AND_PAYMENTS_PAUSED = true;

/** Shown under each disabled button. */
export const PAUSED_MESSAGE = 'Registration and purchases will open very soon. Thank you for your patience.';
