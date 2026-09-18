import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

/** Ensures the two password fields match. */
function passwordsMatchValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirm = group.get('password_confirmation')?.value;
    return password && confirm && password !== confirm ? { passwordMismatch: true } : null;
  };
}

/** nowUKan requires users to be 14 or over (see Terms & Conditions, section 4). */
function minimumAgeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === '' || value === undefined) return null;
    return Number(value) < 14 ? { tooYoung: true } : null;
  };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private readonly fb = new FormBuilder();

  /** Timestamp the form was rendered — used as a simple bot time-trap. */
  private readonly renderedAt = Date.now();

  readonly form = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
      contact: [''],
      location: [''],
      age: ['', minimumAgeValidator()],
      agreeTerms: [false, Validators.requiredTrue],
      // Honeypot — must stay empty. Real users never see or fill this field.
      website2: [''],
    },
    { validators: passwordsMatchValidator() },
  );

  readonly attemptedSubmit = signal(false);
  readonly submitting = signal(false);
  readonly submitted = signal(false);
  readonly errorMessage = signal<string | null>(null);

  async submit(): Promise<void> {
    this.attemptedSubmit.set(true);
    this.errorMessage.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // --- Spam checks --------------------------------------------------
    const honeypotFilled = !!this.form.value.website2;
    const submittedTooFast = Date.now() - this.renderedAt < 3000;

    if (honeypotFilled || submittedTooFast) {
      // Silently "succeed" without sending, so bots get no signal that
      // they were caught while real submissions are unaffected.
      this.submitted.set(true);
      this.form.reset();
      return;
    }

    const { firstName, lastName, email, password, password_confirmation, contact, location, age } =
      this.form.value;

    this.submitting.set(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          password_confirmation,
          contact: contact || null,
          location: location || null,
          age: age || null,
        }),
      });

      if (response.ok) {
        this.submitted.set(true);
        this.form.reset();
        return;
      }

      const data = await response.json().catch(() => ({}));
      const specificMessage = this.extractErrorMessage(data);

      if (response.status === 422) {
        this.errorMessage.set(
          specificMessage ||
            'That email address is already registered. Try logging in instead, or use a different email.',
        );
      } else {
        this.errorMessage.set(
          specificMessage || `Something went wrong creating your account (status ${response.status}). Please try again.`,
        );
      }
    } catch {
      this.errorMessage.set(
        'Unable to reach the registration service right now. Please try again shortly.',
      );
    } finally {
      this.submitting.set(false);
    }
  }

  /** Handles a few common API error shapes: {message}, {error}, {errors: {field: [msg]}}. */
  private extractErrorMessage(data: any): string | null {
    if (!data) return null;
    if (typeof data.message === 'string') return data.message;
    if (typeof data.error === 'string') return data.error;
    if (data.errors && typeof data.errors === 'object') {
      const messages = Object.values(data.errors).flat();
      if (messages.length) return messages.join(' ');
    }
    return null;
  }
}
