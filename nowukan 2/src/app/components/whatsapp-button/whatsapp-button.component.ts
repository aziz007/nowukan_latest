import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  template: `
    <a
      class="whatsapp-fab"
      href="https://wa.me/447462208206?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20nowUKan"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with nowUKan on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          fill="#fff"
          d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.23.6 4.32 1.65 6.12L4 29l8.03-1.6a12.9 12.9 0 0 0 3.99.63h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 22c-1.28 0-2.55-.25-3.72-.72l-.27-.11-4.78.95.98-4.65-.17-.28a10.03 10.03 0 0 1-1.5-5.17C6.56 9.5 10.87 5.2 16.02 5.2c4.9 0 9.02 4.12 9.02 9.02 0 5.15-4.3 9.45-9.02 9.45v.33z"
        />
        <path
          fill="#fff"
          d="M12.1 9.86c-.24-.53-.5-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.12-1.14 2.72s1.17 3.16 1.33 3.38c.16.22 2.27 3.63 5.6 4.94 2.77 1.09 3.33.88 3.93.82.6-.05 1.94-.79 2.21-1.55.27-.76.27-1.42.19-1.55-.08-.13-.3-.22-.62-.38-.32-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.73.16-.22.32-.85 1.07-1.04 1.29-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.61-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.7-1.76-.98-2.4z"
        />
      </svg>
    </a>
  `,
  styles: [
    `
      .whatsapp-fab {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 60;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: #25d366;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        transition: transform 0.15s ease;
      }
      .whatsapp-fab:hover {
        transform: translateY(-2px) scale(1.04);
      }
      @media (max-width: 480px) {
        .whatsapp-fab {
          width: 52px;
          height: 52px;
          right: 14px;
          bottom: 14px;
        }
      }
    `,
  ],
})
export class WhatsappButtonComponent {}
