import { PAUSED_MESSAGE, SIGNUPS_AND_PAYMENTS_PAUSED } from '../../core/site-switches';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
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

interface AppliedVoucher {
  code: string;
  discountPercentage: number;
  price: number; // pence
}

/**
 * Buy Now: the Register Now form + a voucher code, then Stripe payment.
 * The server checks whether the email is already a (trial) user, creates the
 * account if not, and starts Stripe Checkout. See /api/buy-now in server.ts.
 */
@Component({
  selector: 'app-buy-now',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './buy-now.component.html',
})
export class BuyNowComponent implements OnInit {
  /** Temporary pause — see src/app/core/site-switches.ts */
  readonly paused = SIGNUPS_AND_PAYMENTS_PAUSED;
  readonly pausedMessage = PAUSED_MESSAGE;
  private readonly fb = new FormBuilder();
  private readonly route = inject(ActivatedRoute);

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
  readonly errorMessage = signal<string | null>(null);

  readonly promoInput = signal('');
  readonly promoChecking = signal(false);
  readonly promoError = signal<string | null>(null);
  readonly promo = signal<AppliedVoucher | null>(null);

  ngOnInit(): void {
    // A code applied on the Cart page is carried over (?code=...).
    const code = this.route.snapshot.queryParamMap.get('code');
    if (code && typeof window !== 'undefined') {
      this.promoInput.set(code);
      this.applyPromo();
    }
  }

  formatPence(pence: number): string {
    return pence === 0 ? 'FREE' : `£${(pence / 100).toFixed(2)}`;
  }

  async applyPromo(): Promise<void> {
    const code = this.promoInput().trim();
    this.promoError.set(null);
    if (!code) {
      this.promoError.set('Please enter a voucher code.');
      return;
    }
    this.promoChecking.set(true);
    try {
      const response = await fetch('/api/voucher/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data.valid) {
        this.promo.set({ code: data.code, discountPercentage: data.discountPercentage, price: data.price });
      } else {
        this.promoError.set(data.message || 'This voucher code is not valid.');
      }
    } catch {
      this.promoError.set('We could not check this code right now. Please try again shortly.');
    } finally {
      this.promoChecking.set(false);
    }
  }

  removePromo(): void {
    this.promo.set(null);
    this.promoInput.set('');
    this.promoError.set(null);
  }

  async pay(): Promise<void> {
    if (this.paused) return;
    this.attemptedSubmit.set(true);
    this.errorMessage.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // --- Spam checks (same as Register Now) -----------------------------
    if (this.form.value.website2 || Date.now() - this.renderedAt < 3000) {
      this.errorMessage.set('Please take a moment to check your details, then try again.');
      return;
    }

    const { firstName, lastName, email, password, password_confirmation, contact, location, age } = this.form.value;
    this.submitting.set(true);
    try {
      const response = await fetch('/api/buy-now', {
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
          promoCode: this.promo()?.code || undefined,
        }),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      this.errorMessage.set(
        this.extractErrorMessage(data) || `Something went wrong (status ${response.status}). Please try again.`,
      );
      if (/voucher/i.test(data?.error || '')) this.promo.set(null);
    } catch {
      this.errorMessage.set('Unable to reach our payment service right now. Please try again shortly.');
    } finally {
      this.submitting.set(false);
    }
  }

  /** Handles common API error shapes: {message}, {error}, {errors: {field: [msg]}}. */
  private extractErrorMessage(data: any): string | null {
    if (!data) return null;
    if (typeof data.error === 'string') return data.error;
    if (typeof data.message === 'string') return data.message;
    if (data.errors && typeof data.errors === 'object') {
      const messages = Object.values(data.errors).flat();
      if (messages.length) return messages.join(' ');
    }
    return null;
  }
}
