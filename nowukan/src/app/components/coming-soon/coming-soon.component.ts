import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const DISMISS_KEY = 'nowukan-coming-soon-dismissed';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  templateUrl: './coming-soon.component.html',
})
export class ComingSoonComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  /**
   * Starts hidden during SSR / initial render, then shown on the client
   * unless the visitor already dismissed it earlier this session.
   */
  readonly visible = signal(false);

  readonly email = signal('');
  readonly signedUp = signal(false);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  constructor() {
    if (this.isBrowser) {
      const alreadyDismissed = sessionStorage.getItem(DISMISS_KEY) === '1';
      this.visible.set(!alreadyDismissed);
    }
  }

  close(): void {
    this.visible.set(false);
    if (this.isBrowser) {
      sessionStorage.setItem(DISMISS_KEY, '1');
    }
  }

  /** Saved as a lead in the CRM by the server (/api/newsletter-signup). */
  async subscribe(): Promise<void> {
    const value = this.email().trim();
    this.error.set(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      this.error.set('Please enter a valid email address.');
      return;
    }
    this.loading.set(true);
    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, source: 'coming-soon' }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        this.signedUp.set(true);
      } else {
        this.error.set(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      this.error.set('Unable to reach the server right now. Please try again shortly.');
    } finally {
      this.loading.set(false);
    }
  }
}
