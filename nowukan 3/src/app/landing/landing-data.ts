/**
 * Commercial search landing pages (one page per keyword cluster).
 * TO ADD ONE: copy an entry, change the slug and content, rebuild. The route,
 * SEO tags and sitemap entry are created automatically.
 */
export interface LandingSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LandingPage {
  slug: string;
  eyebrow: string;
  heading: string;
  /** Google title (60 characters or fewer) */
  title: string;
  description: string;
  lead: string;
  image?: string;
  imageAlt?: string;
  sections: LandingSection[];
  faqs: { q: string; a: string }[];
  /** Slugs of related /learn-english/topics pages */
  topics: string[];
  /** Slugs of related landing pages */
  related: string[];
}

const USP_BULLETS = [
  'Low cost, one-off payment: buy once, use for life',
  'No monthly subscriptions',
  'Works fully offline after installation',
  'On-device speech analysis with real-time, personalised feedback',
  'CEFR aligned content and a structured four-stage learning method',
  'Zero data mining. No ads. No distractions.',
  'Learn anywhere, at any time',
  'Start your 7-day free trial today',
];

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'english-pronunciation-app',
    eyebrow: 'Pronunciation',
    heading: 'The English Pronunciation App That Scores Every Sound',
    title: 'English Pronunciation App: Improve Your Pronunciation',
    description:
      'An English pronunciation app that scores every sound. Improve your British English pronunciation with instant feedback, offline, for one payment.',
    lead: 'Say a word, and see exactly which sounds were right and which need work. nowUKan analyses your speech on your own device and gives you feedback in real time, with no internet connection needed.',
    image: 'assets/explain/word-speedometer.png',
    imageAlt: 'nowUKan pronunciation score screen with a speedometer-style meter',
    sections: [
      {
        heading: 'How the pronunciation feedback works',
        paragraphs: [
          'nowUKan is powered by OSIE, our Offline Speech Intelligence Engine. When you record a word or phrase, the app breaks it into its individual sounds and scores each one, from Poor to Excellent. You see which sound to focus on, play back your own recording, and try again as often as you like.',
        ],
        bullets: [
          'A score for every sound in the word, not just a single mark',
          'Playback, so you can hear yourself and compare',
          'Results for accuracy, fluency, articulation and speed in QuickFire',
          'Dedicated sections for the English alphabet and phonetic sounds',
        ],
      },
      {
        heading: 'Private by design',
        paragraphs: [
          'Your voice is analysed on your device. Practice stays private, which makes it easier to try, make mistakes and try again. Zero data mining. No ads. No distractions.',
        ],
      },
      {
        heading: 'From single sounds to real conversation',
        paragraphs: [
          'Good pronunciation is not only about individual words. The nowUKan journey moves from Words to Phrases to Dialogue and then QuickFire, so you practise rhythm, stress and natural speed as well as sounds.',
        ],
      },
      { heading: 'Why learners choose nowUKan', bullets: USP_BULLETS },
    ],
    faqs: [
      { q: 'Can an app really improve my English pronunciation?', a: 'Yes, if it gives you specific feedback and you practise regularly. nowUKan scores each sound in a word, so you know exactly what to change, and lets you play back and try again until it sounds right.' },
      { q: 'Is nowUKan a British English pronunciation app?', a: 'Yes. nowUKan focuses on clear, real-world British English pronunciation.' },
      { q: 'Does the pronunciation feedback work offline?', a: 'Yes. Speech analysis runs on your device, so once the app is installed you can practise and get feedback without an internet connection.' },
      { q: 'Is my voice recording uploaded?', a: 'No. Your speech is analysed on your device.' },
    ],
    topics: ['job-interviews', 'phone-calls', 'daily-life'],
    related: ['british-english-learning-app', 'offline-english-learning', 'real-life-english'],
  },
  {
    slug: 'real-life-english',
    eyebrow: 'Real-Life English',
    heading: 'Real-Life English for the Situations You Actually Meet',
    title: 'Real-Life English: Practical Speaking Practice | nowUKan',
    description:
      'Learn practical, real-life English for work, travel, study and everyday situations. Practise words, phrases and dialogues with speaking feedback.',
    lead: 'nowUKan teaches the English you are most likely to use, not language you will never need. Every topic is built around a real situation: an interview, an appointment, a phone call, a journey.',
    image: 'assets/img/mission-students-abc.webp',
    imageAlt: 'Group of learners practising English together around a glowing ABC speech bubble',
    sections: [
      {
        heading: 'Built around real situations',
        paragraphs: [
          'The nowUKan curriculum covers 44 topic areas in eight pillars, from greetings and daily life to university, interviews and emergencies. You choose what matters to you and practise it until you can say it with confidence.',
        ],
        bullets: [
          'Conversation and social English',
          'Practical communication: appointments, directions, phone calls',
          'Everyday English: money, shopping, food and drink',
          'Travel English: airport, transport, accommodation',
          'Study, work and career English: university and interviews',
        ],
      },
      {
        heading: 'A four-stage method that gets you speaking',
        paragraphs: [
          'Each topic follows the same path: Words → Phrases → Dialogue → QuickFire. You build vocabulary, put it into useful phrases, practise real conversations and then test what you remember.',
        ],
      },
      {
        heading: 'Practice is what makes the difference',
        paragraphs: [
          'Every English learner, at every level, has one thing in common: they need to practise. Regular practice expands vocabulary, improves pronunciation and, most importantly, builds the confidence to use English naturally in real life.',
        ],
      },
      { heading: 'Why learners choose nowUKan', bullets: USP_BULLETS },
    ],
    faqs: [
      { q: 'What level do I need to start?', a: 'Any level. Topics run from A1–A2 everyday situations through to C1–C2 professional communication.' },
      { q: 'Can I choose which topics to study?', a: 'Yes. You learn at your own pace and can focus on the situations that matter most to you.' },
      { q: 'Is there a free trial?', a: 'Yes. You can try nowUKan free for 7 days, with no obligation to continue.' },
    ],
    topics: ['daily-life', 'appointments', 'shopping', 'food-and-drink'],
    related: ['workplace-english', 'english-for-travel', 'english-pronunciation-app'],
  },
  {
    slug: 'workplace-english',
    eyebrow: 'Workplace English',
    heading: 'Workplace English: Speak With Confidence at Work',
    title: 'Workplace English: Learn & Practise English for Work',
    description:
      'Practise English for work: interviews, meetings, phone calls and everyday communication with colleagues and customers. Offline, with speaking feedback.',
    lead: 'From the interview to your first meeting, work runs on clear communication. nowUKan helps you practise the English of professional life, privately, on your own phone, in short sessions that fit around a working day.',
    image: 'assets/img/employee-growth.webp',
    imageAlt: 'Employees climbing a golden staircase towards a trophy, representing career growth',
    sections: [
      {
        heading: 'English for every stage of working life',
        bullets: [
          'Job interviews: introduce yourself, describe experience, answer difficult questions',
          'Phone calls: open, check, leave messages and close politely',
          'Meetings and discussion: give opinions, agree, disagree and summarise',
          'Customers and colleagues: explain, help and solve problems',
        ],
      },
      {
        heading: 'Practice that fits around work',
        paragraphs: [
          'Shifts, commutes and family life leave little time for classes. nowUKan works offline, so you can practise for ten minutes on the bus, in a break or at home, and pick up exactly where you stopped.',
        ],
      },
      {
        heading: 'Private practice builds confidence',
        paragraphs: [
          'Many people feel embarrassed practising in front of colleagues. With on-device speech analysis you can rehearse the phrase you need, hear yourself and improve before you use it for real.',
        ],
      },
      {
        heading: 'For employers',
        paragraphs: [
          'nowUKan supports workforce development, customer communication and employee integration, with a one-time licence cost that is easy to budget for. See our Employers page or book a consultation to discuss volume licences.',
        ],
      },
    ],
    faqs: [
      { q: 'Is nowUKan suitable for professional and advanced English?', a: 'Yes. Topics progress to C1–C2, covering negotiation, diplomacy and precise professional language.' },
      { q: 'Can nowUKan be used for workplace English assessment?', a: 'nowUKan gives every learner real-time speech analysis with scores for accuracy, fluency, articulation and speed, which helps organisations see progress. Book a consultation to discuss assessment for your workforce.' },
      { q: 'Can my company buy licences for staff?', a: 'Yes. Volume licences and our Enterprise Programme are available. Book a consultation to discuss your requirements.' },
      { q: 'Do employees need internet access to use it?', a: 'No. Once installed, the app works fully offline.' },
    ],
    topics: ['job-interviews', 'phone-calls', 'appointments'],
    related: ['real-life-english', 'english-speaking-practice', 'offline-english-learning'],
  },
  {
    slug: 'english-for-travel',
    eyebrow: 'Travel English',
    heading: 'English for Travel: From Check-In to Check-Out',
    title: 'English for Travel: Learn Travel Phrases Offline | nowUKan',
    description:
      'Travel English that works without Wi-Fi: airport, transport, hotel and tourism phrases with speaking practice. Learn offline before and during your trip.',
    lead: 'Travel is when you need English most and have a connection least. nowUKan works fully offline, so you can practise airport, transport and hotel English on the plane, on the train or anywhere with no signal.',
    sections: [
      {
        heading: 'The English every traveller needs',
        bullets: [
          'Airport: check-in, security, boarding, passport control and lost luggage',
          'Transport: tickets, platforms, timetables, taxis and delays',
          'Accommodation: booking, check-in, facilities and problems with your room',
          'Tourism: asking for information, directions and recommendations',
        ],
      },
      {
        heading: 'No roaming charges, no Wi-Fi needed',
        paragraphs: [
          'Once installed, nowUKan runs without an internet connection. Speech analysis happens on your device, so you still get instant pronunciation feedback wherever you are.',
        ],
      },
      {
        heading: 'Useful English phrases for travel',
        bullets: [
          '“Could I have a window seat, please?”',
          '“Which platform does the train to the city centre leave from?”',
          '“I have a reservation under the name…”',
          '“The heating in my room isn’t working.”',
          '“Could you tell me how to get to…?”',
          '“How much is a return ticket?”',
        ],
      },
      {
        heading: 'Be understood the first time',
        paragraphs: [
          'Travel conversations are short and fast. Practising the exact phrases aloud beforehand, and hearing how you sound, means you can say them clearly when it counts.',
        ],
      },
      { heading: 'Why travellers choose nowUKan', bullets: USP_BULLETS },
    ],
    faqs: [
      { q: 'Can I use nowUKan on a flight?', a: 'Yes. After installation the app works offline, including pronunciation feedback.' },
      { q: 'How quickly can I prepare for a trip?', a: 'You choose the topics you need, such as Airport or Accommodation, and practise in short sessions at your own pace.' },
      { q: 'Do I need to pay monthly?', a: 'No. nowUKan is a single one-time payment with lifetime access.' },
    ],
    topics: ['airport', 'transport', 'accommodation', 'emergency'],
    related: ['offline-english-learning', 'real-life-english', 'british-english-learning-app'],
  },
  {
    slug: 'offline-english-learning',
    eyebrow: 'Offline English',
    heading: 'Offline English Learning App: No Internet Needed',
    title: 'Offline English Learning App for Android & iOS | nowUKan',
    description:
      'Learn and practise spoken English fully offline. On-device speech analysis, no data use, no subscription. Ideal for low-connectivity areas.',
    lead: 'Most language apps stop working when the connection does. nowUKan was built the other way round: install it once, and lessons, speaking practice and pronunciation feedback all work without the internet.',
    image: 'assets/img/offline-install-graphic.webp',
    imageAlt: 'Phone downloading the nowUKan app from the cloud, with offline and verified icons',
    sections: [
      {
        heading: 'What works offline',
        bullets: [
          'All learning stages: Words, Phrases, Dialogue and QuickFire',
          'Speech analysis and real-time pronunciation feedback',
          'Playback of your own recordings',
        ],
      },
      {
        heading: 'Why offline matters',
        paragraphs: [
          'Mobile data is expensive, rural connections are unreliable, and many schools and community centres have little or no Wi-Fi. Offline learning means practice is never interrupted, costs nothing in data, and reaches learners that online-only tools leave behind.',
        ],
      },
      {
        heading: 'Lower cost, by design',
        paragraphs: [
          'Because our technology does not rely on cloud processing, we have removed many of the traditional costs of digital learning. That is how nowUKan can be offered for one low, one-time payment with no recurring fees.',
        ],
      },
      {
        heading: 'For schools, NGOs and governments',
        paragraphs: [
          'Offline delivery makes nowUKan a practical choice for rural education, community programmes and low-connectivity regions. Book a consultation to discuss a pilot or volume licences.',
        ],
      },
    ],
    faqs: [
      { q: 'How can I learn English offline?', a: 'Install an app that works without a connection, such as nowUKan, while you have Wi-Fi. After that you can practise words, phrases, dialogues and pronunciation anywhere, with no data.' },
      { q: 'Is there an offline English learning app for Android?', a: 'Yes. nowUKan runs offline on Android 8.0 or later and on iOS 15.0 or later.' },
      { q: 'Do I need the internet at all?', a: 'You need a connection to download and install the app. After that, learning and speech feedback work offline.' },
      { q: 'Does offline mode limit the pronunciation feedback?', a: 'No. Speech analysis runs on your device, so feedback is the same with or without a connection.' },
      { q: 'Which devices are supported?', a: 'iOS 15.0 or later and Android 8.0 or later, with at least 2 GB of RAM and 500 MB of storage. See the Installation page for full specifications.' },
    ],
    topics: ['daily-life', 'transport', 'emergency'],
    related: ['english-pronunciation-app', 'english-for-travel', 'real-life-english'],
  },
  {
    slug: 'british-english-learning-app',
    eyebrow: 'British English',
    heading: 'Learn Real-World British English',
    title: 'British English Learning App: Speak Naturally | nowUKan',
    description:
      'Learn real-world British English with structured progression from A1 to C2, on-device speaking feedback, offline learning and one low, one-time cost.',
    lead: 'nowUKan teaches clear, practical British English: the vocabulary, phrasing and pronunciation used in everyday life, study and work in the UK, organised into a structured path from first words to fluent conversation.',
    sections: [
      {
        heading: 'What makes nowUKan different',
        paragraphs: ['Our strongest advantage is the combination of features, not any single one:'],
        bullets: [
          'Real-world British English, built around everyday situations',
          'Structured progression from A1–A2 to C1–C2',
          'On-device speaking feedback, scored sound by sound',
          'Offline-first: no dependence on the cloud',
          'Lifetime ownership for a one-time cost',
          'Built in the UK. Designed for the world.',
        ],
      },
      {
        heading: 'British vocabulary and phrasing',
        paragraphs: [
          'From “Could I have the bill, please?” to “I’ll put you through”, you practise the words and polite forms people in Britain actually use, in the situations where you will need them.',
        ],
      },
      {
        heading: 'British English vs American English',
        paragraphs: [
          'The differences are mostly in vocabulary, spelling and pronunciation. If you plan to live, study or work in the UK, learning the British forms first will help you sound natural and understand people more easily.',
        ],
        bullets: [
          'Words: flat (apartment), lift (elevator), pavement (sidewalk), queue (line), holiday (vacation), timetable (schedule)',
          'Spelling: colour, centre, organise, travelling, programme',
          'Phrases: “Could I have the bill, please?” (check), “I’ll ring you later” (call)',
          'Accent: clear, natural British pronunciation, practised sound by sound with on-device feedback',
        ],
      },
      {
        heading: 'Preparing for life, study or work in the UK',
        paragraphs: [
          'Topics such as University, Interviews, Appointments, Transport and Accommodation prepare you for the conversations that matter most when you arrive: with tutors, employers, landlords, doctors and neighbours.',
        ],
      },
      { heading: 'Why learners choose nowUKan', bullets: USP_BULLETS },
    ],
    faqs: [
      { q: 'Is nowUKan British or American English?', a: 'nowUKan focuses on real-world British English.' },
      { q: 'Is it suitable for beginners?', a: 'Yes. Learning starts at A1–A2 and progresses in structured steps to C1–C2.' },
      { q: 'How much does it cost?', a: 'A single low, one-time payment for lifetime access, with a free 7-day trial first.' },
    ],
    topics: ['university', 'job-interviews', 'accommodation', 'appointments'],
    related: ['english-pronunciation-app', 'real-life-english', 'workplace-english'],
  },
  {
    slug: 'english-speaking-practice',
    eyebrow: 'Speaking Practice',
    heading: 'English Speaking Practice App: Practise Every Day, Offline',
    title: 'English Speaking Practice App: Daily Practice | nowUKan',
    description:
      'Daily English speaking practice with instant feedback on every sound. Practise words, phrases and real conversations offline, for one low payment.',
    lead: 'Every English learner has one thing in common: they need to practise speaking. nowUKan gives you a private, structured place to do it every day, with feedback on how you sound and no internet needed.',
    image: 'assets/explain/phrases-record.webp',
    imageAlt: 'nowUKan phrase practice screen with a phrase to read aloud and a record button',
    sections: [
      {
        heading: 'How daily speaking practice works',
        paragraphs: [
          'Each topic follows four stages. You build vocabulary in Words, put it into useful Phrases, practise real conversations in Dialogue, and test what you remember in QuickFire. At every stage you speak, hear yourself and get instant feedback.',
        ],
        bullets: [
          'Speak words and phrases aloud and get a score for every sound',
          'Practise real-world dialogues: interviews, appointments, travel, work',
          'Play back your recording and try again as often as you like',
          'QuickFire results for accuracy, fluency, articulation and speed',
        ],
      },
      {
        heading: 'English conversation practice without the pressure',
        paragraphs: [
          'Many learners understand more than they can say, because speaking in front of others feels risky. Practising privately on your own phone lets you make mistakes, fix them and build the confidence to speak for real.',
        ],
      },
      {
        heading: 'Fits into any day',
        paragraphs: [
          'Ten or fifteen minutes a day is enough to make steady progress. Because nowUKan works fully offline after installation, you can practise on a bus, in a break or at home, without using mobile data.',
        ],
      },
      { heading: 'Why learners choose nowUKan', bullets: USP_BULLETS },
    ],
    faqs: [
      { q: 'How can I practise speaking English every day?', a: 'Set a short daily routine: review yesterday’s words, learn a few new phrases, practise one dialogue aloud and finish with a quick challenge. nowUKan is built around exactly this routine.' },
      { q: 'Can I practise speaking English without a partner?', a: 'Yes. You speak to the app, which analyses your pronunciation on your device and gives you instant feedback, so you can practise alone, anywhere.' },
      { q: 'Is there a free trial?', a: 'Yes. You can try nowUKan free for 7 days, with no obligation to continue.' },
    ],
    topics: ['daily-life', 'job-interviews', 'phone-calls', 'shopping'],
    related: ['english-pronunciation-app', 'real-life-english', 'english-learning-app-without-subscription'],
  },
  {
    slug: 'english-learning-app-without-subscription',
    eyebrow: 'No Subscription',
    heading: 'An English Learning App Without a Subscription',
    title: 'English Learning App Without Subscription | nowUKan',
    description:
      'Tired of monthly fees? nowUKan is an English learning app with no subscription: one low, one-off payment for lifetime access. Try it free for 7 days.',
    lead: 'Are you still paying monthly for your English language development? nowUKan works differently: you pay once, and the app is yours for life. No renewals, no hidden costs and no subscription to cancel.',
    image: 'assets/img/pricing-coin.webp',
    imageAlt: 'Golden coin illustrating nowUKan’s one-time payment',
    sections: [
      {
        heading: 'Buy once, use for life',
        paragraphs: [
          'Most language apps charge every month or every year, and stop working the moment you stop paying. With nowUKan you make one affordable payment and keep unlimited lifetime access, with new content and updates added at no extra charge.',
        ],
        bullets: [
          'One low-cost, one-off payment',
          'No monthly or annual subscription',
          'Unlimited lifetime access',
          'New content and updates at no extra charge',
          'Free 7-day trial before you buy',
        ],
      },
      {
        heading: 'Why can nowUKan be so affordable?',
        paragraphs: [
          'Our technology does not rely on cloud processing. Lessons and speech analysis run on your device, so we have removed many of the traditional costs of digital learning, and we pass that saving on to you.',
        ],
      },
      {
        heading: 'Everything included',
        bullets: [
          'All topics and levels, from A1–A2 to C1–C2',
          'Words, Phrases, Dialogue and QuickFire practice',
          'On-device speech analysis with feedback on every sound',
          'Works fully offline after installation',
          'Zero data mining. No ads. No distractions.',
        ],
      },
    ],
    faqs: [
      { q: 'Is nowUKan really a one-time payment?', a: 'Yes. You pay once for lifetime access. There are no recurring fees or hidden costs.' },
      { q: 'Will I have to pay for new content?', a: 'No. New content and updates are added at no extra charge.' },
      { q: 'Can I try it before I buy?', a: 'Yes. You can try nowUKan free for 7 days, with no obligation to continue.' },
    ],
    topics: ['daily-life', 'job-interviews', 'airport'],
    related: ['english-speaking-practice', 'offline-english-learning', 'english-pronunciation-app'],
  },
];

export function findLanding(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}
