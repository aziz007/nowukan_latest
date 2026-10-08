/**
 * nowUKan blog posts.
 *
 * TO ADD A POST: copy one entry below, give it a new unique `slug` (lowercase,
 * words-joined-by-hyphens — it becomes the web address /blog/<slug>), fill in
 * the fields, put the newest post FIRST, then rebuild. The post page, the blog
 * list, the SEO tags and the route are created automatically. Also add the
 * new address to public/sitemap.xml so Google finds it quickly.
 *
 * `body` is simple HTML: <h2>, <h3>, <p>, <ul>/<ol>/<li>, <strong>, <a href="/...">.
 */
export interface BlogPost {
  slug: string;
  title: string;
  /** One or two sentences: shown on the blog list and used as the Google description (aim for 120–160 characters). */
  description: string;
  /** YYYY-MM-DD */
  date: string;
  category: 'Learning Tips' | 'Inside nowUKan' | 'For Schools' | 'Guides';
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
<p>Detailed feedback helps here. In nowUKan, each practice word is broken down into its individual sounds, each scored from <strong>Poor</strong> to <strong>Excellent</strong>, so you can see which part of a word needs attention instead of guessing.</p>

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
<p>Want to see how it works? Try nowUKan with our <a href="/download">free 7-day trial</a>, or read about the <a href="/installation">installation and device requirements</a>.</p>
`,
  },
  {
    slug: 'nowukan-learning-journey-explained',
    title: 'Words, Phrases, Dialogue, QuickFire: The nowUKan Learning Journey Explained',
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
<p>See it in action on our <a href="/learning-method">learning method</a> page, or start a <a href="/download">free 7-day trial</a>.</p>
`,
  },
  {
    slug: 'one-time-purchase-vs-subscription',
    title: 'One-Time Purchase vs Monthly Subscription: What English Learners Should Know',
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
<p>You can <a href="/download">try nowUKan free for 7 days</a> before deciding, and buying directly through our website is the most cost-effective way to purchase.</p>

<h2>For organisations</h2>
<p>Schools, colleges, employers and government programmes often need licences for many learners at once. We offer volume pricing and pilot programmes, so organisations can evaluate nowUKan with a group of learners before rolling out at scale. See our <a href="/enterprise">Enterprise programme</a> or <a href="/book-a-consultation">book a consultation</a>.</p>
`,
  },
  {
    slug: 'school-english-pilot-programme-guide',
    title: 'How to Run a Successful English Language Pilot in Your School',
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
];

/** Posts newest first. */
export const SORTED_POSTS = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

export function findPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
