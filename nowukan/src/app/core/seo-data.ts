/**
 * Central SEO metadata for every route.
 *
 * One entry per URL path (without leading slash; '' is the home page).
 * The SeoService reads this at navigation time and writes the tags into the
 * document head during SSR, so they appear in the server-rendered HTML.
 */

export interface SeoEntry {
  title: string;
  description: string;
  /** Optional per-page share image (absolute path under the site origin). */
  image?: string;
  /** Schema.org type used for JSON-LD. Defaults to 'WebPage'. */
  schemaType?: 'WebSite' | 'Organization' | 'WebPage' | 'ContactPage' | 'FAQPage';
  /** Set true to keep a thin/utility page out of the index. */
  noindex?: boolean;
}

/** Canonical site origin — used to build absolute canonical + OG URLs. */
export const SITE_ORIGIN = 'https://nowukan.io';

/** Default share image used when a page doesn't specify its own. */
export const DEFAULT_OG_IMAGE = '/assets/img/img-41e07446e0.png';

export const SITE_NAME = 'nowUKan';

export const SEO_DATA: Record<string, SeoEntry> = {
  '': {
    title: 'nowUKan — Learn Real English & Improve Pronunciation',
    description:
      'nowUKan is an affordable English-learning app for real-life English and pronunciation. Built for learners, families and institutions worldwide. Start a free trial.',
    schemaType: 'WebSite',
  },
  'how-it-works': {
    title: 'How It Works — nowUKan',
    description:
      'See how nowUKan turns everyday moments into structured English practice, with speech feedback and a clear step-by-step learning flow.',
  },
  journey: {
    title: 'Your Learning Journey — nowUKan',
    description:
      'Follow the nowUKan learning journey: from first words to confident real-life conversation, with pronunciation practice at every step.',
  },
  mission: {
    title: 'Our Mission — Affordable, Accessible English Learning | nowUKan',
    description:
      'Our mission is to make English language learning accessible and affordable worldwide — removing barriers of cost, connectivity and access for everyone.',
    schemaType: 'Organization',
  },
  vision: {
    title: 'Our Vision — A World Without English Barriers | nowUKan',
    description:
      'Our vision: a world where English opportunity has no barriers of cost, connectivity or access — affordable, high-quality English learning for everyone.',
    schemaType: 'Organization',
  },
  brochure: {
    title: 'Brochure — Explore nowUKan',
    description:
      'Browse and download nowUKan brochures for learners, educators, organisations, governments, NGOs and partners, and learn about our affiliate programme.',
  },
  enterprise: {
    title: 'Enterprise — English Learning At Scale | nowUKan',
    description:
      'nowUKan Enterprise: high-volume prepaid licences with fixed, transparent pricing for governments, businesses and institutions — no recurring subscriptions.',
  },
  benefits: {
    title: 'Benefits — Learn English Without Subscriptions | nowUKan',
    description:
      'Why learners, families and institutions choose nowUKan: works offline, one-time low cost, no subscriptions, on-device speech feedback and real-world English.',
  },
  challenge: {
    title: 'The Challenge — Head-to-Head English Test | nowUKan',
    description:
      'Test your vocabulary, pronunciation and understanding against friends or classmates in the nowUKan Challenge — connect via Bluetooth or Wi-Fi and compete.',
  },
  cart: {
    title: 'Your Cart — nowUKan',
    description: 'Review your nowUKan plan selection and continue to checkout.',
    noindex: true,
  },
  pronunciation: {
    title: 'Pronunciation Practice — nowUKan',
    description:
      'Real-time pronunciation feedback that helps every sound land clearly. Practise English speaking with nowUKan.',
  },
  'real-life-english': {
    title: 'Real-Life English — nowUKan',
    description:
      'Learn the English people actually use — at work, at home and on the move. Practical, real-life language with nowUKan.',
  },
  'for-learners': {
    title: 'For Learners — nowUKan',
    description:
      'A calmer, faster path to speaking English with confidence. See how nowUKan supports individual learners.',
  },
  'for-families': {
    title: 'For Families — nowUKan',
    description:
      'A safe, encouraging space for children to grow their English. Discover nowUKan for families.',
  },
  'for-institutions': {
    title: 'For Institutions — nowUKan',
    description:
      'Deploy nowUKan across classrooms and programmes with confidence. Affordable English development and assessment at scale.',
  },
  'institutions/pilot-programme': {
    title: 'Pilot Programme — nowUKan',
    description:
      'Run a measured nowUKan pilot before scaling regionally or nationally. Free evaluation accounts, tailored pricing — for institutions and government bodies.',
  },
  pricing: {
    title: 'Pricing & Plans — nowUKan',
    description:
      'Simple, affordable plans for learners, families and institutions. See nowUKan pricing and start a free trial.',
  },
  about: {
    title: 'About The Team — Where Innovation Meets Excellence | nowUKan',
    description:
      'Meet the team behind nowUKan — building in-house technology and content to make English language learning simpler, more affordable and accessible worldwide.',
    schemaType: 'Organization',
  },
  faqs: {
    title: 'Frequently Asked Questions — nowUKan',
    description:
      'Answers to common questions about nowUKan — how it works, pricing, institutions, pilots and more.',
    schemaType: 'FAQPage',
  },
  contact: {
    title: 'Contact The Team — nowUKan',
    description:
      'Talk to the nowUKan team or request a pilot for your organisation. Get in touch today.',
    schemaType: 'ContactPage',
  },
  'book-a-consultation': {
    title: 'Book A Consultation — nowUKan',
    description:
      'Book a video consultation with the nowUKan team to discuss licensing, pricing, implementation and large-scale deployment for your organisation.',
    schemaType: 'ContactPage',
  },
  'get-started': {
    title: 'Get Started — nowUKan',
    description:
      'Personal use or multiple user licences? Start a free 7-day trial, or book a consultation for tailored, transparent pricing on volume licences.',
  },
  'register': {
    title: 'Register Now — Create Your Account | nowUKan',
    description:
      'Create your free nowUKan account and start your 7-day trial. One-time pricing, no recurring subscription fees.',
    noindex: true,
  },
  download: {
    title: 'Free 7-Day Trial — Try nowUKan | nowUKan',
    description:
      'Try nowUKan free for 7 days on iOS and Android. No obligation to continue — then one low, one-time cost for life, with no recurring subscription fees.',
  },
  legal: {
    title: 'Legal — nowUKan',
    description: 'Privacy Policy, Terms of Service and Cookie Policy for nowUKan.',
    noindex: true,
  },
  'legal/terms': {
    title: 'Terms & Conditions — nowUKan',
    description:
      'The full Terms and Conditions governing use of the nowUKan website, app and Enterprise licensing programme.',
  },
  'legal/privacy': {
    title: 'Privacy Policy — nowUKan',
    description:
      'How nowUKan Ltd collects, uses, stores and protects your personal data, and your rights under UK data protection law.',
  },
  'equal-opportunities': {
    title: 'Equal Opportunities — nowUKan',
    description:
      'We believe English unlocks opportunity for everyone. Read our commitment to affordable, inclusive English development and assessment.',
  },
  'data-security': {
    title: 'Data Security — nowUKan',
    description:
      'nowUKan operates offline after installation and never data mines, sells or shares personal information for commercial purposes. Your data belongs to you.',
  },
  collaborate: {
    title: 'Collaborate With Us — nowUKan',
    description:
      'Partner with nowUKan: for EdTech sales leaders, influencers, agencies, governments, NGOs, eLearning providers and academic institutions.',
  },
  'helpful-tips': {
    title: 'Helpful Tips & Advice — nowUKan',
    description:
      '16 practical tips to support your English-language learning and pronunciation, from the nowUKan team.',
  },
  'government': {
    title: 'Government & Public Sector — nowUKan',
    description:
      'Affordable, scalable English language development and assessment for national and regional government programmes, with offline capability for underserved areas.',
  },
  'local-authorities': {
    title: 'Councils & Local Authorities — nowUKan',
    description:
      'Accessible English language development and assessment for residents, workers and newcomers, helping councils improve integration within limited budgets.',
  },
  'ngos-charities': {
    title: 'NGOs & Charities — nowUKan',
    description:
      'Affordable, offline-first English learning for NGOs and charities supporting refugees, migrants and underserved communities within existing budgets.',
  },
  'universities': {
    title: 'Universities — nowUKan',
    description:
      'Enhance student employability and communication skills at scale with nowUKan.',
  },
  'colleges': {
    title: 'Colleges & Training Providers — nowUKan',
    description:
      'Flexible English development for colleges and training providers.',
  },
  'employers': {
    title: 'Employers & Workforce — nowUKan',
    description:
      'Help employees build the English and communication skills to perform confidently at work, supporting workforce development, career progression and integration.',
  },
  'refugee-integration': {
    title: 'Refugee & Migrant Integration — nowUKan',
    description:
      'Affordable, offline-capable English language support helping refugees and newcomers build confidence and integrate into new communities.',
  },
  'adult-education': {
    title: 'Adult Education & ESOL — nowUKan',
    description:
      'Accessible English language development and assessment for adult learners, complementing existing education and training programmes in class or at home.',
  },
  'schools': {
    title: 'Schools & Family Learning — nowUKan',
    description:
      'Structured, engaging English for schools and family learning programmes.',
  },
  'development-partners': {
    title: 'International Development Partners — nowUKan',
    description:
      'Scale English learning across international development programmes.',
  },
  'distribution-partners': {
    title: 'Distribution Partners — nowUKan',
    description:
      'Become a nowUKan ambassador or distribution partner.',
  },
  'implementation': {
    title: 'Implementation & Deployment — nowUKan',
    description:
      'How nowUKan is deployed and rolled out at institutional scale.',
  },
  'learning-method': {
    title: 'Learning Method — nowUKan',
    description:
      'Our structured learning journey: vocabulary, phrases, dialogue and pronunciation practice, focused on the real-world English you actually need.',
  },
  'account-management': {
    title: 'Account Management — nowUKan',
    description:
      'How your nowUKan account works, including free trial, paid and Enterprise accounts, and what to do if your device is lost, stolen or replaced.',
  },
  'personal-use': {
    title: 'Personal Use — nowUKan',
    description:
      'Learn English at your own pace for work, travel, education or everyday life — one-time cost, offline learning, no recurring subscription fees.',
  },
  'academia': {
    title: 'Academia — Universities & Colleges — nowUKan',
    description:
      'English language development, pronunciation practice and assessment that complements existing teaching at universities, colleges and academic institutions.',
  },
  'individuals': {
    title: 'Individuals — nowUKan',
    description:
      'Develop your English at your own pace with an affordable, one-time-cost solution — offline learning, on-device speech analysis and no recurring fees.',
  },
  'partner-with-us': {
    title: 'Partner With Us — nowUKan',
    description:
      'Partner with nowUKan as an educator, NGO, government body, employer, reseller, agent or technology provider to expand access to English learning.',
  },
  'bespoke': {
    title: 'Bespoke Solutions — nowUKan',
    description:
      'Tailored nowUKan programmes with bespoke content, activities and learning pathways built around your objectives, learner numbers and budget.',
  },
  'installation': {
    title: 'Installation — nowUKan',
    description:
      'Installing nowUKan is quick and works fully offline once installed — ideal for areas with limited or unreliable internet access.',
  },
  'translations': {
    title: 'Translation Support — nowUKan',
    description:
      'UI translation support helps learners at lower English fluency levels navigate the nowUKan app in their native language during onboarding.',
  },
  'gift': {
    title: 'Gift nowUKan — nowUKan',
    description:
      'Give someone the gift of English. An affordable way to give a friend, family member, colleague or employee access to nowUKan.',
  },
};
