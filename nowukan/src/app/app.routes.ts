import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'benefits',
    loadComponent: () =>
      import('./pages/benefits/benefits.component').then((m) => m.BenefitsComponent),
  },
  {
    path: 'challenge',
    loadComponent: () =>
      import('./pages/challenge/challenge.component').then((m) => m.ChallengeComponent),
  },
  {
    path: 'how-it-works',
    loadComponent: () =>
      import('./pages/how-it-works/how-it-works.component').then((m) => m.HowItWorksComponent),
  },
  {
    path: 'journey',
    loadComponent: () =>
      import('./pages/journey/journey.component').then((m) => m.JourneyComponent),
  },
  {
    path: 'mission',
    loadComponent: () =>
      import('./pages/mission/mission.component').then((m) => m.MissionComponent),
  },
  {
    path: 'vision',
    loadComponent: () =>
      import('./pages/vision/vision.component').then((m) => m.VisionComponent),
  },
  {
    path: 'brochure',
    loadComponent: () =>
      import('./pages/brochure/brochure.component').then((m) => m.BrochureComponent),
  },
  {
    path: 'enterprise',
    loadComponent: () =>
      import('./pages/enterprise/enterprise.component').then((m) => m.EnterpriseComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'pronunciation',
    loadComponent: () =>
      import('./pages/pronunciation/pronunciation.component').then((m) => m.PronunciationComponent),
  },
  {
    path: 'real-life-english',
    loadComponent: () =>
      import('./pages/real-life-english/real-life-english.component').then(
        (m) => m.RealLifeEnglishComponent,
      ),
  },
  {
    path: 'for-learners',
    loadComponent: () =>
      import('./pages/for-learners/for-learners.component').then((m) => m.ForLearnersComponent),
  },
  {
    path: 'for-families',
    loadComponent: () =>
      import('./pages/for-families/for-families.component').then((m) => m.ForFamiliesComponent),
  },
  {
    path: 'for-institutions',
    loadComponent: () =>
      import('./pages/for-institutions/for-institutions.component').then(
        (m) => m.ForInstitutionsComponent,
      ),
  },
  {
    path: 'institutions/pilot-programme',
    loadComponent: () =>
      import('./pages/pilot-programme/pilot-programme.component').then(
        (m) => m.PilotProgrammeComponent,
      ),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then((m) => m.PricingComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'faqs',
    loadComponent: () => import('./pages/faqs/faqs.component').then((m) => m.FaqsComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'book-a-consultation',
    loadComponent: () =>
      import('./pages/book-a-consultation/book-a-consultation.component').then(
        (m) => m.BookAConsultationComponent,
      ),
  },
  {
    path: 'download',
    loadComponent: () =>
      import('./pages/download/download.component').then((m) => m.DownloadComponent),
  },
  {
    path: 'legal',
    loadComponent: () => import('./pages/legal/legal.component').then((m) => m.LegalComponent),
  },
  {
    path: 'legal/terms',
    loadComponent: () => import('./pages/terms/terms.component').then((m) => m.TermsComponent),
  },
  {
    path: 'legal/privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
  },
  {
    path: 'equal-opportunities',
    loadComponent: () =>
      import('./pages/equal-opportunities/equal-opportunities.component').then(
        (m) => m.EqualOpportunitiesComponent,
      ),
  },
  {
    path: 'data-security',
    loadComponent: () =>
      import('./pages/data-security/data-security.component').then((m) => m.DataSecurityComponent),
  },
  {
    path: 'collaborate',
    loadComponent: () =>
      import('./pages/collaborate/collaborate.component').then((m) => m.CollaborateComponent),
  },
  {
    path: 'helpful-tips',
    loadComponent: () =>
      import('./pages/helpful-tips/helpful-tips.component').then((m) => m.HelpfulTipsComponent),
  },
  {
    path: 'government',
    loadComponent: () =>
      import('./pages/government/government.component').then((m) => m.GovernmentComponent),
  },
  {
    path: 'local-authorities',
    loadComponent: () =>
      import('./pages/local-authorities/local-authorities.component').then((m) => m.LocalAuthoritiesComponent),
  },
  {
    path: 'ngos-charities',
    loadComponent: () =>
      import('./pages/ngos-charities/ngos-charities.component').then((m) => m.NgosCharitiesComponent),
  },
  {
    path: 'universities',
    loadComponent: () =>
      import('./pages/universities/universities.component').then((m) => m.UniversitiesComponent),
  },
  {
    path: 'colleges',
    loadComponent: () =>
      import('./pages/colleges/colleges.component').then((m) => m.CollegesComponent),
  },
  {
    path: 'employers',
    loadComponent: () =>
      import('./pages/employers/employers.component').then((m) => m.EmployersComponent),
  },
  {
    path: 'refugee-integration',
    loadComponent: () =>
      import('./pages/refugee-integration/refugee-integration.component').then((m) => m.RefugeeIntegrationComponent),
  },
  {
    path: 'adult-education',
    loadComponent: () =>
      import('./pages/adult-education/adult-education.component').then((m) => m.AdultEducationComponent),
  },
  {
    path: 'schools',
    loadComponent: () =>
      import('./pages/schools/schools.component').then((m) => m.SchoolsComponent),
  },
  {
    path: 'development-partners',
    loadComponent: () =>
      import('./pages/development-partners/development-partners.component').then((m) => m.DevelopmentPartnersComponent),
  },
  {
    path: 'distribution-partners',
    loadComponent: () =>
      import('./pages/distribution-partners/distribution-partners.component').then((m) => m.DistributionPartnersComponent),
  },
  {
    path: 'implementation',
    loadComponent: () =>
      import('./pages/implementation/implementation.component').then((m) => m.ImplementationComponent),
  },
  {
    path: 'learning-method',
    loadComponent: () =>
      import('./pages/learning-method/learning-method.component').then((m) => m.LearningMethodComponent),
  },
  {
    path: 'account-management',
    loadComponent: () =>
      import('./pages/account-management/account-management.component').then((m) => m.AccountManagementComponent),
  },
  {
    path: 'personal-use',
    loadComponent: () =>
      import('./pages/personal-use/personal-use.component').then((m) => m.PersonalUseComponent),
  },
  {
    path: 'academia',
    loadComponent: () =>
      import('./pages/academia/academia.component').then((m) => m.AcademiaComponent),
  },
  {
    path: 'individuals',
    loadComponent: () =>
      import('./pages/individuals/individuals.component').then((m) => m.IndividualsComponent),
  },
  {
    path: 'partner-with-us',
    loadComponent: () =>
      import('./pages/partner-with-us/partner-with-us.component').then((m) => m.PartnerWithUsComponent),
  },
  {
    path: 'bespoke',
    loadComponent: () =>
      import('./pages/bespoke/bespoke.component').then((m) => m.BespokeComponent),
  },
  {
    path: 'installation',
    loadComponent: () =>
      import('./pages/installation/installation.component').then((m) => m.InstallationComponent),
  },
  {
    path: 'translations',
    loadComponent: () =>
      import('./pages/translations/translations.component').then((m) => m.TranslationsComponent),
  },
  {
    path: 'gift',
    loadComponent: () =>
      import('./pages/gift/gift.component').then((m) => m.GiftComponent),
  },
  { path: '**', redirectTo: '' },
];
