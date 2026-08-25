import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container">
        <h1 class="section-title">Frequently Asked Questions</h1>
        <p class="sub">Answers to the questions we hear most often.</p>
        <div class="btn-row">
          <a routerLink="/download" class="btn btn-primary">Download the App</a>
          <a routerLink="/" class="btn">Back to Home</a>
        </div>
      </div>
    </section>
  `,
})
export class FaqsComponent {}
