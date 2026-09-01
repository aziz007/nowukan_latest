import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Benefits</p>
          <h1 class="section-title">Transform English Language Learning — Without the Subscriptions</h1>
          <p class="sub">
            nowUKan provides an affordable, scalable and inclusive approach to English language
            development and assessment, designed to remove traditional barriers to learning.
          </p>

          <div class="feature-pills benefits-pills benefits-pills-5">
            <div class="pill"><span class="pill-ico pill-tick">✓</span>One time cost</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>Lifetime access</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>No recurring fees</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>Fully offline learning</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>Real-world content</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>On-device speech analysis</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>On-device voice technology</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>Engaging learning methodology</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>Zero data mining / monitoring</div>
            <div class="pill"><span class="pill-ico pill-tick">✓</span>No adverts to interrupt your learning</div>
          </div>

          <p>
            Powered by OSIE, our Offline Speech Intelligence Engine, nowUKan delivers speech
            feedback directly on the device, helping learners develop pronunciation,
            vocabulary, confidence and practical English skills without relying on a
            continuous internet connection.
          </p>

          <h3>Real-World Impact</h3>
          <p>
            Designed for governments, NGOs, educational institutions, employers and individual
            learners, nowUKan makes it possible to reach more people within existing budgets.
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

        <div class="journey-visual">
          <figure class="brochure-cover">
            <img src="assets/explain/osie-panel.jpg" alt="nowUKan OSIE — Offline Speech Intelligence Engine features" />
          </figure>
        </div>
      </div>
    </section>
  `,
})
export class BenefitsComponent {}
