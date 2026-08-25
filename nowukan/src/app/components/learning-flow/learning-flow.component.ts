import {
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface JourneyScreen {
  id: string;
  img: string;
  title: string;
}

@Component({
  selector: 'app-learning-flow',
  standalone: true,
  templateUrl: './learning-flow.component.html',
})
export class LearningFlowComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private timer: ReturnType<typeof setInterval> | null = null;

  /**
   * Screens in the required order: K1–K4, A1–A4, T1–T4.
   * Swap the images in src/assets/journey/ (same filenames) to use real UI.
   */
  readonly screens: JourneyScreen[] = [
    { id: 's1', img: 'assets/journey/K2.png', title: 'Junior' },
    { id: 's2', img: 'assets/journey/A1.png', title: 'Skilled' },
    { id: 's3', img: 'assets/journey/T1.png', title: 'Advanced' },
  ];

  readonly active = signal(0);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => this.next(), 2800);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.screens.length);
  }

  prev(): void {
    this.active.update((i) => (i - 1 + this.screens.length) % this.screens.length);
  }

  go(i: number): void {
    this.active.set(i);
  }

  /** Signed offset of card i from the active card, in range [-n/2, n/2]. */
  offset(i: number): number {
    const n = this.screens.length;
    let d = i - this.active();
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  }

  /** Absolute offset — used by CSS for depth/scale/opacity. */
  absOffset(i: number): number {
    return Math.abs(this.offset(i));
  }
}
