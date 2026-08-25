import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container prose">
        <p class="eyebrow">Challenge</p>
        <h1 class="section-title">Ready to Put Your English Skills to the Test?</h1>

        <p class="sub">
          Our nowUKan Challenge section lets you test your vocabulary, pronunciation,
          understanding and language retention through a quick, engaging and fun activity with
          friends, family or classmates.
        </p>

        <p>
          Connect with another user via Bluetooth or Wi-Fi, choose your challenge and compete
          head-to-head.
        </p>
        <p>
          The Challenge compares your performance to determine who demonstrates the stronger
          pronunciation, understanding and English language skills.
        </p>
        <p>And, of course, there is a virtual winner's trophy waiting for the winner!</p>

        <p class="note"><strong>Learn. Practise. Challenge. Improve.</strong></p>

        <p class="note">
          <strong>Note:</strong> Both participants must have the nowUKan App installed and be
          using either the free trial or a paid account.
        </p>

        <div class="btn-row">
          <a routerLink="/register" class="btn btn-gold">Register Now</a>
          <a routerLink="/register" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </section>
  `,
})
export class ChallengeComponent {}
