import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly email = signal('');
  readonly signedUp = signal(false);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  async subscribe(): Promise<void> {
    const value = this.email().trim();
    if (!value) return;

    this.loading.set(true);
    this.error.set(null);

    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
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
