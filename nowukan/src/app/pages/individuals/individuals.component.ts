import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-individuals',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
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

        <p class="note"><strong>Start your journey with nowUKan today.</strong></p>

        <ul class="collab-list">
          <li>✅ Better Career Opportunities</li>
          <li>✅ Access to International Education</li>
          <li>✅ Greater Language Confidence</li>
          <li>✅ Improved Communication</li>
          <li>✅ Global Opportunities</li>
          <li>✅ Greater Independence</li>
        </ul>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/register" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class IndividualsComponent {}
