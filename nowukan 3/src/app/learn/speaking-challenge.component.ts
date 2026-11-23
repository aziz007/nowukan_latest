import { Component, Input, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * "Can you say it?" — a QuickFire-style speaking prompt for topic pages.
 * Shows one phrase at a time to say aloud. "Hear it" uses the browser's own
 * British English voice (no recording, no upload, nothing leaves the device).
 * Real scoring and feedback happen in the app, which is where the CTA leads.
 */
@Component({
  selector: 'app-speaking-challenge',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="say-it" aria-labelledby="say-it-title">
      <p class="eyebrow">Speaking Challenge</p>
      <h2 id="say-it-title">Can you say it?</h2>
      @if (!done()) {
        <p class="say-it-step">Phrase {{ index() + 1 }} of {{ phrases.length }}: say it aloud, clearly and at a natural speed.</p>
        <p class="say-it-phrase" aria-live="polite">“{{ phrases[index()] }}”</p>
        <div class="btn-row">
          @if (canSpeak) {
            <button type="button" class="btn" (click)="hear()">Hear it</button>
          }
          <button type="button" class="btn btn-primary" (click)="next()">
            {{ index() + 1 < phrases.length ? 'I said it — next phrase' : 'I said it — finish' }}
          </button>
        </div>
      } @else {
        <p class="say-it-phrase">Well done. Now find out how you really sounded.</p>
        <p>
          In the nowUKan app, every word you say is analysed on your device and scored sound by sound,
          so you know exactly what to improve. It works offline, with one payment and no subscription.
        </p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-gold">Start Your Free 7-Day Trial</a>
          <button type="button" class="btn" (click)="restart()">Try again</button>
        </div>
      }
    </section>
  `,
})
export class SpeakingChallengeComponent {
  @Input({ required: true }) phrases: string[] = [];
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly canSpeak = this.isBrowser && typeof window !== 'undefined' && 'speechSynthesis' in window;
  readonly index = signal(0);
  readonly done = signal(false);

  hear(): void {
    if (!this.canSpeak) return;
    const u = new SpeechSynthesisUtterance(this.phrases[this.index()]);
    u.lang = 'en-GB';
    u.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }
  next(): void {
    if (this.index() + 1 < this.phrases.length) this.index.update((i) => i + 1);
    else this.done.set(true);
  }
  restart(): void {
    this.index.set(0);
    this.done.set(false);
  }
}
