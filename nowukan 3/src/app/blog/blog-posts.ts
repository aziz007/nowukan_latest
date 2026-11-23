/**
 * nowUKan blog posts.
 *
 * TO ADD A POST: copy one entry below, give it a new unique `slug` (lowercase,
 * words-joined-by-hyphens — it becomes the web address /blog/<slug>), fill in
 * the fields, put the newest post FIRST, then rebuild. The post page, the blog
 * list, the SEO tags and the route are created automatically. Also add the
 * sitemap.xml and the RSS feed update automatically.
 *
 * `body` is simple HTML: <h2>, <h3>, <p>, <ul>/<ol>/<li>, <strong>, <a href="/...">.
 */
export const BLOG_CATEGORIES = [
  'Learning Tips',
  'Guides',
  'For Schools',
  'For Parents',
  'For Organisations',
  'Inside nowUKan',
] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  slug: string;
  title: string;
  /** Optional shorter title for Google results (aim for 60 characters or fewer). */
  seoTitle?: string;
  /** One or two sentences: shown on the blog list and used as the Google description (aim for 120–160 characters). */
  description: string;
  /** YYYY-MM-DD (publish date) */
  date: string;
  /** Optional YYYY-MM-DD: set when you make a meaningful edit to an older post. */
  updated?: string;
  category: BlogCategory;
  readMinutes: number;
  /** Cover image under src/assets (transparent illustrations and app screenshots both work). */
  image: string;
  imageAlt: string;
  body: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'improve-english-pronunciation-tips',
    title: '7 Practical Ways to Improve Your English Pronunciation',
    description:
      'Clear pronunciation builds confidence. Seven practical habits you can start today, from shadowing to recording yourself and focusing on sounds.',
    date: '2026-10-08',
    category: 'Learning Tips',
    readMinutes: 6,
    image: 'assets/explain/word-speedometer.png',
    imageAlt: 'nowUKan pronunciation score screen with a speedometer-style meter',
    body: `
<p>Many learners understand far more English than they feel comfortable speaking. Often the gap isn't vocabulary or grammar, it's confidence in how the words <em>sound</em>. The good news is that pronunciation is a skill like any other: it improves with focused, regular practice. Here are seven habits that make a real difference.</p>

<h2>1. Listen before you speak</h2>
<p>Pronunciation starts with the ear. Before trying to say a new word or phrase, listen to it several times and notice where the stress falls, which sounds are long or short, and how the words join together. The more clearly you can <em>hear</em> a sound, the easier it becomes to produce it.</p>

<h2>2. Practise in short, frequent sessions</h2>
<p>Ten focused minutes a day is more effective than one long session a week. Short sessions keep your attention sharp, and daily repetition helps new sounds become automatic. Pick a regular time, such as on your commute or after dinner, so practice becomes a habit.</p>

<h2>3. Record yourself and compare</h2>
<p>It's hard to judge your own voice while you're speaking. Record a word or sentence, play it back, and compare it with a model. You'll quickly spot the sounds that need work. This is exactly why nowUKan lets you <strong>play back</strong> each recording and try again: hearing yourself is one of the fastest ways to improve.</p>

<h2>4. Focus on individual sounds</h2>
<p>Every language has sounds that are tricky for its speakers. For some learners it's the difference between "ship" and "sheep"; for others it's the "th" in "think", or the "v" and "w" in "very well". Identify the two or three sounds that cause you the most trouble and practise them in short word lists.</p>
<p>Detailed feedback helps here. In the <a href="/english-pronunciation-app">nowUKan pronunciation app</a>, each practice word is broken down into its individual sounds, each scored from <strong>Poor</strong> to <strong>Excellent</strong>, so you can see which part of a word needs attention instead of guessing.</p>

<h2>5. Pay attention to word stress</h2>
<p>English listeners rely heavily on stress, meaning which syllable is said more strongly. "PHO-to-graph", "pho-TO-gra-pher" and "pho-to-GRAPH-ic" share the same letters but different stress patterns. Getting the stress right often makes you easier to understand than getting every individual sound perfect.</p>

<h2>6. Shadow real speech</h2>
<p>"Shadowing" means listening to a short piece of natural English and repeating it immediately, copying the rhythm, speed and intonation as closely as you can. Start with single phrases, then build up to short conversations. It trains your mouth to follow the natural flow of English rather than speaking word by word.</p>

<h2>7. Move from words to real conversation</h2>
<p>Pronouncing single words well is a great start, but real communication happens in phrases and dialogue. Once a word feels comfortable, practise it inside a phrase, then inside a short conversation. That's the idea behind the nowUKan learning journey: <strong>Words</strong>, then <strong>Phrases</strong>, then <strong>Dialogue</strong>, then a <strong>QuickFire</strong> challenge to test your recall.</p>

<h2>Be patient, and celebrate progress</h2>
<p>Pronunciation improves gradually. Keep your recordings from week one and listen to them a month later; the difference is often surprising. Every small improvement makes you easier to understand, and every conversation builds the confidence to have the next one.</p>
`,
  },
  {
    slug: 'learn-english-offline',
    title: 'Learning English Without the Internet: Why Offline Learning Matters',
    seoTitle: 'Learn English Offline: Why It Matters',
    description:
      'Millions of learners have slow, costly or unreliable internet. Here is why offline-first English learning removes a real barrier, and how it works.',
    date: '2026-10-06',
    category: 'Inside nowUKan',
    readMinutes: 5,
    image: 'assets/img/offline-install-graphic.webp',
    imageAlt: 'Phone downloading the nowUKan app, with offline and verified icons',
    body: `
<p>For many people around the world, the biggest obstacle to learning English isn't motivation or ability, it's connectivity. Mobile data can be expensive, Wi-Fi can be unreliable, and in many rural areas there is simply no stable connection at all. A learning app that needs to be online all the time quietly excludes the very people who could benefit most.</p>

<h2>The hidden cost of "always online"</h2>
<p>Most learning apps stream lessons, audio and speech analysis from the cloud. That works well on fast connections, but it creates problems elsewhere:</p>
<ul>
  <li><strong>Data costs:</strong> streaming audio and video every day can use a significant share of a learner's mobile data.</li>
  <li><strong>Interruptions:</strong> a lesson that freezes or fails halfway through breaks concentration and motivation.</li>
  <li><strong>Exclusion:</strong> learners in remote areas, on the move, or in places with limited infrastructure can't practise reliably.</li>
</ul>

<h2>How nowUKan works offline</h2>
<p>nowUKan was designed around a simple idea: <strong>install once, learn anywhere</strong>. Once the app is installed, learning, practice and speech feedback all happen <strong>on the device itself</strong>. There's no need to stay connected to practise words, phrases, dialogue or QuickFire challenges.</p>
<p>The pronunciation analysis runs directly on the phone or tablet too. That means learners get instant feedback on their speech without their voice being uploaded anywhere, which is good for reliability and for privacy.</p>

<h2>Who benefits most</h2>
<ul>
  <li><strong>Learners in rural and remote communities</strong>, where connectivity is limited or expensive.</li>
  <li><strong>Schools and training programmes</strong> that can't rely on stable Wi-Fi in every classroom.</li>
  <li><strong>Refugee and integration programmes</strong>, where learners may not have regular internet access.</li>
  <li><strong>Commuters and travellers</strong> who want to practise on the train, on a plane, or anywhere without signal.</li>
</ul>

<h2>Learning that fits real life</h2>
<p>When learning doesn't depend on a connection, it can fit into the small moments of everyday life: ten minutes on the bus, a quiet break at work, an evening at home. Those short, regular sessions are exactly what builds lasting progress.</p>
<p>Want to see how it works? Read about our <a href="/offline-english-learning">offline English learning app</a>, try nowUKan with our <a href="/download">free 7-day trial</a>, or read about the <a href="/installation">installation and device requirements</a>.</p>
`,
  },
  {
    slug: 'nowukan-learning-journey-explained',
    title: 'Words, Phrases, Dialogue, QuickFire: The nowUKan Learning Journey Explained',
    seoTitle: 'The nowUKan Learning Journey Explained',
    description:
      'A step-by-step look at how the nowUKan learning journey builds English skills, from single words to real conversations and a final QuickFire challenge.',
    date: '2026-10-03',
    category: 'Inside nowUKan',
    readMinutes: 5,
    image: 'assets/explain/words-title.webp',
    imageAlt: 'nowUKan WORDS section title screen with the learning journey progress bar',
    body: `
<p>Learning a language works best when each step builds on the last. The nowUKan learning journey follows a clear four-stage path, so learners always know where they are, what comes next, and how far they've come.</p>

<h2>Stage 1: Words</h2>
<p>Everything starts with individual words. Learners choose a topic and skill level, listen to each word, then record themselves saying it. nowUKan analyses the recording and shows a pronunciation score, with a breakdown of the individual sounds, so it's clear exactly what to work on.</p>
<p>Lessons can be <strong>saved or repeated</strong>, and repetition is encouraged: saying a word correctly several times is what turns it from something you know into something you can use.</p>

<h2>Stage 2: Phrases</h2>
<p>Once the words are familiar, learners see how they come together in meaningful phrases, such as "Acknowledge a familiar face with a smile". Practising words in context improves rhythm, linking and natural intonation, and the results show how well each word in the phrase was pronounced.</p>

<h2>Stage 3: Dialogue</h2>
<p>Next, learners practise real-world dialogue using the words and phrases they've already learned. This is where vocabulary turns into communication: responding naturally, building fluency, and gaining the confidence to take part in everyday conversations.</p>

<h2>Stage 4: QuickFire</h2>
<p>The final stage tests pronunciation, listening and memory recall together. Learners hear ten words or phrases once, then record what they heard in a single attempt. It's a focused challenge that builds concentration and shows how much has really stuck.</p>

<h2>Awards and progress</h2>
<p>Completing the journey earns awards, and achievements can be saved, repeated or shared. Seeing progress clearly is a powerful motivator, especially for younger learners and for anyone returning to English after a long break.</p>

<h2>Why a structured path works</h2>
<p>A clear structure removes the guesswork. Instead of wondering what to study next, learners follow a proven sequence, from recognising sounds, to using them in context, to communicating confidently. And because nowUKan works offline after installation, the whole journey is available anywhere.</p>
<p>See it in action on our <a href="/learning-method">learning method</a> page, explore the <a href="/learn-english">Real-Life English Map</a>, or start a <a href="/download">free 7-day trial</a>.</p>
`,
  },
  {
    slug: 'one-time-purchase-vs-subscription',
    title: 'One-Time Purchase vs Monthly Subscription: What English Learners Should Know',
    seoTitle: 'One-Time Purchase vs Subscription for English Apps',
    description:
      'Subscriptions can quietly cost far more than they seem. A simple guide to comparing learning app pricing before you commit.',
    date: '2026-09-30',
    category: 'Guides',
    readMinutes: 4,
    image: 'assets/img/pricing-coin.webp',
    imageAlt: 'Gold coin with a price tag',
    body: `
<p>Language learning takes time. Most people need months or years of regular practice to become confident speakers. That makes the way an app is priced just as important as the price itself.</p>

<h2>How subscriptions add up</h2>
<p>A monthly subscription can look affordable at first glance, but the cost repeats for as long as you keep learning. Over one, two or three years, the total can be many times the monthly figure, and many learners keep paying for months they don't actually use. Subscriptions also tend to renew automatically, which makes them easy to forget.</p>

<h2>Questions to ask before you choose an app</h2>
<ul>
  <li><strong>What is the total cost over a year, or two?</strong> Multiply the monthly price, not just today's offer.</li>
  <li><strong>What happens if I stop paying?</strong> Do I lose access to everything I've learned?</li>
  <li><strong>Can I try it first?</strong> A free trial lets you check the app suits your learning style.</li>
  <li><strong>Does it work without the internet?</strong> Ongoing data costs are a hidden part of the price.</li>
  <li><strong>Are there adverts?</strong> Some "cheaper" apps are paid for with constant interruptions.</li>
</ul>

<h2>The nowUKan approach</h2>
<p>nowUKan uses a simple model: an exceptionally low <strong>one-time payment</strong> for <strong>lifetime access</strong>. There are no recurring monthly fees, no adverts interrupting your learning, and all future updates are included. Because the app works offline after installation, there are no ongoing data costs to practise either.</p>
<p>nowUKan is an <a href="/english-learning-app-without-subscription">English learning app without a subscription</a>. You can <a href="/download">try it free for 7 days</a> before deciding, and buying directly through our website is the most cost-effective way to purchase.</p>

<h2>For organisations</h2>
<p>Schools, colleges, employers and government programmes often need licences for many learners at once. We offer volume pricing and pilot programmes, so organisations can evaluate nowUKan with a group of learners before rolling out at scale. See our <a href="/enterprise">Enterprise programme</a> or <a href="/book-a-consultation">book a consultation</a>.</p>
`,
  },
  {
    slug: 'school-english-pilot-programme-guide',
    title: 'How to Run a Successful English Language Pilot in Your School',
    seoTitle: 'How to Run an English Language Pilot in Your School',
    description:
      'Planning to trial a new English learning tool? A practical guide to setting goals, choosing a group, measuring progress and deciding on a wider rollout.',
    date: '2026-09-26',
    category: 'For Schools',
    readMinutes: 6,
    image: 'assets/img/pilot-programme.webp',
    imageAlt: 'Learners and a tutor gathered around a glowing open book with goal and progress icons',
    body: `
<p>Introducing a new learning tool across a whole school is a big decision. A well-run pilot lets you test it with a smaller group first, gather real evidence, and decide with confidence. Here's a simple framework that works for schools, colleges and training providers.</p>

<h2>1. Set clear goals</h2>
<p>Start by agreeing what success looks like. For English language development, goals might include:</p>
<ul>
  <li>improved pronunciation and speaking confidence;</li>
  <li>more independent practice outside lessons;</li>
  <li>better engagement from learners who are less confident in class;</li>
  <li>support for learners with English as an additional language.</li>
</ul>
<p>Keep the list short. Two or three clear goals are easier to measure than ten vague ones.</p>

<h2>2. Choose the right group</h2>
<p>Pick a group that reflects the learners you'd eventually roll out to: a class, a year group, or an intervention group. Make sure at least one enthusiastic member of staff is involved; a teacher who champions the pilot makes a big difference to engagement.</p>

<h2>3. Plan how it fits into the timetable</h2>
<p>Decide when learners will use the tool: during lessons, in tutor time, as homework, or a mix. Short, regular sessions of ten to fifteen minutes usually work better than occasional long ones. Because nowUKan works offline after installation, it can be used even where classroom Wi-Fi is limited.</p>

<h2>4. Measure a baseline, then measure again</h2>
<p>Record where learners start, for example a short speaking task, a confidence survey, or teacher observations, and repeat the same measures at the end of the pilot. Combine numbers with feedback from learners and teachers: what did they enjoy, what was difficult, and would they keep using it?</p>

<h2>5. Run it for long enough</h2>
<p>A pilot needs enough time for habits to form and progress to show. Agree a fixed period up front, such as half a term, so everyone knows when the review will happen.</p>

<h2>6. Review and decide</h2>
<p>At the end, bring the evidence together: progress against your goals, usage, feedback and cost. Then decide whether to scale up, adjust the approach, or stop. A good pilot gives you a clear answer either way.</p>

<h2>Piloting nowUKan</h2>
<p>We work with schools, colleges, universities and education programmes to run measured nowUKan pilots before wider rollout, with tailored pricing for organisations. Find out more about our <a href="/institutions/pilot-programme">School Pilot Programme</a> or <a href="/book-a-consultation">book a consultation</a> with our team.</p>
`,
  },
  {
    slug: 'privacy-in-language-learning-apps',
    title: 'Your Voice, Your Data: Why Privacy Matters in Language Learning Apps',
    seoTitle: 'Privacy in Language Learning Apps: Why It Matters',
    description:
      'Speaking practice means recording your voice. What to look for in a learning app’s privacy approach, and why on-device speech analysis matters.',
    date: '2026-09-22',
    category: 'Guides',
    readMinutes: 4,
    image: 'assets/img/data-security.webp',
    imageAlt: 'Gold shield and padlock protecting learner data',
    body: `
<p>Pronunciation practice means recording your own voice, often many times a day. For children, students and adult learners alike, that's personal data. It's worth knowing where those recordings go and what happens to them.</p>

<h2>Questions to ask about any learning app</h2>
<ul>
  <li><strong>Where is my voice analysed?</strong> On my device, or uploaded to a server?</li>
  <li><strong>Is my data sold or used for advertising?</strong> Check the privacy policy, not just the marketing.</li>
  <li><strong>Are there adverts or trackers?</strong> Ad-supported apps often collect more data to target adverts.</li>
  <li><strong>What does the app need permission for?</strong> A learning app shouldn't need far more access than its features require.</li>
  <li><strong>Is it suitable for younger learners?</strong> Schools and parents should check how children's data is handled.</li>
</ul>

<h2>Why on-device analysis matters</h2>
<p>When speech analysis happens on the device itself, recordings don't need to be sent across the internet to be scored. That reduces the amount of personal data leaving the device, and it has a practical benefit too: feedback is instant and works without a connection.</p>

<h2>The nowUKan approach</h2>
<p>nowUKan uses <strong>on-device speech analysis and voice technology</strong>, works <strong>offline</strong> after installation, shows <strong>no adverts</strong>, and follows a <strong>zero data mining</strong> approach: we don't sell or mine learners' personal information. You can read the details on our <a href="/data-security">Data Security</a> page and in our <a href="/legal/privacy">Privacy Policy</a>.</p>

<h2>Privacy builds confidence</h2>
<p>Learners, especially younger ones, practise more freely when they feel safe. Knowing that your practice stays private makes it easier to try, make mistakes, and try again, which is exactly how speaking skills improve.</p>
`,
  },
  {
    slug: 'build-confidence-speaking-english',
    title: 'How to Build Confidence Speaking English (Even If You Feel Shy)',
    seoTitle: 'How to Build Confidence Speaking English',
    description:
      'Nervous about speaking English? Practical, low-pressure ways to build speaking confidence, from private practice to small daily wins.',
    date: '2026-10-30',
    category: 'Learning Tips',
    readMinutes: 3,
    image: 'assets/img/mission-students-abc.webp',
    imageAlt: 'Group of smiling learners around a glowing ABC speech bubble, practising English together',
    body: `
<p>Many people can read an English article, follow a film with subtitles and write a careful email, yet freeze when they have to speak. If that sounds familiar, you are not alone. Speaking confidence is rarely about how much English you know. It is about how comfortable you feel using what you know, out loud, in front of other people.</p>
<p>The encouraging part is that confidence can be trained. Below are practical steps that help learners move from "I understand but I can't speak" to having real conversations.</p>

<h2>Why speaking feels harder than other skills</h2>
<p>Reading and writing give you time. You can pause, check a word and correct a sentence before anyone sees it. Speaking happens in real time, often with someone waiting for your answer. Add the worry of being misunderstood or judged on your accent, and it is easy to see why many learners stay quiet.</p>
<p>The solution is not to wait until your English is "perfect". It is to create situations where speaking feels safe, then gradually make them more challenging.</p>

<h2>1. Start with private practice</h2>
<p>The lowest-pressure place to speak English is on your own. Read short phrases aloud, describe what you are doing as you cook, or answer imaginary questions about your day. Nobody is listening, so mistakes cost nothing.</p>
<p>This is one reason nowUKan is built around <a href="/english-speaking-practice">English speaking practice</a> on your own device. You record a word or phrase, hear it back and try again as many times as you like. Because speech analysis happens <strong>on the device</strong>, your practice stays private.</p>

<h2>2. Learn phrases, not just words</h2>
<p>Confidence grows when you have ready-made language for common situations. Instead of building every sentence from single words, learn complete phrases such as "Could you say that again, please?", "I'm looking for…" or "What do you mean by…?". These chunks let you respond quickly without translating in your head.</p>
<p>nowUKan's learning journey moves from <strong>Words</strong> to <strong>Phrases</strong> to <strong>Dialogue</strong> for exactly this reason, and the app includes over 30,000 commonly used English phrases.</p>

<h2>3. Measure progress you can see</h2>
<p>Feeling stuck damages confidence. Seeing improvement builds it. Keep a simple record of what you practise, or use tools that show your progress. In nowUKan, each word is scored sound by sound from <strong>Poor</strong> to <strong>Excellent</strong>, and QuickFire results show accuracy, fluency, articulation and speed, so you can watch your scores rise over time.</p>

<h2>4. Accept "good enough" communication</h2>
<p>The goal of speaking is to be understood, not to sound like a newsreader. Native speakers make mistakes, pause, and restart sentences all the time. If your message gets across, the conversation is a success. Focus on clarity and rhythm before trying to remove every trace of your accent.</p>

<h2>5. Prepare for real situations</h2>
<p>Think about the conversations you will actually have this week: ordering in a café, speaking to a colleague, calling a doctor's surgery, or talking to your child's teacher. Write down three or four phrases you are likely to need and practise them aloud beforehand. Walking into a situation prepared makes a huge difference.</p>

<h2>6. Build up to real conversations</h2>
<p>Once private practice feels easier, take small steps outward: a short exchange with a shop assistant, a question in a meeting, a few minutes chatting with a friend who speaks English. Each small success makes the next one easier.</p>

<h2>Small wins add up</h2>
<p>Confidence is built through many small, positive experiences, not one big leap. Practise a little every day, notice your progress, and give yourself credit for every conversation you start. If you would like a private, structured place to practise, you can <a href="/download">try nowUKan free for 7 days</a>.</p>
`,
  },
  {
    slug: 'digital-inclusion-offline-english-learning',
    title: 'Digital Inclusion: Why Offline English Learning Matters',
    description:
      'Not every learner has reliable internet or data. Why offline-capable language learning helps organisations reach more people, more fairly.',
    date: '2026-10-27',
    category: 'For Organisations',
    readMinutes: 3,
    image: 'assets/img/vision-breaking-barriers.webp',
    imageAlt: 'Learners walking through a broken wall towards a glowing globe, symbolising barriers being removed',
    body: `
<p>Much of today's learning technology quietly assumes that everyone has fast, affordable and reliable internet. For many learners that is simply not true. Mobile data can be expensive, rural connections can be patchy, and community centres, shelters and temporary accommodation may have little or no Wi-Fi.</p>
<p>When a learning tool depends on a constant connection, the people with the fewest resources are often the ones left behind. That is why digital inclusion should be part of every conversation about language provision.</p>

<h2>What does digital inclusion mean for language learning?</h2>
<p>Digital inclusion means making sure people can benefit from digital tools regardless of their income, location or circumstances. For English learning, it raises practical questions:</p>
<ul>
  <li>Can learners practise without paying for mobile data?</li>
  <li>Does the app still work in areas with weak or no signal?</li>
  <li>Is the cost affordable for individuals and for organisations working with tight budgets?</li>
  <li>Is it simple enough for learners with limited digital experience?</li>
  <li>Does it support learners whose English is still at an early stage?</li>
</ul>

<h2>The hidden cost of "always online"</h2>
<p>Streaming audio and video lessons can use a lot of data. Learners on pay-as-you-go plans may ration their practice, or stop altogether when their data runs out. Unreliable connections cause buffering, failed uploads and frustration, which can quietly push learners away from their studies.</p>
<p>For organisations, an always-online tool can also mean extra spending on infrastructure, devices with data contracts, or Wi-Fi in every learning space.</p>

<h2>How offline capability changes the picture</h2>
<p>Once installed, nowUKan can operate <strong>offline</strong> (see <a href="/offline-english-learning">how offline English learning works</a>). Learners can continue practising without relying on a continuous internet connection, and pronunciation feedback is produced by <strong>on-device speech analysis</strong> powered by OSIE, our Offline Speech Intelligence Engine. That means:</p>
<ul>
  <li>Practice is not interrupted by poor signal.</li>
  <li>Learners are not using mobile data every time they speak.</li>
  <li>Voice recordings do not need to be uploaded to be scored.</li>
  <li>Learning can happen at home, on the move, or in community settings.</li>
</ul>

<h2>Affordability is part of inclusion</h2>
<p>Recurring subscriptions can be a barrier for individuals and a budgeting headache for organisations. nowUKan uses a <strong>one-time, low-cost payment</strong> with no recurring subscription fees, which makes it easier to plan programmes and extend support to more learners. Organisations can <a href="/book-a-consultation">book a consultation</a> to discuss volume licences.</p>

<h2>Supporting learners at lower levels of English</h2>
<p>Inclusion also means helping learners who are just starting out. During onboarding, learners choose their native language so they can navigate the app and access translation support where it may be needed. They can switch this off at any time as their confidence grows. Read more on our <a href="/translations">Translation Support</a> page.</p>

<h2>Who benefits most?</h2>
<p>Offline, affordable English learning is particularly valuable for <a href="/ngos-charities">NGOs and charities</a>, <a href="/local-authorities">local authorities</a>, <a href="/refugee-integration">refugee integration programmes</a>, <a href="/government">government initiatives</a> and <a href="/adult-education">adult education</a> providers, as well as individual learners in rural or low-connectivity areas.</p>

<h2>Designing for everyone</h2>
<p>When we design learning for the people with the least access, we usually end up with something better for everyone: faster, simpler, more private and more affordable. If your organisation is working to widen access to English, we would be glad to <a href="/contact">talk with you</a>.</p>
`,
  },
  {
    slug: 'useful-english-phrases-for-work',
    title: '40 Useful English Phrases for the Workplace',
    description:
      'Essential English phrases for meetings, emails, phone calls and small talk at work, with tips on practising them so they come naturally.',
    date: '2026-10-24',
    category: 'Guides',
    readMinutes: 3,
    image: 'assets/explain/phrases-record.webp',
    imageAlt: 'nowUKan phrase practice screen with a phrase to read aloud and a record button',
    body: `
<p>You can know a lot of English and still feel unsure at work, because workplace communication relies on set phrases: polite ways to interrupt, ask for help, disagree or close a conversation. Learning these phrases as complete units helps you respond quickly and sound natural.</p>
<p>Here are 40 useful phrases, grouped by situation.</p>

<h2>Starting and joining conversations</h2>
<ul>
  <li>Good morning, how are you getting on?</li>
  <li>Have you got a minute?</li>
  <li>Sorry to interrupt, but…</li>
  <li>Do you mind if I join you?</li>
  <li>How was your weekend?</li>
</ul>

<h2>In meetings</h2>
<ul>
  <li>Could we start with…?</li>
  <li>Can I just add something here?</li>
  <li>I see what you mean, but…</li>
  <li>That's a good point.</li>
  <li>Could you explain that in a bit more detail?</li>
  <li>Let's come back to that later.</li>
  <li>So, to summarise…</li>
  <li>What are the next steps?</li>
</ul>

<h2>Asking for help or clarification</h2>
<ul>
  <li>Could you say that again, please?</li>
  <li>Sorry, I didn't quite catch that.</li>
  <li>What do you mean by…?</li>
  <li>Could you show me how to do this?</li>
  <li>Just to check I've understood…</li>
  <li>Who should I speak to about…?</li>
</ul>

<h2>Agreeing and disagreeing politely</h2>
<ul>
  <li>I completely agree.</li>
  <li>That makes sense.</li>
  <li>I'm not sure about that.</li>
  <li>I see it slightly differently.</li>
  <li>Have we considered…?</li>
</ul>

<h2>On the phone</h2>
<ul>
  <li>Hello, this is … speaking.</li>
  <li>Could I speak to…, please?</li>
  <li>I'm calling about…</li>
  <li>Could you hold for a moment, please?</li>
  <li>I'll put you through.</li>
  <li>Can I take a message?</li>
</ul>

<h2>Emails and messages</h2>
<ul>
  <li>I hope you're well.</li>
  <li>Thank you for getting back to me.</li>
  <li>Please find attached…</li>
  <li>Just a quick reminder that…</li>
  <li>Please let me know if you have any questions.</li>
</ul>

<h2>Customers and visitors</h2>
<ul>
  <li>How can I help you today?</li>
  <li>Let me check that for you.</li>
  <li>I'm sorry for the inconvenience.</li>
  <li>Is there anything else I can help with?</li>
  <li>Thank you for your patience.</li>
</ul>

<h2>How to make these phrases stick</h2>
<p>Reading a list is a start, but phrases only become useful when you can say them without thinking. Try these steps:</p>
<ol>
  <li><strong>Choose five phrases</strong> you will genuinely need this week.</li>
  <li><strong>Say them aloud</strong>, focusing on rhythm and which words are stressed.</li>
  <li><strong>Record yourself</strong> and listen back. Does it sound smooth and clear?</li>
  <li><strong>Use them</strong> in a real conversation as soon as you can.</li>
  <li><strong>Review</strong> them again a few days later.</li>
</ol>
<p>nowUKan's <strong>Phrases</strong> stage is designed for this kind of practice: you read the phrase, record it, get pronunciation feedback and can play it back and try again. It is a quick, private way to rehearse before the real thing.</p>

<h2>For employers</h2>
<p>Clear workplace communication supports teamwork, customer service and career progression. If you would like to support your staff's English, see how nowUKan works for <a href="/employers">employers</a>, or read our guide to <a href="/workplace-english">workplace English</a>.</p>
`,
  },
  {
    slug: 'why-employers-invest-in-english-training',
    title: 'Why Employers Invest in English Language Training for Staff',
    description:
      'How workplace English training supports communication, safety, customer service, integration and career progression, and how to make it affordable.',
    date: '2026-10-21',
    category: 'For Organisations',
    readMinutes: 3,
    image: 'assets/img/employee-growth.webp',
    imageAlt: 'Employees climbing a golden staircase towards a trophy, representing career growth',
    body: `
<p>Many organisations employ talented people whose first language is not English. They bring valuable skills, experience and perspectives. Yet when language becomes a barrier, everyone loses out: the employee may struggle to progress, teams communicate less effectively, and customers may receive a weaker experience.</p>
<p>Supporting staff to develop their English is one of the most practical investments an employer can make.</p>

<h2>The business case for workplace English</h2>
<h3>Clearer everyday communication</h3>
<p>Instructions, handovers, meetings and quick conversations all run more smoothly when everyone can understand each other and feels confident asking questions.</p>
<h3>Safer workplaces</h3>
<p>In many roles, understanding instructions and being able to report a problem clearly is essential to working safely.</p>
<h3>Better customer service</h3>
<p>Employees who feel confident speaking English can help customers more effectively and handle questions or complaints with less stress.</p>
<h3>Integration and wellbeing</h3>
<p>Language is about belonging as well as information. Staff who can join in conversations, share ideas and build relationships with colleagues are more likely to feel part of the team.</p>
<h3>Career progression and retention</h3>
<p>Communication skills often decide who is ready for promotion, training or new responsibilities. Investing in English shows employees that the organisation values their development.</p>

<h2>Common obstacles, and how to overcome them</h2>
<ul>
  <li><strong>Time:</strong> shift patterns make classroom courses difficult. Short, self-paced practice on a phone fits around work.</li>
  <li><strong>Cost:</strong> per-person subscriptions add up across a workforce. A one-time licence cost is easier to budget for.</li>
  <li><strong>Confidence:</strong> some employees feel embarrassed practising in front of colleagues. Private practice on their own device helps.</li>
  <li><strong>Connectivity:</strong> not every workplace or home has reliable internet. Offline learning removes that barrier.</li>
</ul>

<h2>How nowUKan supports employers</h2>
<p>nowUKan helps employees improve vocabulary, pronunciation and practical communication through a structured journey from <strong>Words</strong> to <strong>Phrases</strong> to <strong>Dialogue</strong> and <strong>QuickFire</strong> challenges. It works <strong>offline</strong> after installation, analyses speech <strong>on the device</strong>, contains <strong>no adverts</strong>, and follows a <strong>zero data mining</strong> approach. Organisations pay a one-time cost with no recurring subscription fees.</p>
<p>It can support workforce development, customer communication, employee integration and the growth of international business. See our guide to <a href="/workplace-english">workplace English</a>.</p>

<h2>Getting started</h2>
<p>A good way to begin is with a small group: choose a team, set a simple practice routine, and gather feedback after a few weeks. To discuss volume licences or our Enterprise Programme, <a href="/book-a-consultation">book a consultation</a> with a senior member of our team, or read more on our <a href="/employers">Employers</a> page.</p>
`,
  },
  {
    slug: 'improve-english-listening-skills',
    title: 'How to Improve Your English Listening Skills: 8 Proven Strategies',
    seoTitle: '8 Ways to Improve Your English Listening Skills',
    description:
      'Struggle to follow fast English? Eight practical strategies to improve listening, understand native speakers and connect listening to speaking.',
    date: '2026-10-18',
    category: 'Learning Tips',
    readMinutes: 3,
    image: 'assets/explain/speak-playback.jpg',
    imageAlt: 'nowUKan word practice screen showing the word "ticket" with listen and record buttons',
    body: `
<p>Listening is often the skill that makes learners feel most frustrated. You may know every word in a sentence when you see it written down, but when someone says it quickly, it seems to disappear. That is completely normal. Spoken English joins words together, shortens sounds and changes rhythm in ways textbooks rarely show.</p>
<p>Here are eight strategies to help your ears catch up with your knowledge.</p>

<h2>1. Listen to short pieces many times</h2>
<p>Rather than listening to a long podcast once, choose a 30-second clip and listen to it several times. Each time you will understand a little more. Repetition trains your brain to recognise sounds and patterns.</p>

<h2>2. Focus on the main idea first</h2>
<p>You do not need to understand every word. On the first listen, ask yourself: who is speaking, what is the topic, and how do they feel? Then listen again for details.</p>

<h2>3. Learn how words connect</h2>
<p>In natural English, "What do you want to do?" can sound like "Whaddaya wanna do?". Words link together, and small words like "to", "and" and "of" are often reduced. Once you know these patterns, fast speech becomes much easier to follow.</p>

<h2>4. Pay attention to stress and rhythm</h2>
<p>English speakers stress the important words in a sentence and move quickly over the others. Listening for the stressed words helps you pick out the key information.</p>

<h2>5. Listen and repeat</h2>
<p>Listening and speaking support each other. When you repeat what you hear, you notice details you would otherwise miss. In nowUKan, every word and phrase can be heard first, then recorded and compared, building the connection between what you hear and what you say.</p>

<h2>6. Use a range of voices</h2>
<p>People speak at different speeds and with different accents. Mix your listening: conversations, short videos, radio and announcements. The more voices you hear, the more flexible your listening becomes.</p>

<h2>7. Listen to real-life English</h2>
<p>Focus on the English you will actually need: everyday conversations in shops, at work, at the doctor's or on public transport. nowUKan's <strong>Dialogue</strong> stage is built around <a href="/real-life-english">real-world conversations</a> rather than textbook language you are unlikely to use.</p>

<h2>8. Make it daily</h2>
<p>Ten minutes of focused listening every day is more effective than an hour once a week. Link it to something you already do, such as your commute, a walk, or making dinner.</p>

<h2>Listening builds confidence</h2>
<p>When you can follow what people say, you feel more relaxed in conversations and more willing to speak. Keep practising, be patient with yourself, and celebrate the moments when you suddenly understand something that used to be a blur. Want to put this into practice? <a href="/download">Start a free 7-day trial</a>.</p>
`,
  },
  {
    slug: 'supporting-eal-learners-in-schools',
    title: 'Supporting EAL Learners in School: A Practical Guide for Teachers',
    seoTitle: 'Supporting EAL Learners: A Guide for Teachers',
    description:
      'Practical strategies for supporting pupils with English as an Additional Language, from welcoming new arrivals to building speaking confidence.',
    date: '2026-10-13',
    category: 'For Schools',
    readMinutes: 3,
    image: 'assets/img/academia.webp',
    imageAlt: 'Celebrating students in school uniform around a golden trophy, with letters A, B and C',
    body: `
<p>Many classrooms include pupils who are learning English as an Additional Language (EAL). Some arrive with strong English; others are just beginning. Many are also adjusting to a new country, a new school and new routines. With the right support, EAL learners often make rapid progress and bring a great deal to the school community.</p>
<p>This guide brings together practical ideas teachers can use straight away.</p>

<h2>1. Make the first days welcoming</h2>
<ul>
  <li>Learn how to pronounce the pupil's name correctly.</li>
  <li>Pair them with a friendly buddy, ideally one who shares their language if possible.</li>
  <li>Use visual timetables and labels around the classroom.</li>
  <li>Teach essential survival phrases early: "Can I go to the toilet?", "I don't understand", "Can you help me?"</li>
</ul>

<h2>2. Value the home language</h2>
<p>A pupil's first language is an asset, not a problem. Encouraging learners to use it to think, plan or discuss ideas can help them understand new content while their English develops. Inviting them to share words from their language with the class also builds belonging.</p>

<h2>3. Use visuals and gestures</h2>
<p>Pictures, diagrams, real objects and gestures make lessons more accessible to everyone. Model tasks before asking pupils to do them, and break instructions into short steps.</p>

<h2>4. Teach key vocabulary explicitly</h2>
<p>Identify the essential words for each topic and introduce them before the lesson. Revisit them often. Learners need to hear and use a new word many times before it becomes part of their vocabulary.</p>

<h2>5. Build speaking confidence</h2>
<p>EAL learners may understand far more than they can say, and some go through a "silent period" where they listen before speaking. Give them low-pressure chances to speak: answering in pairs before sharing with the class, using sentence starters, or practising privately first.</p>
<p>This is where technology can help. With nowUKan, pupils can practise words and phrases on a device, hear their own recording and try again, getting pronunciation feedback without the pressure of speaking in front of classmates.</p>

<h2>6. Extend practice beyond the classroom</h2>
<p>Progress speeds up when learners practise little and often, including at home. Because nowUKan works <strong>offline</strong> after installation, pupils can keep practising even if their family has limited internet access. Learners can also choose their native language during onboarding to access translation support while their English develops.</p>

<h2>7. Track progress in small steps</h2>
<p>Celebrate small gains: a new phrase used correctly, a question asked in class, a clearer pronunciation score. Visible progress keeps motivation high for both pupils and staff.</p>

<h2>Privacy and safeguarding</h2>
<p>When choosing digital tools for children, always check how their data is handled. nowUKan contains <strong>no adverts</strong>, analyses speech <strong>on the device</strong>, and follows a <strong>zero data mining</strong> approach. See our <a href="/data-security">Data Security</a> page for details.</p>

<h2>Try it with your school</h2>
<p>Schools can explore nowUKan through a <a href="/institutions/pilot-programme">pilot programme</a> before a wider rollout. You can also enter our competition to <a href="/win-free-english">win free lifetime English for your entire school</a>.</p>
`,
  },
  {
    slug: 'help-your-child-learn-english-at-home',
    title: 'How to Help Your Child Learn English at Home',
    description:
      'Simple, fun ways parents can support children learning English at home, even if your own English is still developing.',
    date: '2026-09-19',
    category: 'For Parents',
    readMinutes: 3,
    image: 'assets/journey/K2.jpg',
    imageAlt: 'nowUKan junior-style home screen with colourful topic cards such as Alphabet, Sounds and Greetings',
    body: `
<p>Children are wonderful language learners. They are curious, they love to copy sounds, and they are usually less afraid of making mistakes than adults. As a parent, you do not need to be a teacher, or even fluent in English yourself, to help. What matters most is making English a regular, enjoyable part of family life.</p>

<h2>1. Keep it short and fun</h2>
<p>Young children learn best in short bursts. Five or ten minutes of playful practice every day is far better than a long session that ends in tears. Stop while it is still fun, so they look forward to next time.</p>

<h2>2. Start with sounds and the alphabet</h2>
<p>Recognising the letters of the alphabet and the sounds of English gives children a strong foundation for reading, spelling and speaking. Sing alphabet songs, play "I spy" with letter sounds, and point out letters on signs and packaging.</p>
<p>nowUKan includes dedicated sections on the English alphabet and English phonetic sounds, and a junior-style home screen with colourful topics such as greetings and farewells (see the <a href="/learn-english/a1-a2">A1–A2 beginner level</a>).</p>

<h2>3. Use English in daily routines</h2>
<p>Choose a few moments each day to use simple English together: counting stairs, naming colours while getting dressed, saying "please" and "thank you" at mealtimes, or saying goodnight. Routines make repetition natural.</p>

<h2>4. Read together</h2>
<p>Picture books are perfect for language learning. Point to pictures, name objects, and ask simple questions: "Where is the cat?", "What colour is the ball?". Re-reading favourite books helps children remember words.</p>

<h2>5. Encourage speaking, and praise effort</h2>
<p>When your child tries to say something in English, praise the effort rather than correcting every mistake. If they say a word incorrectly, simply repeat it back correctly in a natural way: "Yes, it's a <em>banana</em>!"</p>

<h2>6. Learn alongside them</h2>
<p>If you are learning English too, say so. Children love being "the teacher", and practising together builds confidence for both of you. Many families find that learning side by side becomes a shared activity they enjoy.</p>

<h2>7. Choose safe, ad-free tools</h2>
<p>Screen time can be valuable when it is purposeful and safe. Look for apps without adverts, without pressure to buy add-ons, and with a clear approach to children's privacy. nowUKan has <strong>no adverts</strong>, analyses speech <strong>on the device</strong> and follows a <strong>zero data mining</strong> approach. It also works <strong>offline</strong> after installation, so practice can happen anywhere.</p>

<h2>8. Celebrate progress</h2>
<p>Keep a simple chart of new words learned, or celebrate when they earn awards in an app. Recognising progress helps children see themselves as successful English speakers.</p>

<h2>Learning as a family</h2>
<p>The most important thing you can give your child is encouragement. A relaxed, positive attitude to English at home will help them far more than perfect grammar. If you would like to try a structured, child-friendly way to practise, you can <a href="/download">try nowUKan free for 7 days</a>, or browse our <a href="/helpful-tips">helpful tips</a>.</p>
`,
  },
  {
    slug: 'daily-english-practice-routine',
    title: 'A 15-Minute Daily English Routine That Actually Works',
    description:
      'No time to study? A simple 15-minute daily routine that covers vocabulary, phrases, listening and speaking, and fits into a busy day.',
    date: '2026-09-16',
    category: 'Learning Tips',
    readMinutes: 3,
    image: 'assets/img/helpful-tips-steps.webp',
    imageAlt: 'Golden figure climbing steps with learning icons towards a graduation cap',
    body: `
<p>One of the most common reasons people give for not improving their English is time. Work, family and everyday life fill the day, and long study sessions feel impossible. The good news is that you do not need hours. Fifteen focused minutes every day, done consistently, can lead to steady and noticeable progress.</p>
<p>Here is a simple routine you can follow.</p>

<h2>Minutes 1–3: Warm up with review</h2>
<p>Start by reviewing what you practised yesterday. Read a few words or phrases aloud. Reviewing before learning something new helps move language into your long-term memory.</p>

<h2>Minutes 4–7: New words</h2>
<p>Learn three to five new words. Listen to each one, say it aloud, and check your pronunciation. Focus on words you will actually use. In nowUKan, the <strong>Words</strong> stage gives you a sound-by-sound score from Poor to Excellent, so you know exactly what to work on.</p>

<h2>Minutes 8–11: Phrases in context</h2>
<p>Words become useful when you can use them in phrases. Practise two or three phrases that include your new words, or that you will need this week. Record yourself, play it back, and try again until it sounds smooth.</p>

<h2>Minutes 12–14: Dialogue or listening</h2>
<p>Listen to a short conversation and repeat parts of it, copying the rhythm and intonation. This connects your vocabulary to real communication.</p>

<h2>Minute 15: Quick challenge</h2>
<p>Finish with a quick self-test: can you remember today's words without looking? nowUKan's <strong>QuickFire</strong> stage is designed to test and reinforce retention, with results for accuracy, fluency, articulation and speed.</p>

<h2>Tips for sticking to the routine</h2>
<ul>
  <li><strong>Attach it to a habit</strong> you already have: after breakfast, on your commute, or before bed.</li>
  <li><strong>Keep your phone ready.</strong> An app that works offline means you can practise on a train, in a waiting room or anywhere without signal.</li>
  <li><strong>Track your streak.</strong> Mark each day you practise. Seeing a chain of days motivates you not to break it.</li>
  <li><strong>Be flexible.</strong> If you only have five minutes, do five. Something is always better than nothing.</li>
  <li><strong>Review weekly.</strong> Once a week, look back at what you have learned and revisit anything that felt difficult.</li>
</ul>

<h2>Consistency beats intensity</h2>
<p>Learners who practise a little every day usually make more progress than those who study for hours occasionally. The routine above covers vocabulary, phrases, listening, speaking and memory in just 15 minutes. Try it for two weeks and notice the difference, and see more ideas for <a href="/english-speaking-practice">daily English speaking practice</a>. You can follow it with nowUKan's structured <a href="/journey">learning journey</a>, and <a href="/download">try it free for 7 days</a>.</p>
`,
  },
  {
    slug: 'english-for-refugees-and-new-arrivals',
    title: 'English Language Support for Refugees and New Arrivals',
    description:
      'Why English matters for integration, the barriers new arrivals face, and how organisations can offer affordable, accessible language support.',
    date: '2026-09-12',
    category: 'For Organisations',
    readMinutes: 3,
    image: 'assets/img/refugee-integration.webp',
    imageAlt: 'Families walking across a golden bridge towards a glowing globe, symbolising integration',
    body: `
<p>For people arriving in a new country, language is the key to almost everything: finding work, registering with a doctor, supporting children at school, understanding official letters, and building friendships. English helps new arrivals build confidence, communicate independently and participate more fully in their new communities.</p>
<p>Yet many face significant barriers to accessing language support. Understanding those barriers is the first step to overcoming them.</p>

<h2>Common barriers to learning English</h2>
<ul>
  <li><strong>Waiting lists:</strong> demand for classes can outstrip available places.</li>
  <li><strong>Time and caring responsibilities:</strong> work, childcare and appointments make fixed class times difficult.</li>
  <li><strong>Cost:</strong> courses, travel and mobile data all cost money.</li>
  <li><strong>Connectivity:</strong> temporary accommodation may have unreliable or no internet.</li>
  <li><strong>Starting level:</strong> some learners are beginning from very little English, and some may have had limited formal education.</li>
  <li><strong>Confidence and wellbeing:</strong> stress and uncertainty can make learning harder, and speaking in front of others can feel daunting.</li>
</ul>

<h2>What effective support looks like</h2>
<h3>Practical, everyday language</h3>
<p>New arrivals need the English for real situations first: greetings, shopping, appointments, transport, work and school. Learning that is relevant to daily life is more motivating and immediately useful.</p>
<h3>Flexibility</h3>
<p>Learners benefit from being able to practise at any time, alongside formal classes where available, rather than only at fixed times.</p>
<h3>Support in the learner's own language</h3>
<p>At lower levels, being able to navigate with help in your own language reduces frustration. In nowUKan, learners select their native language during onboarding to access translation support where it may be needed.</p>
<h3>Private, judgement-free practice</h3>
<p>Practising pronunciation privately on a phone helps learners build confidence before speaking in public.</p>

<h2>How nowUKan can help</h2>
<p>nowUKan provides an affordable and accessible way to support language development. It helps learners build practical vocabulary, improve pronunciation and develop the confidence needed for everyday communication, education and employment.</p>
<p>Its low, one-time cost and <strong>offline capability</strong> make it particularly suitable for organisations supporting integration, especially where funding or reliable internet access may be limited. Speech is analysed <strong>on the device</strong>, there are <strong>no adverts</strong>, and we follow a <strong>zero data mining</strong> approach.</p>
<p>Our <a href="/real-life-english">real-life English</a> topics, such as <a href="/learn-english/topics/appointments">appointments</a> and <a href="/learn-english/topics/emergency">emergencies</a>, focus on exactly these situations. Whether supporting initial settlement, community integration or longer-term employment and education pathways, nowUKan can complement existing programmes and help extend language support to more people.</p>

<h2>Working together</h2>
<p>If your organisation supports refugees, asylum seekers or other new arrivals, we would be glad to talk. Visit our <a href="/refugee-integration">Refugee Integration</a> page, explore support for <a href="/ngos-charities">NGOs and charities</a>, or <a href="/book-a-consultation">book a consultation</a>.</p>
`,
  },
  {
    slug: 'common-english-pronunciation-mistakes',
    title: '10 Common English Pronunciation Mistakes (and How to Fix Them)',
    seoTitle: '10 Common English Pronunciation Mistakes',
    description:
      'The English pronunciation mistakes learners make most often, from "th" sounds to silent letters and word stress, with simple ways to fix each one.',
    date: '2026-09-09',
    category: 'Learning Tips',
    readMinutes: 3,
    image: 'assets/explain/phrases-results.webp',
    imageAlt: 'nowUKan phrase results screen showing a score for each word from Poor to Excellent',
    body: `
<p>English spelling and pronunciation do not always match, which makes it easy to pick up habits that make you harder to understand. The good news is that most problems come from a small number of common mistakes. Fix these, and your spoken English will sound clearer almost immediately.</p>

<h2>1. The "th" sounds</h2>
<p>English has two "th" sounds: the soft one in "think" and the voiced one in "this". Many learners replace them with "s", "z", "t", "d" or "f". <strong>Fix:</strong> put the tip of your tongue lightly between your teeth and blow air gently. Practise pairs like "sink / think" and "day / they".</p>

<h2>2. Short and long vowels</h2>
<p>"Ship" and "sheep", "full" and "fool", "live" and "leave" differ only in vowel length and quality. Mixing them can change your meaning. <strong>Fix:</strong> practise minimal pairs aloud and record yourself to hear the difference.</p>

<h2>3. "V" and "W"</h2>
<p>"Very well" can become "wery vell". <strong>Fix:</strong> for "v", touch your top teeth to your bottom lip; for "w", round your lips without touching your teeth.</p>

<h2>4. Pronouncing silent letters</h2>
<p>Many English words contain letters that are not pronounced: the "k" in "know", the "b" in "climb", the "l" in "walk", the "w" in "write". <strong>Fix:</strong> learn new words by listening first, not just by reading them.</p>

<h2>5. Adding extra vowels</h2>
<p>Speakers of some languages add a vowel between consonants or at the end of words, so "school" becomes "eschool" or "sport" becomes "sporto". <strong>Fix:</strong> practise consonant clusters slowly, then speed up.</p>

<h2>6. Word stress in the wrong place</h2>
<p>Stress changes how a word sounds, and sometimes its meaning: "REcord" (noun) and "reCORD" (verb). <strong>Fix:</strong> when you learn a word, note which syllable is stressed and exaggerate it while practising.</p>

<h2>7. Pronouncing "-ed" endings as an extra syllable</h2>
<p>"Walked" is one syllable (walkt), not "walk-ed". The "-ed" ending only adds a syllable after "t" or "d" sounds, as in "wanted" or "needed". <strong>Fix:</strong> sort past-tense verbs into three groups by ending sound: /t/, /d/ and /ɪd/.</p>

<h2>8. Flat intonation</h2>
<p>English uses rising and falling tones to show questions, surprise, interest or finality. Speaking with a flat tone can sound unfriendly or unclear. <strong>Fix:</strong> copy short dialogues, matching the speaker's melody, not just the words.</p>

<h2>9. Saying every word with equal weight</h2>
<p>In natural English, important words are stressed and small words ("to", "of", "and", "a") are shortened. <strong>Fix:</strong> underline the key words in a sentence and practise saying them more strongly than the rest.</p>

<h2>10. Speaking too fast</h2>
<p>Learners sometimes speed up to sound fluent, but speed makes errors harder to understand. <strong>Fix:</strong> slow down slightly and focus on clarity. Fluency will come with practice.</p>

<h2>How to find your own mistakes</h2>
<p>Everyone's challenges are different, depending on their first language. The fastest way to find yours is to get specific feedback from an <a href="/english-pronunciation-app">English pronunciation app</a>. nowUKan breaks each word into its individual sounds and scores them from <strong>Poor</strong> to <strong>Excellent</strong>, so you can see exactly which sound needs work. You can then play back your recording and try again until you hear the improvement.</p>
<p>Want more tips? Read our guide to <a href="/blog/improve-english-pronunciation-tips">7 practical ways to improve your pronunciation</a>, or <a href="/download">start a free 7-day trial</a>.</p>
`,
  },
  {
    slug: 'learning-english-as-an-adult',
    title: "Learning English as an Adult: It's Never Too Late",
    description:
      'Adults learn languages differently from children, and have real advantages. How to use them, overcome common obstacles and keep motivated.',
    date: '2026-09-05',
    category: 'Learning Tips',
    readMinutes: 3,
    image: 'assets/img/adult-education.webp',
    imageAlt: 'Adult learners studying English together around a glowing open book and connected globe',
    body: `
<p>Many adults believe they have missed their chance to learn English properly. They worry that their memory is not what it was, that their accent will never change, or that they simply do not have time. These worries are understandable, but they are not a reason to give up. Adults learn languages successfully every day, and they bring strengths that children do not have.</p>

<h2>The advantages adult learners have</h2>
<ul>
  <li><strong>Clear motivation:</strong> you know why you are learning, whether for work, study, family, travel or daily life.</li>
  <li><strong>Life experience:</strong> you understand the situations you need English for and can focus on the language that matters.</li>
  <li><strong>Learning skills:</strong> you know how to organise your time, use strategies and reflect on what works for you.</li>
  <li><strong>Knowledge of your first language:</strong> you can notice similarities and differences, which helps you understand grammar and vocabulary.</li>
</ul>

<h2>Common obstacles, and how to handle them</h2>
<h3>"I don't have time"</h3>
<p>Short, regular practice works. Fifteen minutes a day on your phone, during a commute or lunch break, adds up quickly. See our <a href="/blog/daily-english-practice-routine">15-minute daily routine</a>.</p>
<h3>"I'm embarrassed to speak"</h3>
<p>Start by practising privately. Recording yourself on your own device lets you make mistakes without an audience, then build up to real conversations.</p>
<h3>"I forget words quickly"</h3>
<p>Forgetting is part of learning. Regular review is the answer: revisit words after a day, a few days, and a week. nowUKan lets you save words and phrases to revisit, and its QuickFire stage tests your retention.</p>
<h3>"My accent will never be perfect"</h3>
<p>It does not need to be. The goal is to be clearly understood. Focusing on a few key sounds and on word stress usually makes the biggest difference.</p>

<h2>Learn the English you will actually use</h2>
<p>Adults have limited time, so focus matters. Prioritise the vocabulary and phrases you need for your work, your family and your daily life. nowUKan focuses on real-world English, rather than language you are unlikely to use.</p>

<h2>Combine classes with independent practice</h2>
<p>If you attend an English class, independent practice between lessons helps you remember more and speak with more confidence. Many tutors use nowUKan to reinforce the skills they teach. Read more on our <a href="/adult-education">Adult Education</a> page.</p>

<h2>Learning that fits your life</h2>
<p>nowUKan works <strong>offline</strong> after installation, so you can learn anywhere, and it is an <a href="/english-learning-app-without-subscription">English learning app without a subscription</a>: one payment, no recurring fees. You learn at your own pace, on your own schedule.</p>
<p>It really is never too late. Take the first step today and <a href="/download">try nowUKan free for 7 days</a>.</p>
`,
  },
  {
    slug: 'how-long-does-it-take-to-learn-english',
    title: 'How Long Does It Take to Learn English?',
    description:
      'There is no single answer, but there are clear factors that affect how quickly you learn English. What they are and how to speed up your progress.',
    date: '2026-09-02',
    category: 'Guides',
    readMinutes: 3,
    image: 'assets/explain/quickfire-results.png',
    imageAlt: 'nowUKan QuickFire results screen showing accuracy, fluency, articulation and speed',
    body: `
<p>"How long will it take me to learn English?" is one of the first questions most learners ask. The honest answer is: it depends. Learning a language is not a single finish line but a series of stages, and the time it takes to move through them varies from person to person.</p>
<p>Rather than chasing a number, it helps to understand what affects your progress, so you can focus on the things you can control.</p>

<h2>What does "learning English" mean to you?</h2>
<p>Start by defining your goal. Do you want to:</p>
<ul>
  <li>handle everyday situations such as shopping, travel and appointments?</li>
  <li>hold relaxed conversations with friends and colleagues?</li>
  <li>work confidently in an English-speaking workplace?</li>
  <li>study at college or university in English?</li>
</ul>
<p>Each goal needs a different level of skill. Basic everyday communication can be reached much sooner than the level needed for academic study or professional work.</p>

<h2>Factors that affect how quickly you learn</h2>
<h3>Your starting point</h3>
<p>If you already know some English, you will progress faster than a complete beginner. Your first language matters too: languages that share vocabulary or grammar with English can give you a head start.</p>
<h3>How often you practise</h3>
<p>This is the factor you control most. Regular daily practice, even for a short time, usually leads to faster progress than occasional long sessions.</p>
<h3>How actively you practise</h3>
<p>Speaking, recording yourself and getting feedback is more effective than only reading or passively listening.</p>
<h3>How much English you use</h3>
<p>Using English in real life, at work, with friends or in your community, accelerates learning because it gives you real reasons to communicate.</p>
<h3>Motivation and confidence</h3>
<p>Learners who feel confident to try, make mistakes and try again tend to progress faster than those who stay silent until they feel ready.</p>

<h2>How to speed up your progress</h2>
<ol>
  <li><strong>Set a clear, specific goal</strong> such as "order food confidently" or "take part in team meetings".</li>
  <li><strong>Practise every day</strong>, even if only for 15 minutes.</li>
  <li><strong>Focus on high-frequency language</strong>: the words and phrases you will use most.</li>
  <li><strong>Speak from day one</strong>, privately at first if that helps.</li>
  <li><strong>Get feedback</strong> on your pronunciation so you know what to improve.</li>
  <li><strong>Review regularly</strong> so new words are not forgotten.</li>
  <li><strong>Track your progress</strong> to stay motivated.</li>
</ol>

<h2>Measure progress, not time</h2>
<p>Instead of asking "how long?", ask "am I improving?". Tracking measurable progress keeps you motivated. nowUKan scores pronunciation sound by sound, and its QuickFire results show <strong>accuracy, fluency, articulation and speed</strong>, so you can see your improvement over time.</p>

<h2>Start now</h2>
<p>The best time to start is today. Every word you learn and every phrase you practise moves you closer to your goal. Explore the <a href="/learn-english">Real-Life English Map</a>, follow our structured <a href="/journey">learning journey</a> from Words to Phrases, Dialogue and QuickFire, and <a href="/download">try nowUKan free for 7 days</a>.</p>
`,
  },
  {
    slug: 'english-alphabet-and-phonetic-sounds',
    title: 'English Alphabet and Phonetic Sounds: A Beginner’s Guide',
    description:
      'Why English letters and sounds don’t always match, how phonetic sounds work, and how mastering them improves your reading, spelling and speaking.',
    date: '2026-10-15',
    category: 'Guides',
    readMinutes: 3,
    image: 'assets/explain/word-able.png',
    imageAlt: 'nowUKan phonetic details screen scoring each sound in the word "able"',
    body: `
<p>The English alphabet has 26 letters, but spoken English uses many more sounds than that. This mismatch is why English spelling can feel unpredictable, and why learning the sounds of English, not just the letters, is one of the most useful things a beginner can do.</p>

<h2>Letters are not the same as sounds</h2>
<p>A single letter can make several different sounds. The letter "a" sounds different in "cat", "cake", "father" and "about". At the same time, one sound can be spelled in many ways: the sound in "see" also appears in "sea", "key", "field" and "receive".</p>
<p>That is why reading a new word aloud from its spelling alone is often difficult, and why listening carefully is so important.</p>

<h2>What are phonetic sounds?</h2>
<p>Phonetic sounds (or phonemes) are the individual units of sound that make up spoken words. The word "able", for example, can be broken into separate sounds rather than four letters. Learning to hear and produce each sound clearly gives you a foundation for pronouncing any word, even ones you have never seen before.</p>
<p>English sounds are usually grouped into:</p>
<ul>
  <li><strong>Short vowels</strong>, as in "sit", "bed", "cat", "hot", "cup".</li>
  <li><strong>Long vowels</strong>, as in "see", "car", "saw", "too", "bird".</li>
  <li><strong>Diphthongs</strong>, where one vowel glides into another, as in "day", "my", "boy", "go", "now".</li>
  <li><strong>Consonants</strong>, including pairs like "p/b", "t/d", "f/v" and "s/z", plus sounds like "sh", "ch", "th" and "ng".</li>
</ul>

<h2>Why learning sounds helps every skill</h2>
<ul>
  <li><strong>Speaking:</strong> you can pronounce new words more accurately and be understood more easily.</li>
  <li><strong>Listening:</strong> you recognise words faster when you know which sounds to listen for.</li>
  <li><strong>Reading:</strong> you can decode unfamiliar words instead of guessing.</li>
  <li><strong>Spelling:</strong> you begin to notice common patterns linking sounds to spellings.</li>
</ul>

<h2>How to practise the alphabet and sounds</h2>
<ol>
  <li><strong>Learn letter names and letter sounds separately.</strong> The letter "h" is called "aitch" but sounds like a soft breath in "hat".</li>
  <li><strong>Practise sound pairs</strong> that are easy to confuse, such as "ship/sheep" or "fan/van".</li>
  <li><strong>Listen first, then repeat.</strong> Copy the sound as closely as you can.</li>
  <li><strong>Record yourself</strong> and compare it with the model.</li>
  <li><strong>Get feedback on each sound</strong>, so you know exactly which ones need more work.</li>
</ol>

<h2>How nowUKan helps</h2>
<p>nowUKan includes dedicated sections covering the <strong>English alphabet</strong> and <strong>English phonetic sounds</strong>. When you practise a word, the <a href="/english-pronunciation-app">pronunciation app</a> shows <strong>phonetic details</strong> for each sound with a score band: Poor (1–30%), Fair (31–60%), Good (61–90%) and Excellent (91–100%), along with a tip on which sound to focus on. It is a simple, clear way to understand your pronunciation one sound at a time.</p>
<p>Ready to build strong foundations? Read about our <a href="/learning-method">learning method</a> or <a href="/download">try nowUKan free for 7 days</a>.</p>
`,
  },
];

