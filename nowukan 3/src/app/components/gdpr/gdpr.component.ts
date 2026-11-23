import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../core/analytics.service';

@Component({
  selector: 'app-gdpr',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gdpr.component.html',
})
export class GdprComponent implements OnInit {
  private readonly analytics = inject(AnalyticsService);

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Shown only in the browser, and only until the visitor accepts (remembered). */
  readonly visible = signal(false);

  ngOnInit(): void {
    if (!this.isBrowser) return;
    if (this.analytics.hasConsent()) {
      this.analytics.start();
    } else {
      this.visible.set(true);
    }
  }

  accept(): void {
    this.visible.set(false);
    this.analytics.grantConsent();
  }
}
