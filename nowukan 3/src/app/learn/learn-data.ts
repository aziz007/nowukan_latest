/**
 * LEARN ENGLISH section: /learn-english, the three level hubs and the topic pages.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * IMPORTANT — the words, phrases and dialogues in TOPIC_PAGES below are DRAFT
 * SAMPLES written for the website. Replace them with real samples from the
 * nowUKan app curriculum, then set TOPIC_PAGES_APPROVED = true.
 *
 * While it is false, topic pages work normally for visitors but carry a
 * "noindex" tag and stay out of sitemap.xml, so Google does not index draft
 * content. The hub and level pages are indexed either way.
 * ───────────────────────────────────────────────────────────────────────────
 *
 * TO ADD A TOPIC PAGE: copy one entry in TOPIC_PAGES, change the slug and the
 * content, and rebuild. The page, route, SEO tags and links appear by themselves.
 */
export const TOPIC_PAGES_APPROVED = false;

export type LevelKey = 'a1-a2' | 'b1-b2' | 'c1-c2';

export interface Level {
  key: LevelKey;
  name: string; // "A1–A2"
  label: string; // "Beginner to Elementary"
  title: string;
  description: string;
  intro: string;
  canDo: string[];
  focus: string[];
}

export const LEVELS: Level[] = [
  {
    key: 'a1-a2',
    name: 'A1–A2',
    label: 'Beginner to Elementary',
    title: 'A1–A2 English Speaking Practice',
    description:
      'Start speaking English from the first lesson. Practise everyday A1–A2 words, phrases and short conversations with instant pronunciation feedback, offline.',
    intro:
      'A1–A2 is where English starts to become useful. You learn the words and short phrases you need for everyday situations, and you practise saying them aloud until they feel natural.',
    canDo: [
      'Greet people, introduce yourself and say goodbye',
      'Ask for and understand simple information: prices, times, directions',
      'Order food, buy things and book simple appointments',
      'Describe your family, your home and your daily routine',
    ],
    focus: ['Core everyday vocabulary', 'Short, high-frequency phrases', 'Clear pronunciation of individual sounds', 'Simple question-and-answer dialogues'],
  },
  {
    key: 'b1-b2',
    name: 'B1–B2',
    label: 'Intermediate to Upper-Intermediate',
    title: 'B1–B2 English Speaking Practice',
    description:
      'Move from simple sentences to real conversations. Practise B1–B2 English for work, study and travel with dialogue practice and pronunciation feedback.',
    intro:
      'At B1–B2 you can already get by. The aim now is to speak with more detail, more accuracy and more confidence: explaining, comparing, giving reasons and dealing with problems when they come up.',
    canDo: [
      'Explain a problem and ask for a solution',
      'Take part in meetings, interviews and phone calls',
      'Describe experiences, plans and opinions with reasons',
      'Handle travel, accommodation and services without help',
    ],
    focus: ['Wider topic vocabulary', 'Longer, more flexible phrases', 'Word stress and natural rhythm', 'Multi-turn dialogues in real situations'],
  },
  {
    key: 'c1-c2',
    name: 'C1–C2',
    label: 'Advanced to Proficient',
    title: 'C1–C2 Advanced English Speaking Practice',
    description:
      'Refine advanced English for professional and academic life. Practise C1–C2 vocabulary, nuanced phrasing and fluent, precise speaking, offline.',
    intro:
      'C1–C2 is about precision and range. You practise the language of professional and academic life: negotiating, persuading, presenting an argument and choosing exactly the right tone.',
    canDo: [
      'Present and defend a point of view clearly',
      'Negotiate, persuade and handle disagreement diplomatically',
      'Discuss complex or abstract topics fluently',
      'Adjust tone and formality to the situation',
    ],
    focus: ['Precise and idiomatic vocabulary', 'Nuanced, diplomatic phrasing', 'Fluency, pace and intonation', 'Extended professional and academic dialogues'],
  },
];

/** The eight public search pillars and the curriculum topic families under each. */
export interface Pillar {
  name: string;
  summary: string;
  topics: string[];
}

export const PILLARS: Pillar[] = [
  {
    name: 'Conversation & Social English',
    summary: 'Meet people, make conversation and build relationships.',
    topics: ['Greetings', 'Farewells', 'Start Chat', 'End Chat', 'Politeness', 'About You', 'Family & Friends', 'Feelings', 'Customs'],
  },
  {
    name: 'Practical Communication',
    summary: 'Get things done: times, dates, directions and calls.',
    topics: ['Numbers', 'Distance', 'Calendar', 'Appointments', 'Directions', 'Connections', 'Help', 'Phone Calls'],
  },
  {
    name: 'Everyday English',
    summary: 'The language of daily life at home and around town.',
    topics: ['Daily Life', 'Weather', 'House & Home', 'Money', 'Food & Drink', 'Shopping', 'Fashion', 'Wellness'],
  },
  {
    name: 'Travel English',
    summary: 'Travel with confidence, from check-in to check-out.',
    topics: ['Transport', 'Airport', 'Accommodation', 'Tourism'],
  },
  {
    name: 'Study, Work & Career English',
    summary: 'English for university, interviews and professional life.',
    topics: ['University', 'Interviews', 'Technology', 'Events', 'Media'],
  },
  {
    name: 'Safety & Society',
    summary: 'Ask for help, discuss the world and give your view.',
    topics: ['Emergency', 'World Talk', 'Debate'],
  },
  {
    name: 'Language Development',
    summary: 'Strengthen the building blocks of accurate English.',
    topics: ['Tenses', 'Idioms'],
  },
  {
    name: 'Descriptive & Lifestyle English',
    summary: 'Describe the world around you and talk about free time.',
    topics: ['Colours', 'Shapes', 'Weight', 'Nature', 'Leisure'],
  },
];

