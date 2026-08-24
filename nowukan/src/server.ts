import 'dotenv/config';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());

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
