import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Hero with the product video.
 *
 * Page-speed rules followed here:
 *  - The server-rendered HTML contains only a ~10 KB poster image, so the hero
 *    paints immediately. The <video> has no sources in the HTML.
 *  - Video sources are attached only in the browser, after the page's `load`
 *    event and once the browser is idle — the video never competes with the
 *    page's own CSS, JS, fonts or images.
 *  - Phones get a smaller file (540×960) than desktops (720×1280).
 *  - Browsers that support AV1 (Chrome, Edge, Firefox, newer Safari) get the
 *    WebM/AV1 file (~40% smaller); all others fall back to MP4 (H.264).
 *  - Visitors with "reduced motion" or "data saver" turned on only see the poster.
 *  - The video pauses when scrolled off-screen, to save battery and CPU.
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');
  private readonly destroyRef = inject(DestroyRef);

  readonly playing = signal(false);
  readonly muted = signal(true);

  constructor() {
    afterNextRender(() => this.scheduleVideo());
  }

  toggleSound(): void {
    const video = this.videoRef()?.nativeElement;
    if (!video) return;
    video.muted = !video.muted;
    this.muted.set(video.muted);
    if (!video.muted) video.play().catch(() => {});
  }

  private scheduleVideo(): void {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData;
    if (reduceMotion || saveData) return; // poster only

    const start = () => {
      const idle = (window as Window & { requestIdleCallback?: typeof requestIdleCallback })
        .requestIdleCallback;
      if (idle) idle(() => this.startVideo(), { timeout: 2500 });
      else setTimeout(() => this.startVideo(), 300);
    };

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
  }

  private startVideo(): void {
    const video = this.videoRef()?.nativeElement;
    if (!video) return;

    const small = window.innerWidth <= 760;
    const size = small ? '960' : '1280';
    for (const [src, type] of [
      [`assets/video/hero-${size}.webm`, 'video/webm; codecs="av01.0.05M.08, opus"'],
      [`assets/video/hero-${size}.mp4`, 'video/mp4; codecs="avc1.640028, mp4a.40.2"'],
    ]) {
      const source = document.createElement('source');
      source.src = src;
      source.type = type;
      video.appendChild(source);
    }

    video.muted = true; // required by browsers for autoplay
    video.preload = 'auto';
    video.addEventListener('playing', () => this.playing.set(true), { once: true });
    video.load();

    // Play only while the hero is visible.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    this.destroyRef.onDestroy(() => {
      observer.disconnect();
      video.pause();
      video.removeAttribute('src');
      video.querySelectorAll('source').forEach((s) => s.remove());
      video.load();
    });
  }
}
