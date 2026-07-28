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

  subscribe(): void {
    // Placeholder: wire up to your email provider / backend later.
    if (this.email().trim().length > 0) {
      this.signedUp.set(true);
    }
  }
}
