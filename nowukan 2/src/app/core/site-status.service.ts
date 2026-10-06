import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Asks the server whether sign-ups and payments are paused
 * (SIGNUPS_AND_PAYMENTS_PAUSED in the server's .env). Checked once per visit.
 */
@Injectable({ providedIn: 'root' })
export class SiteStatusService {
  readonly paused = signal(false);
  private loaded = false;

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID)) || this.loaded) return;
    this.loaded = true;
    fetch('/api/site-status', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => this.paused.set(!!d?.paused))
      .catch(() => {});
  }
}
