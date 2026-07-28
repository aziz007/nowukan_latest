import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'NowUkan — Learn Real English',
  },
  {
    path: 'how-it-works',
    loadComponent: () =>
      import('./pages/how-it-works/how-it-works.component').then((m) => m.HowItWorksComponent),
    title: 'How It Works — NowUkan',
  },
  {
    path: 'journey',
    loadComponent: () =>
      import('./pages/journey/journey.component').then((m) => m.JourneyComponent),
    title: 'Journey — NowUkan',
  },
  {
    path: 'mission',
    loadComponent: () =>
      import('./pages/mission/mission.component').then((m) => m.MissionComponent),
    title: 'Mission — NowUkan',
  },
  {
    path: 'vision',
    loadComponent: () =>
      import('./pages/vision/vision.component').then((m) => m.VisionComponent),
    title: 'Vision — NowUkan',
  },
  {
    path: 'enterprise',
    loadComponent: () =>
      import('./pages/enterprise/enterprise.component').then((m) => m.EnterpriseComponent),
    title: 'Enterprise — NowUkan',
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent),
    title: 'Cart — NowUkan',
  },
  {
    path: 'pronunciation',
    loadComponent: () =>
      import('./pages/pronunciation/pronunciation.component').then((m) => m.PronunciationComponent),
    title: 'Pronunciation — NowUkan',
  },
  {
    path: 'real-life-english',
    loadComponent: () =>
      import('./pages/real-life-english/real-life-english.component').then(
        (m) => m.RealLifeEnglishComponent,
      ),
    title: 'Real-Life English — NowUkan',
  },
  {
    path: 'for-learners',
    loadComponent: () =>
      import('./pages/for-learners/for-learners.component').then((m) => m.ForLearnersComponent),
    title: 'For Learners — NowUkan',
  },
  {
    path: 'for-families',
    loadComponent: () =>
      import('./pages/for-families/for-families.component').then((m) => m.ForFamiliesComponent),
    title: 'For Families — NowUkan',
  },
  {
    path: 'for-institutions',
    loadComponent: () =>
      import('./pages/for-institutions/for-institutions.component').then(
        (m) => m.ForInstitutionsComponent,
      ),
    title: 'For Institutions — NowUkan',
  },
  {
    path: 'institutions/pilot-programme',
    loadComponent: () =>
      import('./pages/pilot-programme/pilot-programme.component').then(
        (m) => m.PilotProgrammeComponent,
      ),
    title: 'Pilot Programme — NowUkan',
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then((m) => m.PricingComponent),
    title: 'Pricing — NowUkan',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About — NowUkan',
  },
  {
    path: 'faqs',
    loadComponent: () => import('./pages/faqs/faqs.component').then((m) => m.FaqsComponent),
    title: 'FAQs — NowUkan',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — NowUkan',
  },
  {
    path: 'download',
    loadComponent: () =>
      import('./pages/download/download.component').then((m) => m.DownloadComponent),
    title: 'Download — NowUkan',
  },
  {
    path: 'legal',
    loadComponent: () => import('./pages/legal/legal.component').then((m) => m.LegalComponent),
    title: 'Legal — NowUkan',
  },
  {
    path: 'legal/terms',
    loadComponent: () => import('./pages/terms/terms.component').then((m) => m.TermsComponent),
    title: 'Our Terms — NowUkan',
  },
  {
    path: 'legal/privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
    title: 'Privacy Policy — NowUkan',
  },
  {
    path: 'equal-opportunities',
    loadComponent: () =>
      import('./pages/equal-opportunities/equal-opportunities.component').then(
        (m) => m.EqualOpportunitiesComponent,
      ),
    title: 'Equal Opportunities — NowUkan',
  },
  {
    path: 'data-security',
    loadComponent: () =>
      import('./pages/data-security/data-security.component').then((m) => m.DataSecurityComponent),
    title: 'Data Security — NowUkan',
  },
  {
    path: 'collaborate',
    loadComponent: () =>
      import('./pages/collaborate/collaborate.component').then((m) => m.CollaborateComponent),
    title: 'Collaborate — NowUkan',
  },
  {
    path: 'helpful-tips',
    loadComponent: () =>
      import('./pages/helpful-tips/helpful-tips.component').then((m) => m.HelpfulTipsComponent),
    title: 'Helpful Tips — NowUkan',
  },
  { path: '**', redirectTo: '' },
];
