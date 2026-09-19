import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gdpr',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gdpr.component.html',
})
export class GdprComponent {
  /** Hidden once the visitor accepts. Starts visible. */
  readonly visible = signal(true);

  accept(): void {
    this.visible.set(false);
  }
}
