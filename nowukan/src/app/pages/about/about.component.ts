import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">About</p>
          <h1 class="section-title">Where Innovation Meets Excellence</h1>

          <p class="sub">
            We are a dynamic team of visionaries, creators and innovators, united by a shared
            passion for transforming ideas into impactful solutions that make a real difference.
          </p>

          <p>
            Our dedicated team is committed to making language learning and assessment simpler,
            more affordable, scalable and accessible to people around the world.
          </p>
          <p>
            We develop our technology and content in-house, giving us greater control over the
            quality, security, reliability and continued development of our solutions.
          </p>
          <p>
            By not relying on third-party technology, we can respond quickly to changing needs,
            continuously innovate and maintain a consistent experience for our partners and end
            users.
          </p>
          <p>
            Our aim is simple: to use technology and innovation to remove barriers to language
            development and assessment, making high-quality English language support available
            to more people, wherever they are.
          </p>

          <p class="note"><strong>We're Building the Future of Language Learning.</strong></p>

          <div class="btn-row">
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
            <a routerLink="/register" class="btn btn-benefits">Register Now</a>
            <a routerLink="/register" class="btn btn-benefits">Buy Now</a>
          </div>
        </div>

        <div class="journey-visual">
          <div class="icon-badge-panel">
            <span class="icon-badge-ico">🚀</span>
            <span class="icon-badge-label">Building The<br />Future Of Learning</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
