import { Component } from '@angular/core';
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

      <div class="container video-grid">
        @for (video of videos; track video.youtubeId) {
          <div class="video-card">
            <div class="video-embed">
              <iframe
                [src]="embedUrl(video.youtubeId)"
                title="{{ video.title }}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <h3>{{ video.title }}</h3>
            <p>{{ video.description }}</p>
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
  private readonly sanitizer = new DomSanitizer();

  /**
   * PLACEHOLDER video list — replace youtubeId, title and description for
   * each with the real videos before this page goes live. Add or remove
   * entries freely; the grid lays out any number of cards.
   */
  readonly videos: VideoEntry[] = [
    { title: 'Video title 1', description: 'Short description of this video.', youtubeId: 'REPLACE_ME_1' },
    { title: 'Video title 2', description: 'Short description of this video.', youtubeId: 'REPLACE_ME_2' },
    { title: 'Video title 3', description: 'Short description of this video.', youtubeId: 'REPLACE_ME_3' },
    { title: 'Video title 4', description: 'Short description of this video.', youtubeId: 'REPLACE_ME_4' },
    { title: 'Video title 5', description: 'Short description of this video.', youtubeId: 'REPLACE_ME_5' },
    { title: 'Video title 6', description: 'Short description of this video.', youtubeId: 'REPLACE_ME_6' },
  ];

  embedUrl(youtubeId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${youtubeId}`,
    );
  }
}
