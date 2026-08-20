import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Enterprise</p>
        <h1 class="section-title">English Language Development at Scale</h1>

        <p class="sub">
          Designed for organisations that need to provide English language development and
          assessment to large numbers of learners, nowUKan Enterprise offers high-volume
          prepaid user licences that can be purchased and distributed across your organisation
          or wider network.
        </p>

        <p>
          Ideal for governments, NGOs, businesses, educational institutions and large-scale
          programmes, our Enterprise Scheme provides a simple and extremely cost-effective way
          to extend access to English language learning and assessment.
        </p>

        <p class="note"><strong>Buy. Distribute. Empower.</strong></p>

        <p>
          Purchase prepaid user licences in volume and distribute them across your employees,
          students, colleagues, schools, universities, communities or wider network.
        </p>
        <p>
          With a scalable and affordable approach, nowUKan Enterprise provides a fixed,
          transparent cost that does not change, helping organisations plan their budgets with
          confidence while reaching more learners.
        </p>

        <div class="feature-pills benefits-pills">
          <div class="pill"><span class="pill-ico pill-emoji">🏢</span>High Volume</div>
          <div class="pill"><img class="pill-ico" src="assets/icons/one-time-cost.png" alt="" />Prepaid Licences</div>
          <div class="pill"><span class="pill-ico pill-emoji">📦</span>Easy Distribution</div>
          <div class="pill"><span class="pill-ico pill-emoji">💰</span>Cost Effective</div>
          <div class="pill"><span class="pill-ico pill-emoji">🌍</span>Scalable</div>
        </div>

        <h3>Built for Large-Scale Impact</h3>
        <p>
          Whether you are supporting a national education programme, developing your workforce,
          helping communities integrate, or providing English language training across your
          organisation, nowUKan Enterprise gives you the flexibility to reach the people who
          need it most.
        </p>
        <p>
          Our offline capability makes nowUKan particularly well suited to rural, remote and
          underserved communities, where reliable internet access may be limited.
        </p>

        <p class="note"><strong>One organisation. Thousands of learners. One simple solution.</strong></p>

        <p>
          To discuss our Enterprise programme, arrange a video call with a senior member of our
          team.
        </p>
        <p>
          We will take the time to understand your requirements, help you launch a trial
          programme, and recommend the most suitable and cost-effective package for your
          organisation.
        </p>

        <p class="note"><strong>Note:</strong> minimum order requirements apply to the Enterprise programme.</p>

        <div class="btn-row">
          <a routerLink="/book-a-consultation" class="btn btn-dark">Book A Consultation</a>
          <a routerLink="/collaborate" class="btn btn-dark">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class EnterpriseComponent {}
