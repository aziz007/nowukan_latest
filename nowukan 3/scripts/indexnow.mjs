/**
 * IndexNow — tells Bing, Yandex, Seznam, Naver and other IndexNow search
 * engines that the site's pages exist or have changed, so they re-crawl them.
 * (Google does not support IndexNow — use Google Search Console for Google.)
 *
 * Run AFTER each deploy, once the site is live:
 *   npm run indexnow
 *
 * It reads every URL from the LIVE sitemap (https://nowukan.io/sitemap.xml, which
 * is generated automatically and includes every blog post) and submits them in
 * one request. If the live site can't be reached it falls back to public/sitemap.xml.
 * The key below must match the key file served at
 * https://nowukan.io/12be13421c6e2c8e84ccd46366e68ff8.txt (in the public/ folder) — keep both.
 */
import { readFileSync } from 'node:fs';

const HOST = 'nowukan.io';
const KEY = '12be13421c6e2c8e84ccd46366e68ff8';

let sitemap = '';
try {
  const live = await fetch(`https://${HOST}/sitemap.xml`);
  if (live.ok) sitemap = await live.text();
} catch {
  /* fall back below */
}
if (!sitemap.includes('<loc>')) {
  console.warn('Live sitemap unavailable — using public/sitemap.xml instead.');
  sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
}
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (urlList.length === 0) {
  console.error('No URLs found in the sitemap.');
  process.exit(1);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = accepted, 202 = accepted (key check pending). Anything else is a problem.
if (response.status === 200 || response.status === 202) {
  console.log(`✅ IndexNow accepted ${urlList.length} URLs (HTTP ${response.status}).`);
} else {
  const hint = {
    400: 'Bad request — check the URL list format.',
    403: 'Key not valid — is the key file live at the keyLocation URL?',
    422: 'URLs do not belong to the host, or key mismatch.',
    429: 'Too many requests — wait and try again later.',
  }[response.status] ?? '';
  console.error(`❌ IndexNow failed: HTTP ${response.status}. ${hint}`);
  process.exit(1);
}
