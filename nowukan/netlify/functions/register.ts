import type { Handler } from '@netlify/functions';

const DEFAULT_BASE_URL = 'https://staging.nowukan.app/api/external';

/**
 * Registration proxy — Netlify Function.
 *
 * Netlify's standard deploy serves static files only; it does not run the
 * project's src/server.ts Express app. This function does the same job
 * (keeping EXTERNAL_API_KEY server-side, forwarding to the real nowUKan
 * API) in a form Netlify actually executes.
 *
 * Configure EXTERNAL_API_KEY (and optionally EXTERNAL_API_BASE_URL) in
 * Site settings → Environment variables in the Netlify dashboard — this
 * function cannot read your local .env file once deployed.
 */
export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const apiKey = process.env['EXTERNAL_API_KEY'];
  const baseUrl = process.env['EXTERNAL_API_BASE_URL'] || DEFAULT_BASE_URL;

  if (!apiKey) {
    console.error('EXTERNAL_API_KEY is not set — registration function cannot run.');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Registration is temporarily unavailable.' }),
    };
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body.' }) };
  }

  const { firstName, lastName, email, password, password_confirmation, contact, location, age } =
    payload as Record<string, unknown>;

  if (!firstName || !lastName || !email || !password || !password_confirmation) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields.' }) };
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

    return {
      statusCode: upstream.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error('Registration proxy error:', err);
    return {
      statusCode: 502,
      body: JSON.stringify({
        error: 'Unable to reach the registration service. Please try again.',
      }),
    };
  }
};
