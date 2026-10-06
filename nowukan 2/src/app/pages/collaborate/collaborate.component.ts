import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collaborate',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell page-shell-tight">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Collaborate</p>
          <h1 class="section-title">Collaborate With Us</h1>

          <p class="sub">We welcome collaboration with like-minded professionals worldwide.</p>

          <ul>
            <li>Marketing agencies</li>
            <li>Influencers / KOL's</li>
            <li>Educational professionals</li>
            <li>Teachers and lecturers</li>
            <li>Academic institutions</li>
            <li>Edtech providers</li>
            <li>Training providers / VET</li>
            <li>Government and non-government organisations</li>
            <li>HR and Learning &amp; Development teams</li>
            <li>Policy makers and public-sector bodies</li>
            <li>Journalists and industry publications</li>
          </ul>

          <p>
            Our proprietary technology presents a compelling opportunity to reduce costs while
            generating an additional revenue stream.
          </p>

          <p>You can either:</p>
          <ol>
            <li>Purchase prepaid student licences to resell at your discretion; or</li>
            <li>
              Promote and direct users to our website, where they can register and enjoy a free
              7-day trial.
            </li>
          </ol>

          <p>
            We offer a monthly revenue share for all active paid users — fully traceable and
            transparently reported.
          </p>

          <p>
            <strong>Want more information?</strong> Get in touch and a member of our team will
            contact you to open dialogue.
          </p>
          <p class="note">
            <strong>Note:</strong> By contacting us, you confirm your acceptance of our Terms
            and Privacy Policy.
          </p>

          <div class="btn-row">
            <a routerLink="/book-a-consultation" class="btn btn-benefits">Contact The Team</a>
            <a routerLink="/" class="btn btn-benefits">Back to Home</a>
          </div>
        </div>

        <div class="journey-visual journey-visual-top">
          <figure class="people-cutout">
            <img
              src="assets/img/collaborate-badge.webp"
              alt="Collaborate with us — gold handshake in front of a globe, framed by laurel leaves"
              width="760"
              height="787"
            />
          </figure>
          <div class="collab-visual-panel collab-visual-panel-plain">
            <span class="icon-badge-label">Let's Work <br />Together</span>
            <div class="collab-visual-icons">
              <div class="collab-visual-icon">
                <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20 42v16h9l9 7V35l-9 7z" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
                  <path d="M38 39 L72 26 V74 L38 61" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
                  <path d="M80 42a11 11 0 0 1 0 16" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linecap="round"/>
                </svg>
                <small>Marketing</small>
              </div>
              <div class="collab-visual-icon">
                <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M50 28 L88 46 L50 64 L12 46 Z" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
                  <path d="M28 56 v14c0 6 10 11 22 11s22-5 22-11V56" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round"/>
                  <path d="M88 46 v20" stroke="var(--gold2)" stroke-width="6" stroke-linecap="round"/>
                </svg>
                <small>Education</small>
              </div>
              <div class="collab-visual-icon">
                <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M14 40 L50 20 L86 40" fill="none" stroke="var(--gold2)" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>
                  <path d="M20 40v34M40 40v34M60 40v34M80 40v34" stroke="var(--gold2)" stroke-width="6" stroke-linecap="round"/>
                  <path d="M12 80h76" stroke="var(--gold2)" stroke-width="6" stroke-linecap="round"/>
                </svg>
                <small>Government</small>
              </div>
              <div class="collab-visual-icon">
                <svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="16" y="24" width="68" height="52" rx="5" fill="none" stroke="var(--gold2)" stroke-width="6"/>
                  <path d="M28 40h22M28 52h22M28 64h22M60 40h12M60 52h12" stroke="var(--gold2)" stroke-width="5" stroke-linecap="round"/>
                </svg>
                <small>Media</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CollaborateComponent {}
