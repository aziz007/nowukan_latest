import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './enquiry-form.component.html',
})
export class EnquiryFormComponent {
  /** Shown above the form; lets each page frame the request appropriately. */
  @Input() heading = 'Send Us A Message';

  /** Message shown after a successful (non-spam) submission. */
  @Input() successMessage =
    "Thanks — your enquiry has been received. We'll be in touch shortly.";

  private readonly fb = new FormBuilder();

  /** Timestamp the form was rendered — used as a simple bot time-trap. */
  private readonly renderedAt = Date.now();

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    location: ['', Validators.required],
    company: [''],
    website: [''],
    topic: ['', Validators.required],
    message: [''],
    // Honeypot — must stay empty. Real users never see or fill this field.
    website2: [''],
  });

  readonly submitted = signal(false);
  readonly attemptedSubmit = signal(false);

  readonly topics = [
    'Educational Enquiry',
    'Government / NGO',
    'eLearning / EdTech',
    'Marketing / Influencer',
    'General Enquiry',
    'Technical Support',
    'Partnership / Collaboration',
    'Agent & Referral Scheme',
    'Other',
  ];

  submit(): void {
    this.attemptedSubmit.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // --- Spam checks --------------------------------------------------
    // 1) Honeypot: a hidden field real visitors never see or fill.
    const honeypotFilled = !!this.form.value.website2;
    // 2) Time-trap: genuine visitors take at least a few seconds to fill
    //    the form; scripted bots typically submit near-instantly.
    const submittedTooFast = Date.now() - this.renderedAt < 3000;

    if (honeypotFilled || submittedTooFast) {
      // Silently "succeed" without sending, so bots get no signal that
      // they were caught while real submissions are unaffected.
      this.submitted.set(true);
      this.form.reset();
      return;
    }

    // Placeholder: wire this up to your email provider / backend
    // (e.g. a serverless function or form-handling service) to actually
    // deliver the enquiry. Angular alone can't send email from a static
    // SSR build.
    this.submitted.set(true);
    this.form.reset();
  }
}
