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
          Please complete the form below to request a consultation, and a member of our team
          will be in touch to arrange a convenient time.
        </p>

        <app-enquiry-form
          heading="Request A Consultation"
          formType="consultation"
          successMessage="Thanks — your consultation request has been received. We'll be in touch to schedule a time."
        />
        </div>

        <div class="journey-visual">
          <figure class="people-cutout">
            <img src="assets/img/book-consultation.webp" alt="Two people discussing a nowUKan consultation" />
          </figure>
          <div class="icon-badge-label" style="text-align:center">Book Your <br />Consultation</div>
        </div>
      </div>
    </section>
  `,
})
export class BookAConsultationComponent {}
