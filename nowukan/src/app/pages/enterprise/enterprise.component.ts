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

        <p class="sub">Need to provide English language development to a large number of users?</p>

        <p>
          Our Enterprise Programme is designed for organisations that need to provide
          high-quality English language development and assessment to large numbers of
          learners, without the complexity or cost of traditional subscription-based
          solutions.
        </p>
        <p>
          The programme provides high-volume prepaid user licences that organisations can
          distribute across employees, students, schools, universities, communities, partner
          organisations or wider networks.
        </p>
        <p>
          Whether you are supporting a workforce, delivering an education or training
          programme, widening access within a community, or providing English language
          development across multiple locations, nowUKan offers a flexible and scalable
          approach.
        </p>
        <p>
          With fixed, transparent pricing, no recurring monthly subscriptions and scalable
          deployment, organisations can plan their budgets with confidence while extending
          access to more learners.
        </p>

        <div class="feature-pills benefits-pills">
          <div class="pill"><span class="pill-ico pill-emoji">🏢</span>High Volume</div>
          <div class="pill"><img class="pill-ico" src="assets/icons/one-time-cost.png" alt="" />Prepaid Licences</div>
          <div class="pill"><span class="pill-ico pill-emoji">📦</span>Easy Distribution</div>
          <div class="pill"><span class="pill-ico pill-emoji">💰</span>Cost Effective</div>
          <div class="pill"><span class="pill-ico pill-emoji">🌍</span>Scalable</div>
        </div>

        <h3>Our Enterprise Programme Can Help You</h3>
        <ul class="collab-list">
          <li>Provide English language development and assessment to large user groups</li>
          <li>Allocate licences across different teams, departments, schools or programmes</li>
          <li>Scale access as your learner population grows</li>
          <li>Keep costs predictable, fixed and transparent</li>
          <li>Support learners across multiple locations and communities, including rural communities</li>
          <li>Combine language development and assessment within one accessible platform</li>
          <li>Avoid the complexity of managing individual learner subscriptions</li>
        </ul>

        <p>
          Whether you need licences for hundreds, thousands or millions of users, we can work
          with you to understand your requirements and provide a cost-effective and scalable
          solution.
        </p>

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
          Explore our Enterprise Programme and discover how nowUKan can help you make English
          language development more accessible at scale.
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
