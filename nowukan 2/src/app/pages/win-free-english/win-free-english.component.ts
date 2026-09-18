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

  readonly roles = ['Student', 'Faculty Member'];
  readonly schoolTypes = ['Primary', 'Secondary', 'College', 'University', 'Other'];

  submit(): void {
    this.attemptedSubmit.set(true);

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

    // Placeholder: wire this up to your backend / CRM to actually record
    // competition entries. Nothing is sent or stored anywhere yet.
    this.submitted.set(true);
    this.form.reset();
  }
}
