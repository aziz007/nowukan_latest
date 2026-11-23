/**
 * FAQ content: used by the /faqs page AND by the FAQPage structured data
 * (SeoService), so Google sees exactly the same questions and answers as visitors.
 * `a` is simple HTML (links allowed). Keep answers factual and up to date.
 */
export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'What are we offering?',
    a: 'Affordable English learning and assessment that builds skills, fluency and confidence, with no recurring subscriptions.',
  },
  {
    q: 'Who is it for?',
    a: 'English learners worldwide, whatever their background, location or fluency level. <a href="/learn-english">See what you can learn</a>.',
  },
  {
    q: 'Is this another subscription app?',
    a: 'No. You pay once for lifetime access. There are no recurring fees or hidden costs. <a href="/pricing">See pricing</a>.',
  },
  {
    q: 'Do you offer a free 7-day trial?',
    a: 'Yes. You can try nowUKan free for 7 days, with no obligation to continue. <a href="/download">Start your free trial</a>.',
  },
  {
    q: 'What makes nowUKan different?',
    a: 'The combination: practical real-world learning, advanced on-device speech analysis, offline use, lifetime ownership and zero data mining. <a href="/benefits">See the benefits</a>.',
  },
  {
    q: 'Why are your prices so low?',
    a: 'Our technology does not rely on cloud processing, so we have removed many of the traditional costs of digital learning. We are putting the user first.',
  },
  {
    q: 'Can I learn offline?',
    a: 'Absolutely. Once the app is installed you can practise anytime, anywhere, with no internet connection needed. <a href="/offline-english-learning">More about offline learning</a>.',
  },
  {
    q: 'What about privacy?',
    a: 'Speech analysis happens on your device, so your voice stays with you. There is no data mining and no advertising. <a href="/data-security">Read about data security</a> and our <a href="/legal/privacy">Privacy Policy</a>.',
  },
  {
    q: 'How does it support learning?',
    a: 'Our four-stage method, Words → Phrases → Dialogue → QuickFire, encourages active practice, builds vocabulary and boosts confidence in everyday communication. <a href="/journey">See the learning journey</a>.',
  },
  {
    q: 'Do you give feedback on my speaking?',
    a: 'Yes. You get real-time analysis and personalised feedback, with each sound scored from Poor to Excellent, all done on your device. <a href="/english-pronunciation-app">How pronunciation feedback works</a>.',
  },
  {
    q: 'Are there any adverts?',
    a: 'No. Learners can progress without any disruption.',
  },
  {
    q: 'Will new content be added?',
    a: 'Yes. New content and updates are added at no extra charge. We are also exploring premium vocational packs for specific professional needs.',
  },
  {
    q: 'Which devices does nowUKan support?',
    a: 'nowUKan runs on Apple iOS 15.0 or later and Android 8.0 (API 26) or later, and it is being optimised for lower-specification phones and tablets so more people can learn. <a href="/installation">Full device specifications</a>.',
  },
  {
    q: 'Can I use nowUKan in my own language?',
    a: 'Key instructional content is supported by our UI translation option. During onboarding you select your native language to help you navigate the app, and you can switch translation off at any time. <a href="/translations">Translation support</a>.',
  },
  {
    q: 'Can it be used in rural communities?',
    a: 'Absolutely. Once installed it runs completely offline, making it ideal for areas with limited or no internet.',
  },
  {
    q: 'Can schools and universities buy it?',
    a: 'Yes. We welcome enquiries from schools, universities and training providers, because learning does not stop when the classroom ends. Schools can start with a <a href="/institutions/pilot-programme">pilot programme</a>.',
  },
  {
    q: 'Can governments and NGOs buy it?',
    a: 'Absolutely. It is a cost-effective way to expand English language teaching programmes and outreach on tight budgets. <a href="/book-a-consultation">Book a consultation</a>.',
  },
  {
    q: 'Can you add content or white-label it?',
    a: 'Yes. Subject to volume and commercial arrangements, we welcome discussions about bespoke content, customisation and white labelling. <a href="/bespoke">Bespoke options</a>.',
  },
  {
    q: 'Are you looking for partners?',
    a: 'Yes. We would like to hear from resellers, distributors, EdTech companies, ELT/ESL professionals and strategic partners who share our vision. <a href="/partner-with-us">Partner with us</a>.',
  },
  {
    q: 'What is your ethos?',
    a: 'High-quality English learning should be accessible, inclusive and affordable, without recurring subscription fees. That is why we have made it happen.',
  },
  {
    q: 'How do I get help?',
    a: 'For general questions email <a href="mailto:support@nowukan.io">support@nowukan.io</a>. For technical issues email <a href="mailto:tech@nowukan.io">tech@nowukan.io</a>. You can also <a href="/contact">contact the team</a>.',
  },
];
