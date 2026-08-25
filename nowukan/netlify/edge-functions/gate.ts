// Site-wide password gate.
//
// Runs at the Netlify edge, before any page is served — so this genuinely
// blocks access (unlike a client-side JS overlay, which wouldn't stop
// someone from viewing pre-rendered HTML directly). Intended as a soft
// gate to keep the site private before public launch, not as strong
// security for sensitive data.
//
// Change the password by editing SITE_PASSWORD below (or better, set it
// as a Netlify environment variable named SITE_PASSWORD and read it from
// Deno.env — see the commented line below).

const SITE_PASSWORD = 'nowuk1';
const COOKIE_NAME = 'nowukan_gate';
const COOKIE_VALUE = 'granted';

export default async (request: Request, context: any) => {
  const url = new URL(request.url);

  // Only gate normal page loads (GET requests for HTML). Let API calls,
  // Netlify Functions, and static assets (JS/CSS/images/fonts) through
  // untouched so the app and login page itself still work correctly.
  const isAsset = /\.(js|css|png|jpe?g|svg|webp|ico|woff2?|ttf|map|json|pdf)$/i.test(
    url.pathname,
  );
  const isApi = url.pathname.startsWith('/api/') || url.pathname.startsWith('/.netlify/');

  if (request.method !== 'GET' || isAsset || isApi) {
    return context.next();
  }

  // Already unlocked this browser? Let the real page through.
  const cookie = request.headers.get('cookie') || '';
  if (cookie.includes(`${COOKIE_NAME}=${COOKIE_VALUE}`)) {
    return context.next();
  }

  // Password submitted via the login form below?
  const submitted = url.searchParams.get('site_password');
  if (submitted === SITE_PASSWORD) {
    const clean = new URL(url);
    clean.searchParams.delete('site_password');
    return new Response(null, {
      status: 302,
      headers: {
        Location: clean.pathname + clean.search,
        'Set-Cookie': `${COOKIE_NAME}=${COOKIE_VALUE}; Path=/; Max-Age=2592000; SameSite=Lax`,
      },
    });
  }

  const wrongPassword = submitted !== null;

  return new Response(loginPage(wrongPassword), {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
};

function loginPage(wrongPassword: boolean): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>nowUKan — Private Preview</title>
<style>
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
    background:#020817;color:#fff;font-family:Inter,ui-sans-serif,system-ui,sans-serif;padding:20px}
  .box{max-width:380px;width:100%;background:rgba(6,20,43,.98);border:1px solid rgba(255,255,255,.16);
    border-radius:18px;padding:36px 30px;text-align:center;box-shadow:0 30px 90px rgba(0,0,0,.5)}
  h1{font-size:22px;margin:0 0 8px;font-weight:800}
  p{color:#c9d3e4;font-size:14px;margin:0 0 22px;line-height:1.6}
  input{width:100%;padding:13px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.16);
    background:rgba(255,255,255,.06);color:#fff;font-size:14px;margin-bottom:14px}
  input::placeholder{color:rgba(255,255,255,.4)}
  button{width:100%;padding:13px 14px;border-radius:8px;border:none;cursor:pointer;
    background:linear-gradient(135deg,#F6C85F,#D6A536);color:#06142B;font-weight:800;font-size:14px}
  .error{color:#E5484D;font-size:13px;font-weight:700;margin:-8px 0 14px}
</style>
</head>
<body>
  <div class="box">
    <h1>This site is private</h1>
    <p>Enter the password to preview nowUKan before launch.</p>
    <form method="GET">
      ${wrongPassword ? '<div class="error">Incorrect password — try again.</div>' : ''}
      <input type="password" name="site_password" placeholder="Password" autofocus required />
      <button type="submit">Enter Site</button>
    </form>
  </div>
</body>
</html>`;
}
