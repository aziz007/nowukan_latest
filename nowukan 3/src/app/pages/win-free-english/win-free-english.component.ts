import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-win-free-english',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './win-free-english.component.html',
})
export class WinFreeEnglishComponent {
  private readonly fb = new FormBuilder();

  /** Timestamp the form was rendered — used as a simple bot time-trap. */
  private readonly renderedAt = Date.now();

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    schoolName: ['', Validators.required],
    schoolWebsite: [''],
    studentCount: [''],
    country: ['', Validators.required],
    role: ['', Validators.required],
    schoolType: ['', Validators.required],
    // Honeypot — must stay empty. Real users never see or fill this field.
    website2: [''],
  });

  readonly attemptedSubmit = signal(false);
  readonly submitted = signal(false);
  readonly submitting = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly roles = ['Student', 'Faculty Member'];
  readonly schoolTypes = ['Primary', 'Secondary', 'College', 'University', 'Other'];

  async submit(): Promise<void> {
    this.attemptedSubmit.set(true);
    this.errorMessage.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const honeypotFilled = !!this.form.value.website2;
    const submittedTooFast = Date.now() - this.renderedAt < 3000;

    if (honeypotFilled || submittedTooFast) {
      this.submitted.set(true);
      this.form.reset();
      return;
    }

    // Emailed to info@nowukan.io by the server (/api/competition-entry).
    const { website2, ...entry } = this.form.value;
    this.submitting.set(true);
    try {
      const response = await fetch('/api/competition-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        this.submitted.set(true);
        this.form.reset();
      } else {
        this.errorMessage.set(data.error || 'We could not submit your entry. Please try again.');
      }
    } catch {
      this.errorMessage.set('We could not reach the server. Please check your connection and try again.');
    } finally {
      this.submitting.set(false);
    }
  }
}
