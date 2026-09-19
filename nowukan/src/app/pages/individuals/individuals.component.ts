import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TICK_SVG = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="58" cy="62" r="50" fill="none" stroke="#2CB24A" stroke-width="7"/>
  <path d="M30 66 L52 86 L98 18" fill="none" stroke="#2CB24A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

@Component({
  selector: 'app-individuals',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Sectors</p>
        <h1 class="section-title">Individuals</h1>

        <p class="sub">
          Develop your English at your own pace with an affordable solution designed around
          practical language skills, pronunciation, understanding and confidence.
        </p>

        <p>
          With a free trial and exceptionally low-cost, non-recurring pricing, nowUKan makes
          continued learning accessible without the burden of ongoing monthly subscription
          fees. Whether you are learning for education, work, travel or everyday communication,
          nowUKan gives you the tools to continue developing your English.
        </p>

        <div class="feature-pills benefits-pills">
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>One time cost</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Lifetime access</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>No recurring fees</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Fully offline learning</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Real-world content</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>On-device speech analysis</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>On-device voice technology</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Engaging learning methodology</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Zero data mining / monitoring</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>No adverts to interrupt your learning</div>
        </div>

        <p class="note"><strong>Start your journey with nowUKan today.</strong></p>

        <div class="icon-caption-grid">
          <div class="icon-caption-card">
            <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="14" y="38" width="72" height="46" rx="6" fill="none" stroke="var(--gold2)" stroke-width="6"/>
              <path d="M36 38v-8c0-4 3-7 7-7h14c4 0 7 3 7 7v8" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
              <path d="M14 58h72" stroke="var(--gold2)" stroke-width="6"/>
            </svg>
            <small>Better Career Opportunities</small>
          </div>
          <div class="icon-caption-card">
            <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M50 15 90 33 50 51 10 33Z" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
              <path d="M26 40v16c0 7 11 13 24 13s24-6 24-13V40" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
              <path d="M90 33v20" stroke="var(--gold2)" stroke-width="6" stroke-linecap="round"/>
            </svg>
            <small>Access to International Education</small>
          </div>
          <div class="icon-caption-card">
            <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 30h44l16 16v10c0 14-16 28-38 34-22-6-38-20-38-34V38z" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
              <path d="M38 52l8 8 16-18" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <small>Greater Language Confidence</small>
          </div>
          <div class="icon-caption-card">
            <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18 30h40a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H40l-14 12v-12h-8a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8z" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
              <path d="M58 42h24a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8h-4v10l-12-10" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
            </svg>
            <small>Improved Communication</small>
          </div>
          <div class="icon-caption-card">
            <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--gold2)" stroke-width="6"/>
              <path d="M12 50h76M50 12c10 10 16 24 16 38s-6 28-16 38c-10-10-16-24-16-38s6-28 16-38z" fill="none" stroke="var(--gold2)" stroke-width="6"/>
            </svg>
            <small>Global Opportunities</small>
          </div>
          <div class="icon-caption-card">
            <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="50" cy="34" r="14" fill="none" stroke="var(--gold2)" stroke-width="6"/>
              <path d="M50 52c-16 0-28 10-28 22v6h56v-6c0-12-12-22-28-22z" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
              <path d="M68 20l6 6 12-14" fill="none" stroke="#1687FF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <small>Greater Independence</small>
          </div>
        </div>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/register" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class IndividualsComponent {}
