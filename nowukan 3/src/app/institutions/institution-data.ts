/**
 * Enterprise sector pages and trust pages (Scope of Work packages 7 and 8).
 *
 * Every entry becomes a page at /<slug> with its own SEO tags, FAQ data and
 * sitemap entry. Pages with `draft: true` work for visitors but are hidden from
 * Google (noindex) until nowUKan confirms the facts; then delete `draft: true`.
 *
 * Facts used here come only from nowUKan's own website copy and Darren's
 * approved USP lists. Do not add claims (results, certifications, reporting
 * features) until nowUKan supplies them.
 */
export interface InstitutionSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface InstitutionPage {
  slug: string;
  kind: 'sector' | 'trust';
  eyebrow: string;
  heading: string;
  /** Google title (60 characters or fewer) */
  title: string;
  description: string;
  lead: string;
  image?: string;
  imageAlt?: string;
  sections: InstitutionSection[];
  faqs: { q: string; a: string }[];
  /** Hidden from Google until nowUKan confirms the content. */
  draft?: boolean;
}

/** Shared approved points (Darren's lists) used on several sector pages. */
const PROGRAMME_POINTS = [
  'Low cost, one-off payment: no recurring subscriptions',
  'Works fully offline after installation',
  'Real-time, on-device speech analysis and personalised feedback',
  'CEFR aligned content and a structured four-stage learning method',
  'Curriculum neutral: works alongside any syllabus',
  'Zero data mining. No ads. No distractions.',
];

