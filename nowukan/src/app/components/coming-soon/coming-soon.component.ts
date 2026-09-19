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

  subscribe(): void {
    // Placeholder: wire up to your email provider / backend later.
    if (this.email().trim().length > 0) {
      this.signedUp.set(true);
    }
  }
}
