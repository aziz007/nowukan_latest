import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TICK_SVG = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="58" cy="62" r="50" fill="none" stroke="#2CB24A" stroke-width="7"/>
  <path d="M30 66 L52 86 L98 18" fill="none" stroke="#2CB24A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose prose-wide">
        <p class="eyebrow">Enterprise</p>
        <h1 class="section-title">English Language Development at Scale</h1>

        <p class="sub">Need to provide English language development to a large number of users?</p>

        <p>
          Our Enterprise Programme gives organisations a simple, cost-effective way to provide
          English language development and assessment at scale, without the complexity or
          ongoing cost of traditional subscription-based solutions.
        </p>
        <p>
          Organisations purchase prepaid user licences in volume and can distribute them across
          employees, students, schools, universities, communities, partner organisations or
          wider networks.
        </p>
        <p>
          Whether you're supporting a workforce, delivering an education or training programme,
          widening access within a community, or operating across multiple locations, nowUKan
          provides the flexibility to deploy English language support wherever it is needed.
        </p>

        <div class="feature-pills benefits-pills benefits-pills-5">
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>High Volume</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Prepaid Licences</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Easy Distribution</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Cost Effective</div>
          <div class="pill"><span class="pill-ico pill-tick">${TICK_SVG}</span>Scalable</div>
        </div>

        <h3>A Simple Way to Scale Access</h3>
        <p>The Enterprise Programme helps organisations:</p>
        <ul>
          <li>Provide English language development and assessment to large user groups</li>
          <li>Distribute licences across teams, departments, schools, programmes or partner networks</li>
          <li>Add users as your requirements change or your programme grows</li>
          <li>Keep expenditure predictable with fixed, transparent pricing</li>
          <li>Support learners across multiple locations and communities, including rural and underserved areas</li>
          <li>Bring language development and assessment together in one accessible platform</li>
          <li>Avoid the administration of managing individual learner subscriptions</li>
        </ul>

        <p>
          Whether you need licences for hundreds, thousands or millions of users, our team will
          work with you to understand your objectives and requirements, then recommend a
          solution that provides the right combination of scale, access and value.
        </p>

        <h3>Designed for Impact &amp; Scalability</h3>
        <p>
          nowUKan Enterprise is suited to organisations looking to make a meaningful difference
          at scale, from national education and workforce programmes to community initiatives,
          integration projects and large-scale training.
        </p>
        <p>
          Its offline capability also makes nowUKan particularly valuable in rural, remote and
          underserved communities where reliable internet access may be limited.
        </p>
        <p>
          Learners can access essential language development and assessment without requiring
          constant connectivity.
        </p>

        <p class="note"><strong>One organisation. Thousands of learners. One simple solution.</strong></p>

        <p>
          Explore the Enterprise Programme to discover how nowUKan can help you extend access to
          high-quality English language development and assessment, simply, affordably and at
          scale.
        </p>

        <p class="note"><strong>Note:</strong> Minimum order requirements apply to the Enterprise Programme.</p>

        <div class="btn-row">
          <a routerLink="/book-a-consultation" class="btn btn-benefits">Book A Consultation</a>
          <a routerLink="/collaborate" class="btn btn-benefits">Collaborate With Us</a>
        </div>
      </div>
    </section>
  `,
})
export class EnterpriseComponent {}
