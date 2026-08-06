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
    { id: 'K1', img: 'assets/journey/K1.jpg', title: 'Home Dashboard' },
    { id: 'K2', img: 'assets/journey/K2.jpg', title: 'Topic Selection' },
    { id: 'K4', img: 'assets/journey/K4.jpg', title: 'Words' },
    { id: 'A1', img: 'assets/journey/A1.jpg', title: 'Phrases' },
    { id: 'A2', img: 'assets/journey/A2.jpg', title: 'Dialogue' },
    { id: 'A3', img: 'assets/journey/A3.jpg', title: 'QuickFire' },
    { id: 'A4', img: 'assets/journey/A4.jpg', title: 'Swing-o-meter' },
    { id: 'T1', img: 'assets/journey/T1.jpg', title: 'ASA Analysis' },
    { id: 'T2', img: 'assets/journey/T2.jpg', title: 'Speech Feedback' },
    { id: 'T3', img: 'assets/journey/T3.jpg', title: 'Progress' },
    { id: 'T4', img: 'assets/journey/T4.jpg', title: 'Level Completed' },
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
