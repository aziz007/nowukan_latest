import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-helpful-tips',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-shell">
      <div class="container journey-layout">
        <div class="journey-copy prose">
          <p class="eyebrow">Helpful Tips</p>
          <h1 class="section-title">Helpful Tips &amp; Advice</h1>

          <p class="sub">
            We all learn differently and at our own pace, so one approach will never suit
            everyone.
          </p>
          <p>
            There are many ways to enhance and reinforce your language learning, but remember,
            practice makes perfect.
          </p>
          <p>
            Below are 16 helpful tips to support your English-language development, which we
            hope you will find useful. You can also access these tips directly in the Accounts
            section of the nowUKan App.
          </p>

          <ol class="tips-list">
            <li>Dedicate a little time every day to practice on your own.</li>
            <li>Challenge yourself and step out of your comfort zone.</li>
            <li>Don't feel anxious if you get things wrong.</li>
            <li>Practice new words and phrases often.</li>
            <li>Record yourself speaking and listen how you sound.</li>
            <li>Practice with your friends and family.</li>
            <li>Connect with a native speaker if possible.</li>
            <li>Try and have small regular conversations in English.</li>
            <li>Create a vocabulary book of useful words and phrases.</li>
            <li>Practice the sounds of English often.</li>
            <li>Using a bi-lingual dictionary can also be helpful.</li>
            <li>Watch television and films in English.</li>
            <li>Listen to British and American music.</li>
            <li>Listen to some English podcasts that interest you.</li>
            <li>Find an App that works for you.</li>
            <li>Have fun and enjoy the experience.</li>
          </ol>

          <p>
            If you're using or planning to use the nowUKan App, why not challenge a friend or
            family member to an English pronunciation competition and see who gets the virtual
            winner's trophy? It's a fun way to learn!
          </p>

          <div class="btn-row">
            <a routerLink="/download" class="btn btn-benefits">Free Trial</a>
            <a routerLink="/register" class="btn btn-primary">Buy Now</a>
            <a routerLink="/" class="btn btn-benefits">Back to Home</a>
          </div>
        </div>

        <div class="journey-visual">
          <div class="icon-badge-panel">
            <span class="icon-badge-ico">💡</span>
            <span class="icon-badge-label">16 Tips To<br />Learn Faster</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HelpfulTipsComponent {}