/**
 * Related guides shown on each post (paths of Learn English and commercial
 * pages). Internal links help Google understand which pages matter most.
 */
export const POST_GUIDES: Record<string, string[]> = {
  'improve-english-pronunciation-tips': ['/english-pronunciation-app', '/english-speaking-practice', '/british-english-learning-app'],
  'learn-english-offline': ['/offline-english-learning', '/english-for-travel', '/learn-english'],
  'nowukan-learning-journey-explained': ['/learn-english', '/english-speaking-practice', '/real-life-english'],
  'one-time-purchase-vs-subscription': ['/english-learning-app-without-subscription', '/offline-english-learning', '/english-speaking-practice'],
  'school-english-pilot-programme-guide': ['/learn-english', '/english-pronunciation-app', '/offline-english-learning'],
  'privacy-in-language-learning-apps': ['/offline-english-learning', '/english-learning-app-without-subscription', '/english-pronunciation-app'],
  'build-confidence-speaking-english': ['/english-speaking-practice', '/learn-english/topics/job-interviews', '/real-life-english'],
  'digital-inclusion-offline-english-learning': ['/offline-english-learning', '/learn-english', '/english-learning-app-without-subscription'],
  'useful-english-phrases-for-work': ['/workplace-english', '/learn-english/topics/job-interviews', '/learn-english/topics/phone-calls'],
  'why-employers-invest-in-english-training': ['/workplace-english', '/learn-english/topics/job-interviews', '/learn-english/b1-b2'],
  'improve-english-listening-skills': ['/real-life-english', '/english-speaking-practice', '/learn-english/topics/airport'],
  'supporting-eal-learners-in-schools': ['/learn-english/a1-a2', '/english-pronunciation-app', '/offline-english-learning'],
  'help-your-child-learn-english-at-home': ['/learn-english/a1-a2', '/english-speaking-practice', '/english-learning-app-without-subscription'],
  'daily-english-practice-routine': ['/english-speaking-practice', '/learn-english/topics/daily-life', '/learn-english'],
  'english-for-refugees-and-new-arrivals': ['/real-life-english', '/learn-english/topics/appointments', '/offline-english-learning'],
  'common-english-pronunciation-mistakes': ['/english-pronunciation-app', '/british-english-learning-app', '/english-speaking-practice'],
  'learning-english-as-an-adult': ['/english-learning-app-without-subscription', '/english-speaking-practice', '/learn-english/b1-b2'],
  'how-long-does-it-take-to-learn-english': ['/learn-english', '/learn-english/a1-a2', '/english-speaking-practice'],
  'english-alphabet-and-phonetic-sounds': ['/english-pronunciation-app', '/learn-english/a1-a2', '/british-english-learning-app'],
};

/** Posts newest first. */
export const SORTED_POSTS = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

export function findPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
