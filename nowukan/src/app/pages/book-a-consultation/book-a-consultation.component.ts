import { Component } from '@angular/core';
import { EnquiryFormComponent } from '../../components/enquiry-form/enquiry-form.component';

@Component({
  selector: 'app-book-a-consultation',
  standalone: true,
  imports: [EnquiryFormComponent],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
        <p class="eyebrow">Consultation</p>
        <h1 class="section-title">Book A Consultation</h1>

        <p class="sub">
          Would you like to explore how nowUKan could support your organisation, learners or
          programme?
        </p>

        <p>
          Book a video consultation with a senior member of our team to discuss your
          requirements, explore the available options and understand how nowUKan can provide
          the most suitable and cost-effective solution for your needs.
        </p>
        <p>
          Whether you are supporting a small group of learners or providing English language
          development and assessment to hundreds, thousands, or millions of users, we can
          discuss your objectives, answer your questions, and help you find the right approach.
        </p>
        <p>
          Our team can also provide further information about licensing, pricing,
          implementation and large-scale deployment, helping you understand how nowUKan could
          work within your organisation or programme.
        </p>

        <p class="note"><strong>Let's talk about how nowUKan can work for you.</strong></p>

        <p>
          Please complete the form below to request a consultation, or use our Calendly link to
          book a convenient time directly with a member of our team.
        </p>

        <div class="btn-row">
          <!-- TODO: replace with the real Calendly scheduling link -->
          <a href="#" target="_blank" rel="noopener" class="btn btn-dark">Book Via Calendly</a>
        </div>

        <app-enquiry-form
          heading="Request A Consultation"
          successMessage="Thanks — your consultation request has been received. We'll be in touch to schedule a time."
        />
        </div>

        <div class="journey-visual">
          <div class="icon-badge-panel">
            <span class="icon-badge-ico">
              <svg viewBox="0 0 100 100" width="72" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="consultIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6C85F"/>
                    <stop offset="1" stop-color="#D6A536"/>
                  </linearGradient>
                </defs>
                <rect x="16" y="22" width="68" height="60" rx="8" fill="none" stroke="url(#consultIconGrad)" stroke-width="5"/>
                <path d="M16 40h68" stroke="url(#consultIconGrad)" stroke-width="5"/>
                <path d="M32 14v14M68 14v14" stroke="url(#consultIconGrad)" stroke-width="5" stroke-linecap="round"/>
                <circle cx="64" cy="62" r="16" fill="none" stroke="#1687FF" stroke-width="5"/>
                <path d="M64 55v8l6 4" fill="none" stroke="#1687FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="icon-badge-label">Book Your<br />Consultation</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BookAConsultationComponent {}
