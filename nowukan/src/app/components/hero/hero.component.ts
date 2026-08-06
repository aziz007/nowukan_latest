import {
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private timer: ReturnType<typeof setInterval> | null = null;

  /** App screens shown in the hero carousel. */
  readonly screens: string[] = [
    'assets/img/img-6c186ce136.jpeg',
    'assets/img/img-3f2fc6685d.jpeg',
    'assets/img/img-c901a9673e.jpeg',
    'assets/img/img-00ff88a043.jpeg',
    'assets/img/img-5c58b25df4.jpeg',
    'assets/img/img-7e421e52d5.jpeg',
    'assets/img/img-9418e1f160.jpeg',
    'assets/img/img-9870440181.jpeg',
    'assets/img/img-a808eb8bdb.jpeg',
    'assets/img/img-c8fe49600d.jpeg',
    'assets/img/img-e7e4126667.jpeg',
    'assets/img/img-ea85a54cf2.jpeg',
    'assets/img/img-fff9631df7.jpeg',
  ];

  readonly active = signal(0);

  ngOnInit(): void {
    // Only auto-rotate in the browser (not during SSR/prerender).
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => this.next(), 2600);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.screens.length);
  }

  go(i: number): void {
    this.active.set(i);
  }

  /** Position of a card relative to the active one: 0 = front, 1 = right, 2 = back. */
  slot(i: number): number {
    const n = this.screens.length;
    return (i - this.active() + n) % n;
  }
}
