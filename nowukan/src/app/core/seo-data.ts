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

export const SITE_NAME = 'NowUkan';

export const SEO_DATA: Record<string, SeoEntry> = {
  '': {
    title: 'NowUkan — Learn Real English & Improve Pronunciation',
    description:
      'NowUkan is an affordable English-learning app for real-life English and pronunciation. Built for learners, families and institutions worldwide. Start a free trial.',
    schemaType: 'WebSite',
  },
  'how-it-works': {
    title: 'How It Works — NowUkan',
    description:
      'See how NowUkan turns everyday moments into structured English practice, with speech feedback and a clear step-by-step learning flow.',
  },
  journey: {
    title: 'Your Learning Journey — NowUkan',
    description:
      'Follow the NowUkan learning journey: from first words to confident real-life conversation, with pronunciation practice at every step.',
  },
  mission: {
    title: 'Our Mission — Affordable, Accessible English Learning | NowUkan',
    description:
      'Our mission is to make English language learning accessible and affordable worldwide — removing barriers of cost, connectivity and access for everyone.',
    schemaType: 'Organization',
  },
  vision: {
    title: 'Our Vision — A World Without English Barriers | NowUkan',
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
    title: 'Enterprise — English Learning At Scale | NowUkan',
    description:
      'nowUKan Enterprise: high-volume prepaid licences with fixed, transparent pricing for governments, businesses and institutions — no recurring subscriptions.',
  },
  benefits: {
    title: 'Benefits — Learn English Without Subscriptions | NowUkan',
    description:
      'Why learners, families and institutions choose NowUkan: works offline, one-time low cost, no subscriptions, on-device speech feedback and real-world English.',
  },
  challenge: {
    title: 'The Challenge — Head-to-Head English Test | NowUkan',
    description:
      'Test your vocabulary, pronunciation and understanding against friends or classmates in the nowUKan Challenge — connect via Bluetooth or Wi-Fi and compete.',
  },
  cart: {
    title: 'Your Cart — NowUkan',
    description: 'Review your NowUkan plan selection and continue to checkout.',
    noindex: true,
  },
  pronunciation: {
    title: 'Pronunciation Practice — NowUkan',
    description:
      'Real-time pronunciation feedback that helps every sound land clearly. Practise English speaking with NowUkan.',
  },
  'real-life-english': {
    title: 'Real-Life English — NowUkan',
    description:
      'Learn the English people actually use — at work, at home and on the move. Practical, real-life language with NowUkan.',
  },
  'for-learners': {
    title: 'For Learners — NowUkan',
    description:
      'A calmer, faster path to speaking English with confidence. See how NowUkan supports individual learners.',
  },
  'for-families': {
    title: 'For Families — NowUkan',
    description:
      'A safe, encouraging space for children to grow their English. Discover NowUkan for families.',
  },
  'for-institutions': {
    title: 'For Institutions — NowUkan',
    description:
      'Deploy NowUkan across classrooms and programmes with confidence. Affordable English development and assessment at scale.',
  },
  'institutions/pilot-programme': {
    title: 'Pilot Programme — NowUkan',
    description:
      'Run a measured nowUKan pilot before scaling regionally or nationally. Free evaluation accounts, tailored pricing — for institutions and government bodies.',
  },
  pricing: {
    title: 'Pricing & Plans — NowUkan',
    description:
      'Simple, affordable plans for learners, families and institutions. See NowUkan pricing and start a free trial.',
  },
  about: {
    title: 'About The Team — Where Innovation Meets Excellence | NowUkan',
    description:
      'Meet the team behind nowUKan — building in-house technology and content to make English language learning simpler, more affordable and accessible worldwide.',
    schemaType: 'Organization',
  },
  faqs: {
    title: 'Frequently Asked Questions — NowUkan',
    description:
      'Answers to common questions about NowUkan — how it works, pricing, institutions, pilots and more.',
    schemaType: 'FAQPage',
  },
  contact: {
    title: 'Contact The Team — NowUkan',
    description:
      'Talk to the NowUkan team or request a pilot for your organisation. Get in touch today.',
    schemaType: 'ContactPage',
  },
  'book-a-consultation': {
    title: 'Book A Consultation — NowUkan',
    description:
      'Book a video consultation with the nowUKan team to discuss licensing, pricing, implementation and large-scale deployment for your organisation.',
    schemaType: 'ContactPage',
  },
  'get-started': {
    title: 'Get Started — NowUkan',
    description:
      'Personal use or multiple user licences? Start a free 7-day trial, or book a consultation for tailored, transparent pricing on volume licences.',
  },
  'register': {
    title: 'Register Now — Create Your Account | NowUkan',
    description:
      'Create your free nowUKan account and start your 7-day trial. One-time pricing, no recurring subscription fees.',
    noindex: true,
  },
  download: {
    title: 'Free 7-Day Trial — Try nowUKan | NowUkan',
    description:
      'Try nowUKan free for 7 days on iOS and Android. No obligation to continue — then one low, one-time cost for life, with no recurring subscription fees.',
  },
  legal: {
    title: 'Legal — NowUkan',
    description: 'Privacy Policy, Terms of Service and Cookie Policy for NowUkan.',
    noindex: true,
  },
  'legal/terms': {
    title: 'Terms & Conditions — NowUkan',
    description:
      'The full Terms and Conditions governing use of the nowUKan website, app and Enterprise licensing programme.',
  },
  'legal/privacy': {
    title: 'Privacy Policy — NowUkan',
    description:
      'How nowUKan Ltd collects, uses, stores and protects your personal data, and your rights under UK data protection law.',
  },
  'equal-opportunities': {
    title: 'Equal Opportunities — NowUkan',
    description:
      'We believe English unlocks opportunity for everyone. Read our commitment to affordable, inclusive English development and assessment.',
  },
  'data-security': {
    title: 'Data Security — NowUkan',
    description:
      'nowUKan operates offline after installation and never data mines, sells or shares personal information for commercial purposes. Your data belongs to you.',
  },
  collaborate: {
    title: 'Collaborate With Us — NowUkan',
    description:
      'Partner with NowUkan: for EdTech sales leaders, influencers, agencies, governments, NGOs, eLearning providers and academic institutions.',
  },
  'helpful-tips': {
    title: 'Helpful Tips & Advice — NowUkan',
    description:
      '16 practical tips to support your English-language learning and pronunciation, from the NowUkan team.',
  },
  'government': {
    title: 'Government & Public Sector — NowUkan',
    description:
      'Affordable, scalable English language development and assessment for national and regional government programmes, with offline capability for underserved areas.',
  },
  'local-authorities': {
    title: 'Councils & Local Authorities — NowUkan',
    description:
      'Accessible English language development and assessment for residents, workers and newcomers, helping councils improve integration within limited budgets.',
  },
  'ngos-charities': {
    title: 'NGOs & Charities — NowUkan',
    description:
      'Affordable, offline-first English learning for NGOs and charities supporting refugees, migrants and underserved communities within existing budgets.',
  },
  'universities': {
    title: 'Universities — NowUkan',
    description:
      'Enhance student employability and communication skills at scale with NowUkan.',
  },
  'colleges': {
    title: 'Colleges & Training Providers — NowUkan',
    description:
      'Flexible English development for colleges and training providers.',
  },
  'employers': {
    title: 'Employers & Workforce — NowUkan',
    description:
      'Help employees build the English and communication skills to perform confidently at work, supporting workforce development, career progression and integration.',
  },
  'refugee-integration': {
    title: 'Refugee & Migrant Integration — NowUkan',
    description:
      'Affordable, offline-capable English language support helping refugees and newcomers build confidence and integrate into new communities.',
  },
  'adult-education': {
    title: 'Adult Education & ESOL — NowUkan',
    description:
      'Accessible English language development and assessment for adult learners, complementing existing education and training programmes in class or at home.',
  },
  'schools': {
    title: 'Schools & Family Learning — NowUkan',
    description:
      'Structured, engaging English for schools and family learning programmes.',
  },
  'development-partners': {
    title: 'International Development Partners — NowUkan',
    description:
      'Scale English learning across international development programmes.',
  },
  'distribution-partners': {
    title: 'Distribution Partners — NowUkan',
    description:
      'Become a NowUkan ambassador or distribution partner.',
  },
  'implementation': {
    title: 'Implementation & Deployment — NowUkan',
    description:
      'How NowUkan is deployed and rolled out at institutional scale.',
  },
  'learning-method': {
    title: 'Learning Method — NowUkan',
    description:
      'Our structured learning journey: vocabulary, phrases, dialogue and pronunciation practice, focused on the real-world English you actually need.',
  },
  'account-management': {
    title: 'Account Management — NowUkan',
    description:
      'How your nowUKan account works, including free trial, paid and Enterprise accounts, and what to do if your device is lost, stolen or replaced.',
  },
  'personal-use': {
    title: 'Personal Use — NowUkan',
    description:
      'Learn English at your own pace for work, travel, education or everyday life — one-time cost, offline learning, no recurring subscription fees.',
  },
  'academia': {
    title: 'Academia — Universities & Colleges — NowUkan',
    description:
      'English language development, pronunciation practice and assessment that complements existing teaching at universities, colleges and academic institutions.',
  },
  'individuals': {
    title: 'Individuals — NowUkan',
    description:
      'Develop your English at your own pace with an affordable, one-time-cost solution — offline learning, on-device speech analysis and no recurring fees.',
  },
  'partner-with-us': {
    title: 'Partner With Us — NowUkan',
    description:
      'Partner with nowUKan as an educator, NGO, government body, employer, reseller, agent or technology provider to expand access to English learning.',
  },
  'bespoke': {
    title: 'Bespoke Solutions — NowUkan',
    description:
      'Tailored nowUKan programmes with bespoke content, activities and learning pathways built around your objectives, learner numbers and budget.',
  },
  'installation': {
    title: 'Installation — NowUkan',
    description:
      'Installing nowUKan is quick and works fully offline once installed — ideal for areas with limited or unreliable internet access.',
  },
  'translations': {
    title: 'Translation Support — NowUkan',
    description:
      'UI translation support helps learners at lower English fluency levels navigate the nowUKan app in their native language during onboarding.',
  },
  'gift': {
    title: 'Gift nowUKan — NowUkan',
    description:
      'Give someone the gift of English. An affordable way to give a friend, family member, colleague or employee access to nowUKan.',
  },
};
