import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { GdprComponent } from './components/gdpr/gdpr.component';
import { SeoService } from './core/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, GdprComponent],
  template: `
    <app-nav />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-gdpr />
  `,
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  constructor() {
    // Set SEO tags on first render (SSR) and on every subsequent navigation.
    this.seo.update(this.stripLeadingSlash(this.router.url));
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.seo.update(this.stripLeadingSlash(e.urlAfterRedirects)));
  }

  private stripLeadingSlash(url: string): string {
    return url.replace(/^\//, '');
  }
}
