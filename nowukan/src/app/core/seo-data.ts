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
    title: 'Our Mission — NowUkan',
    description:
      'Our mission is to make real, usable English reachable for every learner, everywhere — affordable, offline-capable and built for scale.',
    schemaType: 'Organization',
  },
  vision: {
    title: 'Our Vision — NowUkan',
    description:
      'Our vision: a world where language is never the barrier between a person and their potential. Discover what drives NowUkan.',
    schemaType: 'Organization',
  },
  enterprise: {
    title: 'Enterprise & Institutions — NowUkan',
    description:
      'Roll out NowUkan across your school, university or organisation with dedicated support, licensing and measurable outcomes.',
  },
  benefits: {
    title: 'Benefits — Why Choose NowUkan',
    description:
      'Why learners, families and institutions choose NowUkan: works offline, one-time low cost, no subscriptions, speech feedback and real-world English.',
  },
  challenge: {
    title: 'The Challenge — NowUkan',
    description:
      'Millions lack affordable access to quality English learning and assessment. See the global challenge NowUkan was built to solve.',
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
      'Run a measured NowUkan pilot and see the impact before you scale. Ideal for governments, NGOs and education providers.',
  },
  pricing: {
    title: 'Pricing & Plans — NowUkan',
    description:
      'Simple, affordable plans for learners, families and institutions. See NowUkan pricing and start a free trial.',
  },
  about: {
    title: 'About NowUkan',
    description:
      'NowUkan makes real English reachable for everyone. Learn about our approach to affordable, inclusive English learning.',
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
  download: {
    title: 'Download the App — NowUkan',
    description:
      'Download NowUkan free on iOS and Android and start learning real-life English and pronunciation today.',
  },
  legal: {
    title: 'Legal — NowUkan',
    description: 'Privacy Policy, Terms of Service and Cookie Policy for NowUkan.',
    noindex: true,
  },
  'legal/terms': {
    title: 'Our Terms — NowUkan',
    description: 'The Terms of Service that govern use of the NowUkan website and app.',
  },
  'legal/privacy': {
    title: 'Privacy Policy — NowUkan',
    description: 'How NowUkan collects, uses and protects your personal data.',
  },
  'equal-opportunities': {
    title: 'Equal Opportunities — NowUkan',
    description:
      'We believe English unlocks opportunity for everyone. Read our commitment to affordable, inclusive English development and assessment.',
  },
  'data-security': {
    title: 'Data Security — NowUkan',
    description:
      'How NowUkan protects the security and privacy of our customers and website visitors.',
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
      'English development and assessment for government and public-sector programmes at national scale.',
  },
  'local-authorities': {
    title: 'Councils & Local Authorities — NowUkan',
    description:
      'Practical English programmes for councils and local authorities.',
  },
  'ngos-charities': {
    title: 'NGOs & Charities — NowUkan',
    description:
      'Affordable, offline-first English learning for NGOs and charities.',
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
      'Build workforce English speaking confidence for employability.',
  },
  'refugee-integration': {
    title: 'Refugee & Migrant Integration — NowUkan',
    description:
      'Supporting refugee and migrant integration through accessible English learning.',
  },
  'adult-education': {
    title: 'Adult Education & ESOL — NowUkan',
    description:
      'Self-paced English and ESOL that fits around work and family life.',
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
    title: 'Learning Methodology — NowUkan',
    description:
      'The learning science and structure behind NowUkan.',
  },
  'account-management': {
    title: 'Learner Account Management — NowUkan',
    description:
      'How learner accounts are assigned, managed and tracked.',
  },
  'reporting': {
    title: 'Measurement & Reporting — NowUkan',
    description:
      'Measurable outcomes and reporting for decision-makers.',
  },
  'personal-use': {
    title: 'Personal & Family Use — NowUkan',
    description:
      'Learn real English at your own pace, for you and your family.',
  },
};
