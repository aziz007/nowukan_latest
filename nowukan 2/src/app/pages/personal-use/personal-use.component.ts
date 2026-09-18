import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personal-use',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Programmes</p>
        <h1 class="section-title">Personal Use</h1>

        <p class="sub">
          Whether you are learning English for work, travel, education or everyday life,
          nowUKan provides an affordable and flexible way to develop your language skills.
        </p>

        <p>
          Learn at your own pace, practise pronunciation, build vocabulary and improve your
          confidence, without the cost of an ongoing subscription.
        </p>

        <div class="feature-pills benefits-pills">
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>One time cost</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>Lifetime access</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>No recurring fees</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>Fully offline learning</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>Real-world content</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>On-device speech analysis</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>On-device voice technology</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>Engaging learning methodology</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>Zero data mining / monitoring</div>
          <div class="pill"><span class="pill-ico pill-tick-plain">✓</span>No adverts to interrupt your learning</div>
        </div>

        <p class="note"><strong>Start your journey with nowUKan today.</strong></p>

        <ul class="collab-list">
          <li>✅ Better Career Opportunities</li>
          <li>✅ Access to International Education</li>
          <li>✅ Greater Language Confidence</li>
          <li>✅ Improved Communication</li>
          <li>✅ Global Opportunities</li>
          <li>✅ Greater Independence</li>
        </ul>

        <p class="note"><strong>Start your free trial and begin your journey today.</strong></p>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/register" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class PersonalUseComponent {}
