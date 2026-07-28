import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <div class="section-title">Our Mission</div>
        <p class="sub">Making real, usable English reachable for every learner, everywhere.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Free Trial</a>
          <a routerLink="/" class="btn btn-dark">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class MissionComponent {}
