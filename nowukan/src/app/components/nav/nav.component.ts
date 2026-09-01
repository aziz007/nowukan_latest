import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  private readonly router = inject(Router);

  /** Controls the full hamburger menu drawer. */
  readonly drawerOpen = signal(false);

  constructor() {
    // Always close the menu when navigation completes
    this.router.events
      .pipe(
        filter(
          (e): e is NavigationEnd =>
            e instanceof NavigationEnd
        )
      )
      .subscribe(() => this.drawerOpen.set(false));
  }

  toggleDrawer(): void {
    this.drawerOpen.update((v) => !v);
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
  }
}