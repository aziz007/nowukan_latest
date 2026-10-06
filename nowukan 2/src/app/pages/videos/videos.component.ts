import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoEntry {
  title: string;
  description: string;
  /** YouTube video ID only — e.g. 'dQw4w9WgXcQ' from youtube.com/watch?v=dQw4w9WgXcQ */
  youtubeId: string;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Videos</p>
        <h1 class="section-title">See nowUKan In Action</h1>
        <p class="sub">
          Watch how nowUKan works, hear from learners and partners, and see the app up close
          before you get started.
        </p>
      </div>

      <div class="container video-grid video-grid-shorts">
        @for (video of videos; track video.youtubeId) {
          <div class="video-card" [class.video-card-plain]="!video.title && !video.description">
            <div class="video-embed">
              <iframe
                [src]="embedUrl(video.youtubeId)"
                [title]="video.title || 'nowUKan video ' + ($index + 1)"
                loading="lazy"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            @if (video.title) {
              <h3>{{ video.title }}</h3>
            }
            @if (video.description) {
              <p>{{ video.description }}</p>
            }
          </div>
        }
      </div>

      <div class="container prose prose-wide">
        <div class="btn-row">
          <a routerLink="/journey" class="btn btn-primary">See The Learning Journey</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class VideosComponent {
  private readonly sanitizer = inject(DomSanitizer);

  /**
   * nowUKan YouTube Shorts (youtube.com/@nowUKan).
   * youtubeId = the code after /shorts/ in the link.
   * title / description are optional: leave them '' to show just the video,
   * or fill them in to show a caption under it.
   */
  readonly videos: VideoEntry[] = [
    { title: '', description: '', youtubeId: 'ifFGskcYLps' },
    { title: '', description: '', youtubeId: '82DEPWo14R0' },
    { title: '', description: '', youtubeId: 'Znmv3QAII8w' },
    { title: '', description: '', youtubeId: 'UbOxIUUhTEY' },
    { title: '', description: '', youtubeId: 'FwYuuCE7Gb0' },
    { title: '', description: '', youtubeId: 'ppLWEufjOXA' },
  ];

  embedUrl(youtubeId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${youtubeId}`,
    );
  }
}
