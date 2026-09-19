# NowUkan — Website (Angular 20 SSR)

The public marketing site for NowUkan, built as an **Angular 20** application with
**server-side rendering (SSR)** and full-page prerendering. The original single-file
design has been converted into a componentised, multi-page project that keeps the
long-scroll home page while giving every sitemap entry its own route.

## Requirements

- **Node.js 20 LTS or newer** (Node 22 recommended)
- npm 10+

## Getting started

```bash
npm install            # install dependencies
npm start              # dev server at http://localhost:4200
```

> If `npm install` reports peer-dependency warnings between Angular packages,
> run `npm install --legacy-peer-deps`. This is only due to minor-version skew
> across Angular 20.x packages and is safe.

## Build

```bash
npm run build          # production build (SSR + prerendered pages) -> dist/nowukan
```

The build output contains:

- `dist/nowukan/browser/` — static assets and prerendered HTML for every route
- `dist/nowukan/server/`  — the Node SSR server (`server.mjs`)

Run the SSR server locally:

```bash
npm run serve:ssr
# Node Express server listening on http://localhost:4000
```

## Project structure

```
src/
  app/
    components/        reusable UI pieces (nav, hero, learning-flow,
                       institutions, pilot, explain, footer)
    pages/             one component per route (home + 13 sitemap pages)
    app.component.ts   shell: <app-nav> + <router-outlet> + <app-footer>
    app.routes.ts      all routes (lazy-loaded, titled)
    app.routes.server.ts   server render modes (all pages prerendered)
    app.config.ts      client providers (router, hydration)
    app.config.server.ts   server providers
  styles/
    _tokens.scss       brand colours & spacing (from the original :root vars)
    _base.scss         global base styles + inner-page shell
    _fonts.scss        (fonts are injected at runtime — see below)
  assets/img/          the 14 images extracted from the original HTML
  index.html
  main.ts / main.server.ts / server.ts
```

### Design system

The brand tokens from the original design (`--bg`, `--blue`, `--gold`, `--cyan`,
etc.) live in `src/styles/_tokens.scss`. All components consume those variables,
so re-theming is a single-file change.

### Fonts

Inter, Sora and Space Grotesk are loaded from Google Fonts **at runtime** (see the
top of `src/main.ts`). This keeps `ng build` fully self-contained. To self-host
instead, drop the `.woff2` files into `src/assets/fonts/`, declare `@font-face`
in `_fonts.scss`, and remove the runtime injection in `main.ts`.

## Local SSR note (host allowlist)

Angular 20 blocks unknown `Host` headers during SSR as an SSRF protection. When
running `serve:ssr` on `localhost` you may see a "host is not allowed" notice and a
fall back to client rendering. This does not affect production, where requests
arrive on the real domain. To silence it locally, set the allowed hosts in
`server.ts` (e.g. add an Express middleware that trusts `localhost`) or run behind
your normal dev proxy.

## Deploying to Netlify (SSR)

This app renders on the server, so it needs Netlify's serverless runtime, not a
plain static deploy.

1. Push this repository to GitHub.
2. In Netlify: **Add new site → Import from Git** and pick the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/nowukan/browser`
4. Install the Angular SSR adapter so the server bundle runs as a function:
   ```bash
   npm i -D @netlify/angular-runtime
   ```
   Netlify's Angular runtime auto-detects the `dist/nowukan/server` output and
   wires the SSR handler — no manual function code needed.
5. Deploy. Every push to the main branch redeploys automatically.

If you prefer a **static-only** preview (no SSR), you can instead publish
`dist/nowukan/browser` as a static site — the prerendered HTML for all 14 routes
is already there, though live SSR features (per-request rendering) won't run.

## Sitemap / routes

`/` · `/how-it-works` · `/pronunciation` · `/real-life-english` · `/for-learners`
· `/for-families` · `/for-institutions` · `/institutions/pilot-programme`
· `/pricing` · `/about` · `/faqs` · `/contact` · `/download` · `/legal`
