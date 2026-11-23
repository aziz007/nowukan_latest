import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SORTED_POSTS } from '../../blog/blog-posts';

/** Shown for any unknown address. The server sends it with HTTP status 404 (see app.routes.server.ts). */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Error 404</p>
        <h1 class="section-title">Sorry, we can't find that page</h1>
        <p class="sub">The page may have moved, or the address may be mistyped. Here are some useful places to go next:</p>
        <div class="btn-row">
          <a routerLink="/" class="btn btn-primary">Home</a>
          <a routerLink="/download" class="btn btn-gold">Free 7-Day Trial</a>
          <a routerLink="/faqs" class="btn">FAQs</a>
          <a routerLink="/contact" class="btn">Contact Us</a>
        </div>
        <h2>Latest from the blog</h2>
        <ul>
          @for (p of latest; track p.slug) {
            <li><a [routerLink]="['/blog', p.slug]">{{ p.title }}</a></li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class NotFoundComponent {
  readonly latest = SORTED_POSTS.slice(0, 4);
}