export interface LevelSample {
  words: string[];
  phrases: string[];
  /** [speaker, line] pairs */
  dialogue: [string, string][];
}

export interface TopicPage {
  slug: string;
  /** Name of the curriculum topic family this page belongs to (must match a name in PILLARS). */
  topic: string;
  /** Page heading */
  heading: string;
  /** Google title (60 characters or fewer) */
  title: string;
  description: string;
  situation: string;
  learn: string[];
  samples: Record<LevelKey, LevelSample>;
  /** Phrases for the "Can you say it?" challenge. */
  challenge: string[];
  /** Optional extra guide sections shown after "What you will learn" (answer what people search for). */
  extras?: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
  related: string[];
}

export const TOPIC_PAGES: TopicPage[] = [
  {
    slug: 'job-interviews',
    topic: 'Interviews',
    heading: 'English for Job Interviews',
    title: 'Job Interview English: Self-Introduction & Answers',
    description:
      'How to introduce yourself in English in a job interview, plus common interview questions and answers, key phrases and dialogues from A1 to C2.',
    situation:
      'An interview is high pressure in any language. In English, you need to understand the question quickly, answer clearly and sound confident, all while making a good impression. Preparing the language in advance makes a real difference.',
    learn: [
      'Give a clear self-introduction in English',
      'Answer common interview questions and answers with clear structure',
      'Talk about strengths, weaknesses and achievements',
      'Ask good questions and close the interview politely',
    ],
    samples: {
      'a1-a2': {
        words: ['job', 'interview', 'experience', 'skills', 'team', 'salary'],
        phrases: ['I have two years of experience.', 'I am good at working in a team.', 'I can start next month.', 'Thank you for your time.'],
        dialogue: [
          ['Interviewer', 'Good morning. Please tell me about yourself.'],
          ['Candidate', 'Good morning. My name is Sara. I work in a shop.'],
          ['Interviewer', 'Why do you want this job?'],
          ['Candidate', 'I like helping customers and I want to learn more.'],
        ],
      },
      'b1-b2': {
        words: ['responsibilities', 'achievement', 'deadline', 'strengths', 'qualifications', 'notice period'],
        phrases: [
          'In my current role, I am responsible for customer accounts.',
          'One of my main strengths is staying calm under pressure.',
          "I'm looking for a role where I can develop my skills.",
          'Could you tell me more about the team I would be working with?',
        ],
        dialogue: [
          ['Interviewer', 'Can you give me an example of a problem you solved at work?'],
          ['Candidate', 'Yes. Last year we had a delayed order, so I contacted the supplier and arranged express delivery.'],
          ['Interviewer', 'What was the result?'],
          ['Candidate', 'The customer received it on time and placed a larger order the following month.'],
        ],
      },
      'c1-c2': {
        words: ['track record', 'stakeholder', 'initiative', 'transferable skills', 'remuneration', 'career progression'],
        phrases: [
          'I have a proven track record of delivering projects ahead of schedule.',
          'What attracted me to this position is the scope for strategic influence.',
          'I would describe my leadership style as collaborative but decisive.',
          'How does the organisation measure success in this role over the first year?',
        ],
        dialogue: [
          ['Interviewer', 'How would you handle disagreement with a senior stakeholder?'],
          ['Candidate', 'I would first make sure I fully understood their concerns, then present the evidence behind my recommendation.'],
          ['Interviewer', 'And if they still disagreed?'],
          ['Candidate', "I'd look for common ground and propose a small pilot, so the decision could rest on results rather than opinion."],
        ],
      },
    },
    extras: [
      {
        heading: 'How to introduce yourself in English in a job interview',
        paragraphs: [
          'Most interviews begin with “Tell me about yourself.” Keep your answer to about one minute and follow a simple order: who you are now, your relevant experience, and why you want this job.',
          '“Good morning, and thank you for inviting me. My name is Sara Ahmed. I have three years of experience in customer service, most recently at a busy retail store, where I trained new staff and handled customer complaints. I enjoy solving problems for people, and I’m excited about this role because it would let me use those skills in a larger team.”',
        ],
      },
      {
        heading: 'Common English job interview questions',
        bullets: [
          '“Tell me about yourself.”: a short self-introduction, as above.',
          '“Why do you want this job?”: link your skills to what the company needs.',
          '“What are your strengths?”: one or two strengths, each with a real example.',
          '“What is your biggest weakness?”: a real weakness and what you are doing to improve it.',
          '“Where do you see yourself in five years?”: show ambition that fits the role.',
          '“Do you have any questions for us?”: always ask one, such as “What would success look like in this role?”',
        ],
      },
    ],
    challenge: ['I have two years of experience.', 'One of my main strengths is staying calm under pressure.', 'I have a proven track record of delivering projects ahead of schedule.'],
    related: ['university', 'phone-calls', 'appointments'],
  },
  {
    slug: 'university',
    topic: 'University',
    heading: 'English for University',
    title: 'English for University: Phrases & Practice | nowUKan',
    description:
      'English for university life: vocabulary, phrases and dialogues for lectures, seminars, tutors and campus life, from A1 to C2.',
    situation:
      'University in English means more than understanding lectures. You need to register, talk to tutors, join seminar discussions, work in groups and manage everyday campus life, often in your first weeks in a new country.',
    learn: [
      'Register, find your way around and ask for help on campus',
      'Talk to tutors about deadlines, feedback and extensions',
      'Take part in seminars and group work',
      'Discuss ideas, sources and arguments clearly',
    ],
    samples: {
      'a1-a2': {
        words: ['student', 'lecture', 'library', 'course', 'timetable', 'exam'],
        phrases: ['Where is the library?', 'I am a first-year student.', 'What time is the lecture?', 'Can I borrow this book?'],
        dialogue: [
          ['Student', 'Excuse me, where is room 12?'],
          ['Staff', "It's on the first floor, next to the library."],
          ['Student', 'Thank you. What time does the class start?'],
          ['Staff', 'It starts at ten o’clock.'],
        ],
      },
      'b1-b2': {
        words: ['assignment', 'deadline', 'seminar', 'tutor', 'reference', 'extension'],
        phrases: [
          'Could I ask for an extension on my assignment?',
          "I'm not sure I understood the question. Could you explain it again?",
          'I agree with that point, but I would add something.',
          'When are your office hours this week?',
        ],
        dialogue: [
          ['Student', 'I wanted to ask about the feedback on my essay.'],
          ['Tutor', 'Of course. Your argument was clear, but you need more sources.'],
          ['Student', 'How many references would you expect?'],
          ['Tutor', 'At least eight, and make sure they are recent.'],
        ],
      },
      'c1-c2': {
        words: ['dissertation', 'methodology', 'literature review', 'hypothesis', 'peer review', 'plagiarism'],
        phrases: [
          'My research question focuses on the impact of remote learning on attainment.',
          'The existing literature tends to overlook rural contexts.',
          "I'd challenge that assumption, given the limited sample size.",
          'Could you clarify how the marking criteria weight originality?',
        ],
        dialogue: [
          ['Supervisor', 'How do you intend to justify your methodology?'],
          ['Student', 'A mixed-methods approach lets me combine survey data with in-depth interviews.'],
          ['Supervisor', 'And the limitations?'],
          ['Student', 'The sample is small, so I will be cautious about generalising the findings.'],
        ],
      },
    },
    challenge: ['I am a first-year student.', 'Could I ask for an extension on my assignment?', "I'd challenge that assumption, given the limited sample size."],
    related: ['job-interviews', 'accommodation', 'daily-life'],
  },
  {
    slug: 'airport',
    topic: 'Airport',
    heading: 'English for the Airport',
    title: 'At the Airport: English Phrases & Lesson | nowUKan',
    description:
      'Airport English for every step: check-in, security, boarding and arrivals. Words, phrases and dialogues from A1 to C2, with speaking practice.',
    situation:
      'Airports move fast and the instructions are usually in English. From check-in and security to boarding and passport control, a few well-practised phrases help you stay calm and get where you are going.',
    learn: [
      'Check in, drop bags and ask about your flight',
      'Understand security and boarding instructions',
      'Answer questions at passport control',
      'Deal with delays, cancellations and lost luggage',
    ],
    samples: {
      'a1-a2': {
        words: ['passport', 'ticket', 'gate', 'luggage', 'flight', 'boarding pass'],
        phrases: ['Where is gate 12?', 'Here is my passport.', 'I have one bag.', 'What time does the flight leave?'],
        dialogue: [
          ['Staff', 'Good morning. Can I see your passport, please?'],
          ['Passenger', 'Yes, here you are.'],
          ['Staff', 'Do you have any bags to check in?'],
          ['Passenger', 'Yes, one bag.'],
        ],
      },
      'b1-b2': {
        words: ['departure lounge', 'hand luggage', 'delayed', 'connecting flight', 'customs', 'baggage reclaim'],
        phrases: [
          'Could I have a window seat, please?',
          'My flight has been delayed. Will I make my connection?',
          "I'm here on holiday for two weeks.",
          "My suitcase hasn't arrived. Who should I speak to?",
        ],
        dialogue: [
          ['Officer', 'What is the purpose of your visit?'],
          ['Traveller', "I'm here to study. My course starts next week."],
          ['Officer', 'How long are you planning to stay?'],
          ['Traveller', 'For one year. Here is my university letter.'],
        ],
      },
      'c1-c2': {
        words: ['layover', 'compensation', 'rebooking', 'excess baggage', 'itinerary', 'upgrade'],
        phrases: [
          'Since the flight was cancelled, I would like to be rebooked on the next available service.',
          "I believe I'm entitled to compensation under the airline's policy.",
          'Is there any flexibility on the excess baggage charge?',
          'Could you put that confirmation in writing, please?',
        ],
        dialogue: [
          ['Agent', "I'm afraid the next direct flight is tomorrow evening."],
          ['Passenger', 'That would mean missing my meeting. Is there a route via another city tonight?'],
          ['Agent', 'There is one with a short layover, arriving at seven in the morning.'],
          ['Passenger', 'That works. Could you also arrange for my luggage to be transferred automatically?'],
        ],
      },
    },
    extras: [
      {
        heading: 'Understanding airport announcements in English',
        paragraphs: ['Announcements are fast and often noisy. Listen for these key phrases:'],
        bullets: [
          '“Flight BA 123 to London is now boarding at gate 12.”',
          '“This is the final call for passengers on flight…”',
          '“Flight… has been delayed. Please check the departure boards for updates.”',
          '“Please do not leave your baggage unattended.”',
        ],
      },
    ],
    challenge: ['Where is gate 12?', 'Could I have a window seat, please?', 'I would like to be rebooked on the next available service.'],
    related: ['transport', 'accommodation', 'emergency'],
  },
  {
    slug: 'appointments',
    topic: 'Appointments',
    heading: 'English for Appointments',
    title: 'English for Appointments: Doctor, Bank & More | nowUKan',
    description:
      'Book, change and attend appointments in English. Phrases and dialogues for the doctor, bank and offices, from A1 to C2, with speaking practice.',
    situation:
      'Doctor, dentist, bank, school or government office: much of life is organised by appointment. You need to book the right time, explain why you are coming, and understand what happens next.',
    learn: [
      'Book, change and cancel an appointment',
      'Explain the reason for your visit',
      'Describe symptoms or a problem clearly',
      'Confirm details and next steps',
    ],
    samples: {
      'a1-a2': {
        words: ['appointment', 'doctor', 'today', 'tomorrow', 'morning', 'name'],
        phrases: ['I would like an appointment, please.', 'Is Monday morning possible?', 'I have a headache.', 'My name is Ali Khan.'],
        dialogue: [
          ['Receptionist', 'Good morning. How can I help?'],
          ['Patient', 'I would like to see the doctor, please.'],
          ['Receptionist', 'Is tomorrow at nine o’clock OK?'],
          ['Patient', 'Yes, thank you.'],
        ],
      },
      'b1-b2': {
        words: ['available', 'reschedule', 'symptoms', 'prescription', 'reminder', 'receptionist'],
        phrases: [
          "I need to reschedule my appointment. I can't come on Thursday.",
          "I've had a cough for about two weeks.",
          'Do you have anything available later in the day?',
          'Could you send me a reminder by text?',
        ],
        dialogue: [
          ['Doctor', 'What seems to be the problem?'],
          ['Patient', "I've been having trouble sleeping, and I feel tired all day."],
          ['Doctor', 'How long has this been going on?'],
          ['Patient', 'About a month. It started when I changed jobs.'],
        ],
      },
      'c1-c2': {
        words: ['referral', 'consultation', 'follow-up', 'side effects', 'second opinion', 'confidential'],
        phrases: [
          "I'd like to discuss the options before committing to treatment.",
          'Could you refer me to a specialist?',
          'Are there any side effects I should be aware of?',
          "I'd appreciate a follow-up appointment to review the results.",
        ],
        dialogue: [
          ['Consultant', 'The results suggest we should monitor this rather than operate.'],
          ['Patient', 'What would monitoring involve, and how often?'],
          ['Consultant', 'A scan every six months, and sooner if your symptoms change.'],
          ['Patient', "That sounds sensible. Could I have a copy of the report for my own doctor?"],
        ],
      },
    },
    challenge: ['I would like an appointment, please.', "I need to reschedule my appointment.", 'Could you refer me to a specialist?'],
    related: ['phone-calls', 'emergency', 'daily-life'],
  },
  {
    slug: 'phone-calls',
    topic: 'Phone Calls',
    heading: 'English for Phone Calls',
    title: 'English Phone Conversation Practice & Phrases | nowUKan',
    description:
      'Practise English phone conversations: how to start a call, ask for someone, leave a message and end politely. Phrases and dialogues from A1 to C2.',
    situation:
      'Phone calls are harder than face-to-face conversation. You cannot see the other person, the sound is often poor, and people speak quickly. Set phrases for opening, checking and closing a call make it far easier.',
    learn: ['Start and end a call politely', 'Ask for a person or a department', 'Leave and take messages', 'Check you have understood and ask for repetition'],
    samples: {
      'a1-a2': {
        words: ['hello', 'call', 'number', 'message', 'speak', 'later'],
        phrases: ['Hello, this is Maria.', 'Can I speak to Mr Ahmed, please?', 'Please call me back.', 'Can you repeat that, please?'],
        dialogue: [
          ['Caller', 'Hello, can I speak to Mr Ahmed, please?'],
          ['Receiver', 'Sorry, he is not here.'],
          ['Caller', 'OK. Can I leave a message?'],
          ['Receiver', 'Yes, of course.'],
        ],
      },
      'b1-b2': {
        words: ['extension', 'voicemail', 'hold', 'put through', 'line', 'available'],
        phrases: [
          "I'm calling about my order.",
          'Could you put me through to the accounts department?',
          "Sorry, the line is bad. Could you say that again?",
          'Could you ask her to call me back this afternoon?',
        ],
        dialogue: [
          ['Agent', 'Thank you for calling. How can I help?'],
          ['Customer', "I'm calling about a delivery that hasn't arrived."],
          ['Agent', 'Could I take your order number, please?'],
          ['Customer', "Yes, it's 4-5-7-2. I ordered it last Monday."],
        ],
      },
      'c1-c2': {
        words: ['conference call', 'agenda', 'clarify', 'follow up', 'escalate', 'minutes'],
        phrases: [
          "I'm calling to follow up on the proposal we sent last week.",
          'Just to clarify, are we agreed on the revised timeline?',
          "I'd rather not discuss the figures over the phone. Shall I email them?",
          "I'll summarise the action points in writing after this call.",
        ],
        dialogue: [
          ['Manager', 'Before we finish, can we confirm who is doing what?'],
          ['Colleague', "I'll send the revised budget by Wednesday."],
          ['Manager', 'Good. And I will speak to the client about the delay.'],
          ['Colleague', "Agreed. I'll circulate the notes this afternoon."],
        ],
      },
    },
    challenge: ['Can I speak to Mr Ahmed, please?', 'Could you put me through to the accounts department?', "I'm calling to follow up on the proposal we sent last week."],
    related: ['appointments', 'job-interviews', 'emergency'],
  },
  {
    slug: 'emergency',
    topic: 'Emergency',
    heading: 'English for Emergencies',
    title: 'English for Emergencies: Essential Phrases | nowUKan',
    description:
      'Essential English for emergencies: how to call for help, describe what happened and give your location. Phrases and dialogues from A1 to C2.',
    situation:
      'In an emergency there is no time to search for words. Being able to say what has happened, where you are and what help you need, quickly and clearly, is some of the most important English you will ever learn.',
    learn: ['Call for help and say which service you need', 'Describe what has happened', 'Give your location clearly', 'Understand and follow instructions'],
    samples: {
      'a1-a2': {
        words: ['help', 'police', 'ambulance', 'fire', 'hospital', 'address'],
        phrases: ['Help! I need help.', 'Please call an ambulance.', 'There is a fire.', 'My address is 10 Park Road.'],
        dialogue: [
          ['Operator', 'Emergency. Which service do you need?'],
          ['Caller', 'Ambulance, please.'],
          ['Operator', 'What is your address?'],
          ['Caller', '10 Park Road. My father is ill.'],
        ],
      },
      'b1-b2': {
        words: ['injured', 'unconscious', 'breathing', 'accident', 'witness', 'first aid'],
        phrases: [
          "There's been an accident. Two people are injured.",
          "He's breathing, but he isn't answering me.",
          "I'm on the main road, near the petrol station.",
          'How long will the ambulance take?',
        ],
        dialogue: [
          ['Operator', 'Tell me exactly what happened.'],
          ['Caller', 'A car hit a cyclist. He is lying on the road.'],
          ['Operator', 'Is he conscious and breathing?'],
          ['Caller', "He's breathing, but his leg is bleeding badly."],
        ],
      },
      'c1-c2': {
        words: ['evacuate', 'casualty', 'allergic reaction', 'statement', 'precaution', 'hazard'],
        phrases: [
          "She appears to be having a severe allergic reaction and her throat is swelling.",
          "I've moved everyone away from the building as a precaution.",
          'I witnessed the incident and am willing to give a statement.',
          'Is there anything I should do while we wait for the paramedics?',
        ],
        dialogue: [
          ['Officer', 'Can you describe what you saw?'],
          ['Witness', 'The van came out of the side road without stopping and hit the car on the driver’s side.'],
          ['Officer', 'Did you see the driver afterwards?'],
          ['Witness', 'Yes. He got out, looked at the damage and then drove off towards the town centre.'],
        ],
      },
    },
    challenge: ['Please call an ambulance.', "There's been an accident. Two people are injured.", 'Is there anything I should do while we wait for the paramedics?'],
    related: ['appointments', 'phone-calls', 'transport'],
  },
  {
    slug: 'shopping',
    topic: 'Shopping',
    heading: 'English for Shopping',
    title: 'English for Shopping: Phrases & Dialogues | nowUKan',
    description:
      'English for shopping: ask for sizes and prices, pay, return items and solve problems. Words, phrases and dialogues from A1 to C2.',
    situation:
      'Shopping is one of the first places you use English with strangers. You need to find what you want, ask about size and price, pay, and sometimes take something back, all in short, quick exchanges.',
    learn: ['Ask where things are and how much they cost', 'Talk about sizes, colours and quantities', 'Pay and ask for a receipt', 'Return, exchange or complain about an item'],
    samples: {
      'a1-a2': {
        words: ['shop', 'price', 'size', 'cheap', 'bag', 'receipt'],
        phrases: ['How much is this?', 'Do you have a bigger size?', 'I would like this one, please.', 'Can I pay by card?'],
        dialogue: [
          ['Customer', 'Excuse me, how much is this shirt?'],
          ['Assistant', "It's fifteen pounds."],
          ['Customer', 'Do you have it in blue?'],
          ['Assistant', 'Yes, here you are.'],
        ],
      },
      'b1-b2': {
        words: ['refund', 'exchange', 'discount', 'fitting room', 'in stock', 'faulty'],
        phrases: [
          'Could I try this on, please?',
          "I'd like to return this. It doesn't fit.",
          'Is this included in the sale?',
          "It stopped working after two days. Could I have a refund?",
        ],
        dialogue: [
          ['Customer', "I bought this kettle last week, but it's faulty."],
          ['Assistant', "I'm sorry about that. Do you have the receipt?"],
          ['Customer', "Yes, here it is. I'd prefer an exchange if possible."],
          ['Assistant', "No problem. I'll get you a new one."],
        ],
      },
      'c1-c2': {
        words: ['warranty', 'consumer rights', 'price match', 'bespoke', 'instalments', 'goodwill gesture'],
        phrases: [
          'Would you be able to match the price offered by your competitor?',
          "Given that it's still under warranty, I'd expect a replacement.",
          'Is there any room for negotiation if I buy both?',
          "I'd like to speak to a manager about how this was handled.",
        ],
        dialogue: [
          ['Manager', 'I understand the repair has taken longer than promised.'],
          ['Customer', "Three weeks longer. I've been without a washing machine for a month."],
          ['Manager', 'I can offer a full replacement and waive the delivery charge.'],
          ['Customer', "I'd appreciate that. Could you confirm the delivery date in writing?"],
        ],
      },
    },
    challenge: ['How much is this?', "I'd like to return this. It doesn't fit.", 'Would you be able to match the price offered by your competitor?'],
    related: ['money', 'food-and-drink', 'daily-life'],
  },
  {
    slug: 'food-and-drink',
    topic: 'Food & Drink',
    heading: 'English for Food and Drink',
    title: 'Restaurant English: Food & Drink Phrases | nowUKan',
    description:
      'English restaurant and café phrases: book a table, order, ask about ingredients and pay the bill. Words and dialogues from A1 to C2.',
    situation:
      'Eating out should be enjoyable, not stressful. Whether it is a quick coffee or a business dinner, you need to order what you want, ask about what is in a dish, and deal with the bill politely.',
    learn: ['Book a table and order food and drinks', 'Ask about ingredients and dietary needs', 'Make requests and deal with problems', 'Ask for the bill and pay'],
    samples: {
      'a1-a2': {
        words: ['menu', 'water', 'coffee', 'chicken', 'bill', 'table'],
        phrases: ['A table for two, please.', 'Can I have the menu, please?', 'I would like a coffee.', 'Can I have the bill, please?'],
        dialogue: [
          ['Waiter', 'Hello. Are you ready to order?'],
          ['Customer', 'Yes. I would like the chicken, please.'],
          ['Waiter', 'Anything to drink?'],
          ['Customer', 'Just water, please.'],
        ],
      },
      'b1-b2': {
        words: ['starter', 'main course', 'vegetarian', 'allergy', 'recommend', 'service charge'],
        phrases: [
          "I'd like to book a table for four at eight o'clock.",
          'What would you recommend?',
          "I'm allergic to nuts. Does this dish contain any?",
          "Excuse me, I think there's a mistake on the bill.",
        ],
        dialogue: [
          ['Customer', 'Excuse me, I ordered the fish, but this is chicken.'],
          ['Waiter', "I'm so sorry. I'll change it straight away."],
          ['Customer', 'Thank you. Will it take long?'],
          ['Waiter', 'About ten minutes. Can I bring you some bread while you wait?'],
        ],
      },
      'c1-c2': {
        words: ['tasting menu', 'locally sourced', 'pairing', 'dietary requirements', 'signature dish', 'gratuity'],
        phrases: [
          'Could you talk us through the specials?',
          "We'd like to share a few dishes, if the kitchen can pace them.",
          'Is the lamb locally sourced?',
          'Shall we split the bill, or would you prefer separate cheques?',
        ],
        dialogue: [
          ['Host', 'Have you had a chance to look at the wine list?'],
          ['Guest', "I have. What would you suggest to go with the sea bass?"],
          ['Host', 'A dry white would work well. The house one is excellent.'],
          ['Guest', "Perfect. We'll take a bottle, and some still water for the table."],
        ],
      },
    },
    challenge: ['Can I have the bill, please?', "I'm allergic to nuts. Does this dish contain any?", 'Could you talk us through the specials?'],
    related: ['shopping', 'money', 'daily-life'],
  },
  {
    slug: 'transport',
    topic: 'Transport',
    heading: 'English for Transport',
    title: 'English for Transport: Bus, Train & Taxi | nowUKan',
    description:
      'English for buses, trains and taxis: buy tickets, ask about times and platforms, and deal with delays. Words and dialogues from A1 to C2.',
    situation:
      'Getting around a new place means buying tickets, checking times and platforms, and asking strangers for help. The language is short and practical, and you need it from your first day.',
    learn: ['Buy tickets and ask about prices', 'Ask about times, platforms and stops', 'Take a taxi and give directions', 'Deal with delays and missed connections'],
    samples: {
      'a1-a2': {
        words: ['bus', 'train', 'ticket', 'station', 'stop', 'taxi'],
        phrases: ['A ticket to London, please.', 'Where is the bus stop?', 'What time is the next train?', 'Does this bus go to the city centre?'],
        dialogue: [
          ['Passenger', 'One ticket to Manchester, please.'],
          ['Clerk', 'Single or return?'],
          ['Passenger', 'Return, please. Which platform is it?'],
          ['Clerk', 'Platform three.'],
        ],
      },
      'b1-b2': {
        words: ['platform', 'timetable', 'delay', 'change', 'fare', 'off-peak'],
        phrases: [
          'Do I need to change trains?',
          'Is it cheaper to travel off-peak?',
          'Could you tell me when we reach the hospital stop?',
          "I've missed my connection. When is the next one?",
        ],
        dialogue: [
          ['Passenger', 'Excuse me, is this the train to Leeds?'],
          ['Guard', "No, that one leaves from platform five, and it's running late."],
          ['Passenger', 'How long is the delay?'],
          ['Guard', 'About twenty minutes. You have time for a coffee.'],
        ],
      },
      'c1-c2': {
        words: ['season ticket', 'disruption', 'replacement service', 'congestion', 'reimbursement', 'commute'],
        phrases: [
          "Given the disruption, will my ticket be valid on another operator's service?",
          "I'd like to claim reimbursement for the delay.",
          'Is a season ticket more economical if I commute four days a week?',
          'Could you drop me as close to the entrance as the traffic allows?',
        ],
        dialogue: [
          ['Staff', 'The line is closed, so there is a replacement bus service.'],
          ['Traveller', 'How much longer will that take than the train?'],
          ['Staff', 'Roughly forty minutes more, depending on traffic.'],
          ['Traveller', "In that case I'd rather take a later train. Can my ticket be transferred?"],
        ],
      },
    },
    challenge: ['What time is the next train?', "I've missed my connection. When is the next one?", "I'd like to claim reimbursement for the delay."],
    related: ['airport', 'accommodation', 'money'],
  },
  {
    slug: 'accommodation',
    topic: 'Accommodation',
    heading: 'English for Accommodation',
    title: 'Hotel & Accommodation English Phrases | nowUKan',
    description:
      'Hotel and accommodation English: book a room, check in, report problems and rent a flat. Words, phrases and dialogues from A1 to C2.',
    situation:
      'Whether you are staying one night in a hotel or renting a flat for a year, you need to book, check in, ask for what you need and report problems, often with someone who speaks quickly.',
    learn: ['Book a room and check in and out', 'Ask about facilities and services', 'Report a problem with your room', 'Talk to a landlord or agent about renting'],
    samples: {
      'a1-a2': {
        words: ['room', 'key', 'bed', 'night', 'breakfast', 'reception'],
        phrases: ['I have a reservation.', 'A room for two nights, please.', 'What time is breakfast?', 'The key does not work.'],
        dialogue: [
          ['Receptionist', 'Good evening. Do you have a reservation?'],
          ['Guest', 'Yes. My name is Chen.'],
          ['Receptionist', 'A single room for two nights?'],
          ['Guest', 'Yes, that is right.'],
        ],
      },
      'b1-b2': {
        words: ['deposit', 'check-out', 'landlord', 'rent', 'furnished', 'heating'],
        phrases: [
          'Is breakfast included in the price?',
          "The heating in my room isn't working.",
          'Could I have a late check-out tomorrow?',
          'Is the flat furnished, and are bills included?',
        ],
        dialogue: [
          ['Guest', "Hello, I'm in room 204. The shower has no hot water."],
          ['Reception', "I'm sorry about that. I'll send someone up now."],
          ['Guest', "Thanks. If it can't be fixed, could I change rooms?"],
          ['Reception', "Of course. I'll arrange that for you."],
        ],
      },
      'c1-c2': {
        words: ['tenancy agreement', 'notice period', 'inventory', 'utilities', 'maintenance', 'guarantor'],
        phrases: [
          "Before signing, I'd like to clarify the notice period in the tenancy agreement.",
          'Who is responsible for maintenance and repairs?',
          "I'd expect the deposit to be held in a protected scheme.",
          'Would the landlord consider a longer lease at a lower rent?',
        ],
        dialogue: [
          ['Agent', 'The landlord is asking for six weeks’ deposit.'],
          ['Tenant', "That's higher than usual. Is there any flexibility if I sign for two years?"],
          ['Agent', 'I can put that to him. Would you also need a parking space?'],
          ['Tenant', 'Yes, and I would want the inventory agreed before I move in.'],
        ],
      },
    },
    challenge: ['I have a reservation.', "The heating in my room isn't working.", 'Who is responsible for maintenance and repairs?'],
    related: ['airport', 'transport', 'money'],
  },
  {
    slug: 'money',
    topic: 'Money',
    heading: 'English for Money and Banking',
    title: 'English for Money & Banking: Key Phrases | nowUKan',
    description:
      'English for money and banking: prices, payments, opening an account and sorting out problems. Words, phrases and dialogues from A1 to C2.',
    situation:
      'Money conversations need to be exact. A misunderstood number or a missed word can be costly, so it pays to practise the language of prices, payments, accounts and bills until it is automatic.',
    learn: ['Talk about prices, amounts and change', 'Pay in different ways and ask for receipts', 'Open and use a bank account', 'Query a charge and resolve a problem'],
    samples: {
      'a1-a2': {
        words: ['money', 'cash', 'card', 'bank', 'pound', 'change'],
        phrases: ['How much is it?', 'Can I pay in cash?', 'Where is the nearest bank?', 'Here is your change.'],
        dialogue: [
          ['Cashier', "That's eight pounds fifty, please."],
          ['Customer', 'Here is ten pounds.'],
          ['Cashier', 'Thank you. One pound fifty change.'],
          ['Customer', 'Thank you. Goodbye.'],
        ],
      },
      'b1-b2': {
        words: ['account', 'transfer', 'statement', 'fee', 'exchange rate', 'direct debit'],
        phrases: [
          "I'd like to open a bank account.",
          'How long does an international transfer take?',
          "There's a charge on my statement that I don't recognise.",
          'What is the exchange rate today?',
        ],
        dialogue: [
          ['Adviser', 'What kind of account are you looking for?'],
          ['Customer', 'A current account, with a debit card and online banking.'],
          ['Adviser', 'Do you have proof of address with you?'],
          ['Customer', 'Yes, I have a letter from my employer and my tenancy agreement.'],
        ],
      },
      'c1-c2': {
        words: ['interest rate', 'overdraft', 'mortgage', 'credit score', 'invoice', 'dispute'],
        phrases: [
          "I'd like to dispute this transaction and have it investigated.",
          'What would the repayments be over five years at the current rate?',
          'Are there any penalties for settling the loan early?',
          'Please could you issue a revised invoice reflecting the agreed discount?',
        ],
        dialogue: [
          ['Bank', 'We can offer a fixed rate for two years or a variable rate.'],
          ['Customer', 'What happens at the end of the fixed period?'],
          ['Bank', 'It moves to our standard rate unless you remortgage.'],
          ['Customer', 'Then I would want to know the exit fees before I decide.'],
        ],
      },
    },
    challenge: ['Can I pay in cash?', "I'd like to open a bank account.", "I'd like to dispute this transaction and have it investigated."],
    related: ['shopping', 'accommodation', 'daily-life'],
  },
  {
    slug: 'daily-life',
    topic: 'Daily Life',
    heading: 'English for Daily Life',
    title: 'Everyday English: Daily Life Phrases | nowUKan',
    description:
      'Everyday English for daily life: routines, plans, small talk and the little conversations that fill the day. Words and dialogues from A1 to C2.',
    situation:
      'Most English is not dramatic. It is the small, repeated conversations of ordinary life: talking about your day, making plans, chatting with neighbours and colleagues. These are the exchanges that make you feel at home in a language.',
    learn: ['Describe your routine and your day', 'Make, change and cancel plans', 'Make small talk with neighbours and colleagues', 'Talk about habits, preferences and how you feel'],
    samples: {
      'a1-a2': {
        words: ['morning', 'work', 'home', 'breakfast', 'weekend', 'tired'],
        phrases: ['I get up at seven o’clock.', 'I go to work by bus.', 'What do you do at the weekend?', 'I am tired today.'],
        dialogue: [
          ['Neighbour', 'Good morning! How are you?'],
          ['You', "I'm fine, thank you. And you?"],
          ['Neighbour', 'Very well. Are you going to work?'],
          ['You', 'Yes, I start at nine.'],
        ],
      },
      'b1-b2': {
        words: ['routine', 'commute', 'errands', 'chores', 'catch up', 'day off'],
        phrases: [
          'I usually catch up on housework at the weekend.',
          "Shall we meet for a coffee after work?",
          "Sorry, something's come up. Can we do tomorrow instead?",
          "I've been really busy lately, but things are calming down.",
        ],
        dialogue: [
          ['Colleague', 'Any plans for the weekend?'],
          ['You', "Not much. I need to run a few errands, then I'm seeing friends on Sunday."],
          ['Colleague', 'Sounds nice. We are thinking of going to the coast.'],
          ['You', 'Lovely. I hope the weather holds.'],
        ],
      },
      'c1-c2': {
        words: ['work-life balance', 'unwind', 'hectic', 'downtime', 'juggle', 'priorities'],
        phrases: [
          "I've been trying to strike a better work-life balance.",
          "It's been hectic, so I'm looking forward to some downtime.",
          "I'm juggling a few things at the moment, but I'll make it work.",
          "Let's pencil it in and confirm nearer the time.",
        ],
        dialogue: [
          ['Friend', "You seem a lot more relaxed than last time I saw you."],
          ['You', "I am. I've stopped checking email in the evenings, and it has made a real difference."],
          ['Friend', "I should try that. I can never switch off."],
          ['You', 'It took a while, but once you set the boundary, people adapt.'],
        ],
      },
    },
    challenge: ['I go to work by bus.', 'Shall we meet for a coffee after work?', "I've been trying to strike a better work-life balance."],
    related: ['food-and-drink', 'shopping', 'appointments'],
  },
];

export function findTopicPage(slug: string): TopicPage | undefined {
  return TOPIC_PAGES.find((t) => t.slug === slug);
}

/** Slug of the topic page for a curriculum topic name, if one exists yet. */
export function topicSlug(topicName: string): string | undefined {
  return TOPIC_PAGES.find((t) => t.topic === topicName)?.slug;
}

export function findLevel(key: string): Level | undefined {
  return LEVELS.find((l) => l.key === key);
}

export function pillarOf(topicName: string): Pillar | undefined {
  return PILLARS.find((p) => p.topics.includes(topicName));
}
