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

  /** Which form this is — names the email subject: 'contact' | 'consultation' | 'pilot'. */
  @Input() formType: 'contact' | 'consultation' | 'pilot' = 'contact';

  /** Optional topic pre-selected when the form loads. */
  @Input() set defaultTopic(value: string) {
    this.initialTopic = value || '';
    if (value) this.form.controls.topic.setValue(value);
  }
  private initialTopic = '';

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
  readonly sending = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly topics = [
    'Educational Enquiry',
    'School Pilot Programme',
    'Government / NGO',
    'eLearning / EdTech',
    'Marketing / Influencer',
    'General Enquiry',
    'Technical Support',
    'Partnership / Collaboration',
    'Agent & Referral Scheme',
    'Other',
  ];

  async submit(): Promise<void> {
    this.attemptedSubmit.set(true);
    this.errorMessage.set(null);

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

    // Emailed to info@nowukan.io by the server (/api/enquiry in server.ts).
    const { name, email, location, company, website, topic, message } = this.form.value;
    this.sending.set(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: this.formType, name, email, location, company, website, topic, message }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        this.submitted.set(true);
        this.attemptedSubmit.set(false);
        this.form.reset({ topic: this.initialTopic });
      } else {
        this.errorMessage.set(data.error || 'We could not send your message. Please try again, or email info@nowukan.io.');
      }
    } catch {
      this.errorMessage.set('We could not send your message. Please try again, or email info@nowukan.io.');
    } finally {
      this.sending.set(false);
    }
  }
}
