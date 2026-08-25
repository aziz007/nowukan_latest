import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Benefits</p>
        <h1 class="section-title">Transform English Language Learning — Without the Subscriptions</h1>
        <p class="sub">
          nowUKan provides an affordable, scalable and inclusive approach to English language
          development and assessment, designed to remove traditional barriers to learning.
        </p>

        <div class="feature-pills benefits-pills">
          <div class="pill"><img class="pill-ico" src="assets/icons/one-time-cost.png" alt="" />One time cost</div>
          <div class="pill"><span class="pill-ico pill-emoji">♾️</span>Lifetime access</div>
          <div class="pill"><img class="pill-ico" src="assets/icons/no-subscription.png" alt="" />No recurring fees</div>
          <div class="pill"><img class="pill-ico" src="assets/icons/works-offline.png" alt="" />Fully offline learning</div>
          <div class="pill"><img class="pill-ico" src="assets/icons/real-world-english.png" alt="" />Real-world content</div>
          <div class="pill"><img class="pill-ico" src="assets/icons/speech-analysis.png" alt="" />On-device speech analysis</div>
          <div class="pill"><img class="pill-ico" src="assets/icons/no-internet.png" alt="" />On-device voice technology</div>
          <div class="pill"><span class="pill-ico pill-emoji">🎯</span>Engaging learning methodology</div>
          <div class="pill"><span class="pill-ico pill-emoji">🔒</span>Zero data mining / monitoring</div>
          <div class="pill"><span class="pill-ico pill-emoji">🚫</span>No adverts to interrupt your learning</div>
        </div>

        <div class="benefit-shot">
          <figure class="step-phone">
            <img src="assets/explain/word-speedometer.png" alt="nowUKan on-device pronunciation scoring screen" />
          </figure>
          <p>
            Powered by OSIE, our Offline Speech Intelligence Engine, nowUKan delivers speech
            feedback directly on the device, helping learners develop pronunciation,
            vocabulary, confidence and practical English skills without relying on a
            continuous internet connection.
          </p>
        </div>

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
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/register" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class BenefitsComponent {}