export const INSTITUTION_PAGES: InstitutionPage[] = [
  // ───────────────────────────── SECTOR PAGES ─────────────────────────────
  {
    slug: 'government',
    kind: 'sector',
    eyebrow: 'Governments',
    heading: 'English Language Programmes for Governments',
    title: 'English Learning Programme for Governments | nowUKan',
    description:
      'Deliver English language development and assessment at national scale: offline, on low-cost devices, with a one-off cost per learner and no subscriptions.',
    lead: 'nowUKan helps governments deliver English language development at national scale, with a low, fixed cost per learner, no recurring subscriptions and learning that works fully offline, even in rural and remote communities.',
    image: 'assets/journey/government-cover.jpg',
    imageAlt: 'Government building with learners using nowUKan, representing national English programmes',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'National English programmes have to reach very large numbers of learners, often across regions with unreliable internet, limited teaching capacity and tight budgets. Per-learner subscriptions grow every year, and cloud-based tools exclude the communities that need support most.',
        ],
      },
      {
        heading: 'How nowUKan helps',
        bullets: [
          'English language development at national scale',
          'Cut the cost of your current English provision with a low cost per learner, at any scale',
          'Built for rural and remote communities: works fully offline after installation',
          'Runs on low-cost Android phones and tablets',
          'Scalable speaking assessment for schools and universities',
          'Predictable, fixed learning budgets with no recurring subscriptions',
        ],
      },
      {
        heading: 'Supporting national priorities',
        paragraphs: [
          'nowUKan supports education, employment, integration and workforce development programmes, and contributes to Sustainable Development Goal 4: quality education for all.',
        ],
      },
      { heading: 'Why it works', bullets: PROGRAMME_POINTS },
    ],
    faqs: [
      { q: 'Can nowUKan be used for a national English programme?', a: 'Yes. Organisations buy prepaid user licences in volume and distribute them across schools, regions, programmes or communities. Our team recommends the right scale and structure for your objectives.' },
      { q: 'Does it work where internet access is limited?', a: 'Yes. After installation nowUKan works fully offline, including speech analysis and feedback, so it can reach rural and underserved areas.' },
      { q: 'Can we pilot it first?', a: 'Yes. Our pilot programme lets government bodies introduce nowUKan to a selected group of learners and evaluate engagement and outcomes before a wider rollout.' },
    ],
  },
  {
    slug: 'local-authorities',
    kind: 'sector',
    eyebrow: 'Local Authorities',
    heading: 'English Language Support for Local Authorities',
    title: 'English Language Support for Local Authorities | nowUKan',
    description:
      'Extend English language provision to residents, workers and newcomers within limited budgets. Offline, low-cost, one-off licences with no subscriptions.',
    lead: 'Support residents, workers and newcomers where English may not be their first language. nowUKan helps local authorities extend language provision within limited budgets and reach people that traditional classes cannot.',
    image: 'assets/img/local-authorities.webp',
    imageAlt: 'Council building and residents supported by nowUKan English learning',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Demand for English support often outstrips class places. Waiting lists grow, budgets are fixed, and residents with work, caring responsibilities or no reliable internet find it hard to attend or keep practising.',
        ],
      },
      {
        heading: 'How nowUKan helps',
        bullets: [
          'Extend English provision beyond the classroom, within existing budgets',
          'Support integration for newcomers, residents and local workers',
          'Practise anytime: in community settings, at home or on the move',
          'Works fully offline, for areas and settings with limited internet access',
          'Complements existing ESOL and community programmes',
          'Translation support during onboarding for learners at lower levels of English',
        ],
      },
      { heading: 'Why it works', bullets: PROGRAMME_POINTS },
    ],
    faqs: [
      { q: 'Can we provide nowUKan to residents across our area?', a: 'Yes. Prepaid licences can be distributed across services, community centres, libraries and partner organisations, and you can add users as your programme grows.' },
      { q: 'Does it replace our ESOL classes?', a: 'No. nowUKan is curriculum neutral and works alongside existing classes, giving learners more speaking practice between sessions.' },
      { q: 'Is learner data shared or sold?', a: 'No. nowUKan follows a zero data mining approach and analyses speech on the device.' },
    ],
  },
  {
    slug: 'schools',
    kind: 'sector',
    eyebrow: 'Schools',
    heading: 'English Speaking Practice for Every Student',
    title: 'English Speaking Practice for Schools | nowUKan',
    description:
      'Give every student speaking practice and real-time pronunciation feedback, even in large classes. Offline, safe for young learners, with whole-school licences.',
    lead: 'In a large class, few students get enough time to speak. nowUKan gives every student private speaking practice with real-time feedback, supporting teachers, not replacing them.',
    image: 'assets/img/academia.webp',
    imageAlt: 'Celebrating students in school uniform around a golden trophy with letters A, B and C',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Speaking is the hardest English skill to practise at school. Class sizes leave little time for each student to talk, many students are too shy to speak in front of others, and practice at home is limited when families have no reliable internet.',
        ],
      },
      {
        heading: 'How nowUKan helps',
        bullets: [
          'Speaking practice for every student, even in large classes',
          'Real-time speech analysis and personalised feedback',
          'Supporting teachers, not replacing them',
          'Curriculum neutral: works alongside any syllabus',
          'Works fully offline after installation, at school and at home',
          'Safe for schools and young learners: no ads, zero data mining',
          'Whole-school and campus licences',
        ],
      },
      {
        heading: 'Win free lifetime English for your whole school',
        paragraphs: [
          'Our global competition gives schools the chance to win a free lifetime nowUKan licence for every student and member of staff. No purchase necessary.',
        ],
      },
    ],
    faqs: [
      { q: 'Is nowUKan safe for young learners?', a: 'Yes. There are no adverts, speech is analysed on the device and we follow a zero data mining approach.' },
      { q: 'Does it fit our existing curriculum?', a: 'Yes. nowUKan is curriculum neutral and works alongside any syllabus, giving students extra practice in vocabulary, pronunciation and real-life conversation.' },
      { q: 'Can students use it at home without internet?', a: 'Yes. Once installed, the app works fully offline.' },
    ],
  },
  {
    slug: 'rural-education',
    kind: 'sector',
    eyebrow: 'Rural Education',
    heading: 'English Learning for Rural and Low-Connectivity Schools',
    title: 'English Learning for Rural Schools: Works Offline | nowUKan',
    description:
      'English learning built for rural and remote communities: works fully offline, runs on low-cost Android phones and tablets, with a low one-off cost per learner.',
    lead: 'Most digital learning assumes fast, reliable internet. nowUKan was built for places where it isn’t: install it once, and lessons, speaking practice and feedback all work offline.',
    image: 'assets/img/community-people.webp',
    imageAlt: 'Learners using phones to practise English',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Rural and remote schools often have the fewest specialist English teachers and the weakest connectivity. Cloud-based apps buffer, use expensive mobile data or stop working altogether, so the learners who need support most are left behind.',
        ],
      },
      {
        heading: 'How nowUKan helps',
        bullets: [
          'Built for rural and remote communities',
          'Works fully offline after installation: no data costs, no buffering',
          'Runs on low-cost Android phones and tablets',
          'On-device speech analysis, so feedback works without a connection',
          'Low cost per learner, at any scale',
          'Translation support in the learner’s native language during onboarding',
        ],
      },
      {
        heading: 'Low-connectivity English education',
        paragraphs: [
          'Because nowUKan does not rely on cloud processing, it reaches learners that online-only tools cannot, and it keeps costs low enough for programmes to scale across whole regions.',
        ],
      },
    ],
    faqs: [
      { q: 'Does nowUKan need internet to work?', a: 'Only to download and install it. After that, learning and speech feedback work offline.' },
      { q: 'Which devices does it run on?', a: 'Android 8.0 or later and iOS 15.0 or later, and it is being optimised for lower-specification phones and tablets.' },
      { q: 'Can we run a pilot in rural schools?', a: 'Yes. Our pilot programme lets larger institutions and government bodies evaluate engagement and outcomes with a selected group of learners first.' },
    ],
  },
  {
    slug: 'universities',
    kind: 'sector',
    eyebrow: 'Universities',
    heading: 'English Language Support for Universities',
    title: 'English Support for Universities & International Students',
    description:
      'Help international and domestic students build English speaking confidence for study and employment, with campus licences, offline practice and assessment.',
    lead: 'Students who understand English well can still struggle to speak up in seminars, presentations and interviews. nowUKan gives them independent speaking practice with real-time feedback, alongside your existing language support.',
    image: 'assets/img/academia-graduates.webp',
    imageAlt: 'University graduates celebrating with nowUKan',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Pre-sessional and in-sessional English support has limited contact hours. International students need far more speaking practice than classes can provide, especially for seminars, group work and job interviews.',
        ],
      },
      {
        heading: 'How nowUKan helps',
        bullets: [
          'Build students’ English for further study and employment',
          'Independent speaking practice with real-time, personalised feedback',
          'Topics for university life, interviews, technology and events',
          'CEFR aligned content from A1–A2 to C1–C2',
          'Scalable speaking assessment for schools and universities',
          'Whole-school and campus licences, with no recurring subscriptions',
        ],
      },
      { heading: 'Why it works', bullets: PROGRAMME_POINTS },
    ],
    faqs: [
      { q: 'Can international students use nowUKan before they arrive?', a: 'Yes. Students can practise from anywhere, and the app works offline once installed.' },
      { q: 'Does it replace our language centre?', a: 'No. nowUKan complements your teaching, giving students extra speaking practice outside contact hours.' },
      { q: 'Can we license it for a whole campus?', a: 'Yes. Prepaid licences can be distributed across departments and programmes. Book a consultation to discuss your requirements.' },
    ],
  },
  {
    slug: 'employers',
    kind: 'sector',
    eyebrow: 'Employers',
    heading: 'Workforce English Training for Employers',
    title: 'Workforce English Training for Employers | nowUKan',
    description:
      'Help employees speak English with confidence at work: workplace communication, customer service and career progression, with one-off licences and offline practice.',
    lead: 'Help employees develop the English language and communication skills they need to perform confidently at work, with private practice that fits around shifts and a licence cost that is easy to budget for.',
    image: 'assets/img/employee-growth.webp',
    imageAlt: 'Employees climbing a golden staircase towards a trophy, representing career growth',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Shift patterns make classes hard to attend, per-person subscriptions add up across a workforce, and many employees feel embarrassed practising in front of colleagues. Yet clear communication affects safety, customer service, teamwork and progression.',
        ],
      },
      {
        heading: 'How nowUKan helps',
        bullets: [
          'Support workforce development and career progression',
          'Improve customer communication and everyday workplace interactions',
          'Help international employees integrate into the team',
          'Short, private practice sessions that fit around work',
          'Works fully offline, at work or at home',
          'Fixed, transparent pricing with no recurring subscriptions',
        ],
      },
      {
        heading: 'Investing in your staff pays dividends',
        paragraphs: [
          'By helping employees improve vocabulary, pronunciation and practical communication, organisations support stronger workplace interactions, greater confidence and better opportunities for career development.',
        ],
      },
    ],
    faqs: [
      { q: 'How do we provide nowUKan to staff?', a: 'You buy prepaid user licences in volume and distribute them across teams, departments or sites. You can add users as your requirements change.' },
      { q: 'Does it cover workplace English?', a: 'Yes. Topics include job interviews, phone calls, appointments and professional communication up to C1–C2 level.' },
      { q: 'Can employees use it at home?', a: 'Yes. Once installed, it works fully offline anywhere.' },
    ],
  },
  {
    slug: 'ngos-charities',
    kind: 'sector',
    eyebrow: 'NGOs & Charities',
    heading: 'English Learning Platform for NGOs and Charities',
    title: 'English Learning Platform for NGOs & Charities | nowUKan',
    description:
      'Reach refugees, migrants and underserved communities with English learning that works offline, at a low one-off cost per learner, within existing budgets.',
    lead: 'Reach learners who face financial, geographical or connectivity barriers. nowUKan’s low cost and offline capability help NGOs and charities extend English support to more people within existing budgets.',
    image: 'assets/journey/ngo-cover.jpg',
    imageAlt: 'Community learners supported by an NGO English programme',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Integration and development programmes serve people with little time, money or connectivity. Waiting lists for classes are long, and learners in temporary accommodation often have no reliable internet.',
        ],
      },
      {
        heading: 'How nowUKan helps',
        bullets: [
          'Support refugees, migrants and disadvantaged communities',
          'Low cost per learner, at any scale',
          'Works fully offline after installation',
          'Practical, real-world English for everyday life, work and education',
          'Translation support in the learner’s native language during onboarding',
          'Zero data mining: a brand partners can recommend with confidence',
        ],
      },
      {
        heading: 'Give the gift of English',
        paragraphs: [
          'Sponsor-a-learner and gifted licences let supporters fund English learning for people who could not otherwise afford it.',
        ],
      },
    ],
    faqs: [
      { q: 'Can we distribute licences to the people we support?', a: 'Yes. Prepaid licences can be distributed across your programmes and partner organisations.' },
      { q: 'Does it work for beginners?', a: 'Yes. Learning starts at A1–A2, and learners can choose their native language during onboarding for translation support.' },
      { q: 'Does it need internet access?', a: 'Only to install. After that it works fully offline.' },
    ],
  },
  {
    slug: 'international-development',
    kind: 'sector',
    eyebrow: 'International Development',
    heading: 'English Language Development for International Programmes',
    title: 'English for International Development Programmes | nowUKan',
    description:
      'Scalable, offline English language development for international development programmes: low cost per learner, low-cost devices, supporting SDG 4.',
    lead: 'For development agencies and international programmes, nowUKan offers English language development and assessment that scales across countries, works offline and keeps the cost per learner low.',
    image: 'assets/img/vision-breaking-barriers.webp',
    imageAlt: 'Learners walking through a broken wall towards a glowing globe, symbolising barriers being removed',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'English opens access to education, employment and international opportunity, but programmes in low-connectivity regions struggle with infrastructure costs, teacher shortages and recurring software fees.',
        ],
      },
      {
        heading: 'How nowUKan helps',
        bullets: [
          'Supporting SDG 4: quality education for all',
          'English language development at national and regional scale',
          'Works fully offline on low-cost Android phones and tablets',
          'Low cost per learner, with no recurring subscriptions',
          'Curriculum neutral: works alongside any syllabus',
          'White-label and bespoke content options, subject to volume',
        ],
      },
      { heading: 'Why it works', bullets: PROGRAMME_POINTS },
    ],
    faqs: [
      { q: 'Can nowUKan be customised for a programme?', a: 'Yes. Subject to volume and commercial arrangements, we welcome discussions about bespoke content, customisation and white labelling.' },
      { q: 'Does it work in areas without internet?', a: 'Yes. After installation it works fully offline.' },
      { q: 'How do we start?', a: 'Book a consultation with a senior member of our team. Larger institutions and government bodies can begin with a pilot programme.' },
    ],
  },
  {
    slug: 'partner-with-us',
    kind: 'sector',
    eyebrow: 'Partners',
    heading: 'Partner With nowUKan',
    title: 'Partner With nowUKan: Resellers, Agents & Affiliates',
    description:
      'Become a nowUKan reseller, distributor, agent or affiliate. An easy product to sell: one low, one-off price, no subscriptions, and global demand for affordable English.',
    lead: 'We welcome partners who share our ambition to make English learning accessible and affordable: resellers, distributors, agents, educators, EdTech companies, creators and influencers.',
    image: 'assets/img/partner-with-us.webp',
    imageAlt: 'Partners joining hands around nowUKan',
    sections: [
      {
        heading: 'Why partner with nowUKan',
        bullets: [
          'An easy product to sell: one low, one-off price',
          'No subscriptions for your customers to cancel',
          'Sell to schools, NGOs, governments and individuals',
          'Huge global demand for affordable English',
          'Works offline, so it sells in markets others can’t reach',
          'Zero data mining: a brand you can recommend with confidence',
          'Built in the UK. Designed for the world.',
        ],
      },
      {
        heading: 'Ways to work with us',
        bullets: [
          'Resellers and distributors: reseller and distributor opportunities worldwide',
          'Agents: become an agent in your country',
          'Organisations: volume licences for your clients, with white-label and bespoke options',
          'Tutors and educators: recommend nowUKan to your students through our affiliate programme',
          'Creators and influencers: QuickFire challenges and live pronunciation scores make great content for TikTok, Reels and Shorts',
        ],
      },
      {
        heading: 'Ready to share',
        paragraphs: ['Marketing materials and brochures are ready to share with your customers and audience.'],
      },
    ],
    faqs: [
      { q: 'Who can become a partner?', a: 'Resellers, distributors, agents, EdTech companies, ELT and ESL professionals, creators and strategic partners who share our vision.' },
      { q: 'Can tutors earn by recommending nowUKan?', a: 'Yes. Through our affiliate programme, tutors and educators can earn an additional income by recommending nowUKan to their students.' },
      { q: 'Do you offer white-label options?', a: 'Yes, subject to volume and commercial arrangements.' },
    ],
  },

  // ───────────────────────────── TRUST PAGES ─────────────────────────────
  {
    slug: 'implementation',
    kind: 'trust',
    eyebrow: 'Implementation',
    heading: 'Implementation and Deployment',
    title: 'Implementation & Deployment for Organisations | nowUKan',
    description:
      'How organisations roll out nowUKan: consultation, pilot, prepaid volume licences, simple distribution and offline installation on learners’ devices.',
    lead: 'Rolling out nowUKan is designed to be simple, from a pilot with a small group to licences for hundreds, thousands or millions of learners.',
    sections: [
      {
        heading: 'How a rollout works',
        bullets: [
          '1. Consultation: a video call with a senior member of our team to understand your objectives and requirements',
          '2. Pilot (optional): introduce nowUKan to a selected group of learners and evaluate engagement and outcomes',
          '3. Licences: purchase prepaid user licences in volume at fixed, transparent pricing',
          '4. Distribution: distribute licences across teams, schools, programmes or partner networks, and add users as you grow',
          '5. Installation: learners install the app once; it then works fully offline',
        ],
      },
      {
        heading: 'Device requirements',
        bullets: [
          'Apple iOS 15.0 or later; Android 8.0 (API 26) or later',
          '2 GB RAM minimum (4 GB or more recommended)',
          'At least 500 MB of available storage (1 GB recommended)',
          'Internet needed only to download, install and use online features',
        ],
      },
      {
        heading: 'Good to know',
        bullets: [
          'No infrastructure or servers to set up: learning runs on the device',
          'No individual subscriptions to manage',
          'Minimum order requirements apply to the Enterprise Programme',
          'The pilot programme is available to larger institutions and government bodies',
        ],
      },
    ],
    faqs: [
      { q: 'Do we need any IT infrastructure?', a: 'No. Learners install the app on their own or supplied devices, and it works offline after installation.' },
      { q: 'Can we add learners later?', a: 'Yes. You can add users as your requirements change or your programme grows.' },
      { q: 'Is there a minimum order?', a: 'Yes, minimum order requirements apply to the Enterprise Programme. Book a consultation for details.' },
    ],
  },
  {
    slug: 'assessment',
    kind: 'trust',
    eyebrow: 'Assessment',
    heading: 'How nowUKan Assesses Speaking',
    title: 'English Speaking & Pronunciation Assessment | nowUKan',
    description:
      'How nowUKan’s on-device speech analysis scores pronunciation sound by sound, plus accuracy, fluency, articulation and speed, for learners and institutions.',
    lead: 'Every time a learner speaks, nowUKan analyses the recording on the device and gives instant, specific feedback, so learners and organisations can see exactly where speaking is improving.',
    image: 'assets/explain/quickfire-results.png',
    imageAlt: 'nowUKan QuickFire results screen showing accuracy, fluency, articulation and speed',
    sections: [
      {
        heading: 'Sound-by-sound pronunciation scores',
        paragraphs: [
          'Each word is broken into its individual sounds. Every sound is scored in one of four bands, with a tip on which sound to focus on next:',
        ],
        bullets: ['Poor: 1–30%', 'Fair: 31–60%', 'Good: 61–90%', 'Excellent: 91–100%'],
      },
      {
        heading: 'QuickFire speaking results',
        paragraphs: ['QuickFire challenges test retention and speaking under time pressure, and report:'],
        bullets: ['Accuracy', 'Fluency', 'Articulation', 'Speed'],
      },
      {
        heading: 'Built on OSIE, our Offline Speech Intelligence Engine',
        bullets: [
          'Speech is analysed on the device, not uploaded to the cloud',
          'Feedback is instant and works fully offline',
          'Learners can play back their recording and try again',
          'CEFR aligned content from A1–A2 to C1–C2',
        ],
      },
    ],
    faqs: [
      { q: 'Is the voice recording uploaded?', a: 'No. Speech analysis happens on the device.' },
      { q: 'Can nowUKan be used for speaking assessment in schools and universities?', a: 'Yes. nowUKan provides scalable speaking assessment, with real-time analysis and personalised feedback for every learner.' },
      { q: 'Does assessment work offline?', a: 'Yes. Scoring and feedback run on the device after installation.' },
    ],
  },
  {
    slug: 'procurement',
    kind: 'trust',
    eyebrow: 'Procurement',
    heading: 'Buying nowUKan for Your Organisation',
    title: 'Procurement & Volume Licences for Organisations | nowUKan',
    description:
      'How organisations buy nowUKan: prepaid volume licences at fixed, transparent pricing, with no recurring subscriptions. Pilots, white-label and bespoke options.',
    lead: 'nowUKan is bought once, not rented. Organisations purchase prepaid user licences in volume, at fixed, transparent pricing, with no recurring subscription to renew.',
    sections: [
      {
        heading: 'How purchasing works',
        bullets: [
          'Book a consultation with a senior member of our team',
          'We recommend the right combination of scale, access and value for your objectives',
          'Purchase prepaid user licences in volume',
          'Distribute licences across your teams, schools, programmes or partner networks',
          'Add users as your requirements change or your programme grows',
        ],
      },
      {
        heading: 'Why budget holders choose nowUKan',
        bullets: [
          'Predictable expenditure with fixed, transparent pricing',
          'No recurring subscriptions or per-month fees',
          'No administration of individual learner subscriptions',
          'New content and updates at no extra charge',
          'Lower cost because learning does not rely on cloud processing',
        ],
      },
      {
        heading: 'Options',
        bullets: [
          'Pilot programme for larger institutions and government bodies',
          'Whole-school and campus licences',
          'White-label, customisation and bespoke content, subject to volume',
          'Minimum order requirements apply to the Enterprise Programme',
        ],
      },
    ],
    faqs: [
      { q: 'Is nowUKan a subscription?', a: 'No. Licences are a one-off purchase with lifetime access and no recurring fees.' },
      { q: 'Can we get volume pricing?', a: 'Yes. Book a consultation and our team will provide the best pricing options for your organisation.' },
      { q: 'Can we trial it before buying?', a: 'Individuals can try nowUKan free for 7 days. Larger institutions and government bodies can run a pilot programme.' },
    ],
  },
  {
    slug: 'accessibility',
    kind: 'trust',
    draft: true,
    eyebrow: 'Accessibility',
    heading: 'Accessible English Learning',
    title: 'Accessibility: English Learning for Everyone | nowUKan',
    description:
      'How nowUKan makes English learning accessible: offline use, low-cost devices, native-language support, no adverts and learning at your own pace.',
    lead: 'High-quality English learning should be accessible, inclusive and affordable. nowUKan is designed to remove the barriers of cost, connectivity and confidence.',
    sections: [
      {
        heading: 'Removing barriers',
        bullets: [
          'Affordable: one low, one-off payment with no subscriptions',
          'Offline: works without internet after installation',
          'Low-cost devices: being optimised for lower-specification Android and iOS phones and tablets',
          'Native-language support: learners choose their language during onboarding',
          'No adverts or distractions',
          'Learn at your own pace, anywhere, at any time',
        ],
      },
    ],
    faqs: [
      { q: 'Can learners use nowUKan in their own language?', a: 'Key instructional content is supported by our UI translation option, chosen during onboarding.' },
    ],
  },
];

export function findInstitutionPage(slug: string): InstitutionPage | undefined {
  return INSTITUTION_PAGES.find((p) => p.slug === slug);
}
