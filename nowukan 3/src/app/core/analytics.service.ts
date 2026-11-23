import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GA_MEASUREMENT_ID, SEARCH_CONSOLE_VERIFICATION } from './analytics-config';

const CONSENT_KEY = 'nowukan-cookie-consent';

/**
 * Google Analytics 4 (loaded only after cookie consent) and the Google
 * Search Console verification tag. IDs live in analytics-config.ts.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private started = false;

  constructor() {
    // Rendered on the server too, so Google sees it when verifying.
    if (SEARCH_CONSOLE_VERIFICATION) {
      inject(Meta).updateTag({ name: 'google-site-verification', content: SEARCH_CONSOLE_VERIFICATION });
    }
  }

  /** Has this visitor accepted cookies on an earlier visit? */
  hasConsent(): boolean {
    if (!this.isBrowser) return false;
    try { return localStorage.getItem(CONSENT_KEY) === 'accepted'; } catch { return false; }
  }

  /** Called when the visitor clicks Accept. Remembers it and starts analytics. */
  grantConsent(): void {
    if (!this.isBrowser) return;
    try { localStorage.setItem(CONSENT_KEY, 'accepted'); } catch { /* private mode */ }
    this.start();
  }

  /** Loads Google Analytics (if an ID is set and consent was given) and tracks page views. */
  start(): void {
    if (!this.isBrowser || this.started || !GA_MEASUREMENT_ID || !this.hasConsent()) return;
    this.started = true;

    const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag() { w.dataLayer.push(arguments); } as never;
    w.gtag('js', new Date());
    // Page views are sent manually below, because this is a single-page app.
    w.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false, anonymize_ip: true });

    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    this.document.head.appendChild(script);

    let lastPath = '';
    const sendPageView = (path: string) => {
      if (path === lastPath) return; // never count the same page twice in a row
      lastPath = path;
      w.gtag('event', 'page_view', { page_path: path, page_location: window.location.href, page_title: this.document.title });
    };
    sendPageView(this.router.url);
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => setTimeout(() => sendPageView(e.urlAfterRedirects), 0)); // after the page title updates
  }
}
