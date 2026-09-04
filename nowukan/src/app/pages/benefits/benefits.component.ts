import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TICK_SVG = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="58" cy="62" r="50" fill="none" stroke="#2CB24A" stroke-width="7"/>
  <path d="M30 66 L52 86 L98 18" fill="none" stroke="#2CB24A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose-wide">
        <div class="prose">
          <p class="eyebrow">Benefits</p>
          <h1 class="section-title">Transform English Language Learning — Without the Subscriptions</h1>
          <p class="sub">
            nowUKan provides an affordable, scalable and inclusive approach to English language
            development and assessment, designed to remove the traditional barriers to learning.
          </p>

          <div class="feature-pills benefits-pills benefits-pills-5">
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

          <p>
            Powered by OSIE, our Offline Speech Intelligence Engine, nowUKan delivers real time
            feedback directly on the device, helping learners recognise areas of weakness, focus
            their practice, and build confidence in their English.
          </p>

          <h3>Real World Impact</h3>
          <p>
            Designed for governments, NGOs, educational institutions, employers and individual
            learners, nowUKan helps reach more people within existing budget constraints, making
            high-quality English development more affordable and accessible.
          </p>
          <p>English language development to support:</p>

          <ul class="collab-list benefits-impact-list">
            <li>Everyday Communication</li>
            <li>Employment &amp; Career Development</li>
            <li>Education &amp; Skills Development</li>
            <li>Workforce &amp; Community Integration</li>
            <li>Social Inclusion &amp; Participation</li>
            <li>Access to Services &amp; Information</li>
            <li>Personal Confidence &amp; Independence</li>
            <li>Migration &amp; Settlement</li>
            <li>Global Communication &amp; Mobility</li>
            <li>Digital &amp; Online Engagement</li>
            <li>Workforce Development &amp; Business Growth</li>
            <li>Community &amp; Economic Development</li>
          </ul>

          <p class="note"><strong>More access. Lower cost. Greater impact.</strong><br />
          nowUKan helps make quality English language development and assessment more accessible
          to everyone.</p>

          <div class="btn-row">
            <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
            <a routerLink="/register" class="btn btn-gold">Register Now</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BenefitsComponent {}
