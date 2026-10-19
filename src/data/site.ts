export const contact = {
  name: 'Matthew Denton',
  email: 'mattdenton94@gmail.com',
  whatsappDisplay: '+27 60 802 6755',
  whatsappNumber: '27608026755',
  linkedin: 'https://www.linkedin.com/in/matthew-denton94',
};

export const wa = (text = "Hi Matt, I run an aesthetic clinic and I'd like to talk about getting more consults booked.") =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const auditMsg =
  "Hi Matt, I'd like the free missed-bookings audit.\n\nClinic name:\nWebsite:\nInstagram:";

/* ---------- The pains: what clinic owners recognise ---------- */
export const pains = [
  {
    msg: 'Hi, how much is lip filler?',
    time: '22:41',
    status: 'Seen. Answered at 11:20 the next morning.',
    point: 'Most enquiries arrive after hours. By the time someone replies, she has booked with the clinic that answered first.',
  },
  {
    msg: 'Can I come in on Saturday?',
    time: '14:06',
    status: 'Booked. Never arrived.',
    point: 'No-shows cost you a chair, a practitioner and an hour. One reminder at the right time saves most of them.',
  },
  {
    msg: 'Loved my results! See you soon',
    time: '4 months ago',
    status: 'No message since.',
    point: 'Tox wears off in three to four months. If nobody reminds her, someone else gets the top-up.',
  },
  {
    msg: '❤️ 248 likes',
    time: 'Boosted post',
    status: '0 consults booked.',
    point: 'Likes are not bookings. Ads should be judged on one number: what each booked consult cost you.',
  },
];

/* ---------- The system ---------- */
export type Part = {
  slug: string;
  title: string;
  line: string;
  detail: string;
  items: string[];
};

export const system: Part[] = [
  {
    slug: 'ads',
    title: 'Meta ads that book consults',
    line: 'Campaigns built around your treatments, written to pass Meta review and measured on booked consults, not clicks.',
    detail: 'I plan offers around the treatments with the best margin and the easiest first yes, write ad copy that stays inside Meta\'s rules on health and appearance claims, and track every lead from the ad through to the treatment chair.',
    items: ['Campaign setup and testing', 'Copy that passes ad review', 'Pixel and conversion tracking', 'Cost per booked consult, every month'],
  },
  {
    slug: 'content',
    title: 'UGC and ad creative',
    line: 'Short videos and images that feel like a real client talking, because that is what stops the scroll.',
    detail: 'Real people talking about how they felt before and after their treatment, filmed in your clinic or by creators. I script them, brief them and cut them into ads, so you are not relying on before-and-after photos that Meta often rejects.',
    items: ['Scripts and shot lists', 'Client and creator videos', 'Edited ad cuts in every format', 'Fresh creative before ads tire'],
  },
  {
    slug: 'website',
    title: 'A website built to book',
    line: 'Treatment pages that answer the questions clients are too shy to ask, with booking one tap away on every screen.',
    detail: 'Every treatment gets its own page: what it is, who it suits, what to expect on the day, downtime, aftercare and the practitioner who does it. Each page ends in a consult booking or a WhatsApp message, and every visit is tracked.',
    items: ['A page for every treatment', 'Practitioner profiles and credentials', 'Consult booking on every page', 'Fast, clean and easy to update'],
  },
  {
    slug: 'crm',
    title: 'A CRM built for your clinic',
    line: 'Custom coded around how your clinic actually works, so every enquiry gets answered, booked, reminded and rebooked.',
    detail: 'Not an off-the-shelf tool you have to bend to fit. I build it around your treatments, your team and your booking rules. Every enquiry from Instagram, Facebook, WhatsApp and your website lands in one place, and the follow-ups run on their own.',
    items: ['Every enquiry in one inbox', 'Instant replies, day and night', 'Reminders that cut no-shows', 'Rebooking prompts per treatment'],
  },
];

/* What the monthly report tracks. */
export const metrics = [
  { name: 'Enquiries', note: 'From every channel, counted once' },
  { name: 'Time to first reply', note: 'Because speed decides who gets the booking' },
  { name: 'Consults booked', note: 'Straight from the CRM, not estimated' },
  { name: 'Show rate', note: 'Booked consults that actually arrived' },
  { name: 'Cost per booked consult', note: 'Ad spend divided by real bookings' },
  { name: 'Clients rebooked', note: 'Who came back when their next treatment was due' },
];

/* ---------- Work ---------- */
export type Shot = { src: string; alt: string; kind: 'phone' | 'post' | 'desktop'; caption: string };
export type Result = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  tag: 'My own brand' | 'Client' | 'Ongoing client';
  year: string;
  summary: string;
  lesson: string;
  services: string[];
  url?: string;
  urlLabel?: string;
  tone: 'harlan' | 'pearls' | 'tnt' | 'nafts';
  shots: Shot[];
  /* Leave empty until real numbers are in. Nothing renders while it is empty. */
  results: Result[];
  brief: string;
  built: { title: string; body: string }[];
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: 'harlan',
    name: 'Harlan',
    kind: 'Jewellery gift brand',
    tag: 'My own brand',
    year: '2026',
    summary:
      'My own brand. A guided build-your-box experience where the customer picks three pieces, a box, a note and a delivery date. I run the site, the offer and the Meta ads with my own money.',
    lesson: 'Every ad tactic I recommend to a clinic has been tested on my own budget first.',
    services: ['Shopify', 'Guided booking flow', 'Meta ads', 'Creative'],
    url: 'https://harlan.co.za',
    urlLabel: 'harlan.co.za',
    tone: 'harlan',
    shots: [
      { src: '/work/harlan-home.webp', alt: 'Harlan homepage on a phone: "The gift she\'ll never take off." with a Build Her Box button', kind: 'phone', caption: 'One promise, one button. The visitor knows exactly what to do next.' },
      { src: '/work/harlan-builder.webp', alt: 'Harlan gift builder step one: Choose her 3 pieces, with filters and product cards', kind: 'phone', caption: 'A guided, step-by-step flow. The same thinking makes a consult booking feel easy.' },
      { src: '/work/harlan-occasions.webp', alt: 'Harlan Shop by Occasion section with cards for her birthday, anniversary, for Mom and more', kind: 'phone', caption: 'Shop by occasion. People see their own reason for buying before they see a product.' },
    ],
    results: [],
    brief:
      'A gift is a considered purchase from a brand the buyer has never heard of. Harlan had to feel personal and trustworthy from the first screen, and turn ad traffic into a finished gift box in a few taps.',
    built: [
      { title: 'A guided flow instead of a catalogue', body: 'Pick three pieces, choose the box, add a note, choose delivery speed and a date. Each step asks one question, so nobody gets stuck choosing.' },
      { title: 'Organised around the customer\'s reason', body: 'Birthday, anniversary, for Mom, just because. Visitors start from their own situation, the same way a client starts from her concern, not a product list.' },
      { title: 'Ads I pay for myself', body: 'Meta campaigns, creative and offers tested on my own money and measured on purchases, not reach.' },
    ],
    facts: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Flow', value: '6 guided steps' },
      { label: 'Traffic', value: 'Meta ads' },
      { label: 'Run by', value: 'Me' },
    ],
  },
  {
    slug: 'creative-pearls',
    name: 'Creative Pearls',
    kind: 'Handmade pearl jewellery',
    tag: 'Ongoing client',
    year: '2026',
    summary:
      'Twenty years of handmade pearl jewellery from one maker\'s studio. I refresh the site and brand pieces and run their Meta ads.',
    lesson: 'Beauty-led, product-first ads that sell without the owner on camera.',
    services: ['Shopify', 'Brand', 'Meta ads'],
    url: 'https://creativepearls.co.za',
    urlLabel: 'creativepearls.co.za',
    tone: 'pearls',
    shots: [
      { src: '/work/pearls-home.webp', alt: 'Creative Pearls homepage on a phone: "20 Years. One Pair of Hands."', kind: 'phone', caption: 'Twenty years of craft in one line, then straight into the shop.' },
      { src: '/work/pearls-about.webp', alt: 'Creative Pearls story section with a quote from the founder', kind: 'phone', caption: 'The maker\'s story in her own words, without needing her on camera.' },
    ],
    results: [],
    brief:
      'The product is beautiful and the reputation is real, but the site and the ads needed to carry that story to people who had never met the maker. The creative also had to work without the owner on camera.',
    built: [
      { title: 'Pages that tell the story', body: 'Leading with "20 years, one pair of hands" and the fact that every piece is finished in her own studio.' },
      { title: 'Brand pieces', body: 'A cleaned-up logo and packaging stickers, so an order looks as considered as the jewellery inside it.' },
      { title: 'Meta ads without a face on camera', body: 'Product-led creative: close-ups, hands, packaging and the maker\'s story told in text.' },
    ],
    facts: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Scope', value: 'Site, brand, ads' },
      { label: 'Status', value: 'Ongoing' },
    ],
  },
  {
    slug: 'tnt-fitness',
    name: 'TNT Fitness',
    kind: 'Boxing, strength and self-defence',
    tag: 'Ongoing client',
    year: '2026',
    summary:
      'A full rebuild for a training studio. Real members, real results and real coaches, built to turn a scroll into a booked first session.',
    lesson: 'Proof from real clients, and booking one tap away on every screen.',
    services: ['Website', 'Copywriting'],
    url: 'https://tnt-fitness-ojru0r8zs-matt-517e.vercel.app',
    urlLabel: 'View the site',
    tone: 'tnt',
    shots: [
      { src: '/work/tnt-home.webp', alt: 'TNT Fitness homepage on a phone: members boxing outdoors, headline "You won\'t leave the same." and a booking button', kind: 'phone', caption: 'Real members, one line that sticks, and booking one tap away.' },
      { src: '/work/tnt-fight.webp', alt: 'TNT Fitness section with photo cards for each type of class', kind: 'phone', caption: 'Every offer shown with photos of the real group, not stock.' },
      { src: '/work/tnt-schedule.webp', alt: 'TNT Fitness weekly schedule with today highlighted', kind: 'phone', caption: 'The week at a glance, with today highlighted on its own.' },
    ],
    results: [],
    brief:
      "The studio's strongest selling points were its people: members with real results and coaches who know them by name. None of that came through on the old site. The new one had to show it and still get people booking in one tap.",
    built: [
      { title: 'Real people from the first second', body: 'The hero is members training at dusk, with one line: "You won\'t leave the same." Times and the first-session price sit right under it.' },
      { title: 'A results board', body: 'Before-and-after results from nine members next to reviews in their own words. Proof beats promises.' },
      { title: 'Practitioners up front', body: 'The coaches are introduced by name, with their experience, so a nervous first-timer knows who will look after her.' },
      { title: 'Booking everywhere', body: 'A sticky booking bar on every screen, plus a direct message button to the owner.' },
    ],
    facts: [
      { label: 'Look', value: 'Dark, photo-led' },
      { label: 'Booking', value: 'One tap' },
      { label: 'Year', value: '2026' },
    ],
  },
  {
    slug: 'nafts',
    name: 'Nautical Aerial & Fitness',
    kind: 'Aerial and fitness studio',
    tag: 'Ongoing client',
    year: '2026',
    summary:
      'An editorial site built around real photography, with a specialty for every kind of client, so a serious studio stops looking like a hobby class.',
    lesson: 'Every visitor sees herself in the list before she sees a price.',
    services: ['Website'],
    url: 'https://www.nafts.co.za/',
    urlLabel: 'nafts.co.za',
    tone: 'nafts',
    shots: [
      { src: '/work/nafts-home.webp', alt: 'Nautical Aerial & Fitness homepage on a phone with a black and white studio photo and a booking button', kind: 'phone', caption: 'Real studio photography and booking one tap away.' },
      { src: '/work/nafts-specialties.webp', alt: 'Specialties section listing youth, active ageing, pre and post-natal, mobility and rehab support', kind: 'phone', caption: 'Specialties. Each kind of client finds herself before she finds a price.' },
      { src: '/work/nafts-contact.webp', alt: 'Contact and booking section with a map and studio hours', kind: 'phone', caption: 'Map, hours and booking, always in reach.' },
    ],
    results: [],
    brief:
      'The studio needed to show real credentials and premium positioning, and speak to more than young, flexible people: older clients, pre and post-natal clients and rehab patients too.',
    built: [
      { title: 'Real photos, not stock', body: 'Black-and-white studio photography on deep navy, so the work speaks for itself.' },
      { title: 'Specialties up front', body: 'Active ageing, pre and post-natal, mobility and rehab support listed plainly, the way a clinic lists concerns before treatments.' },
      { title: 'Simple pricing', body: 'Clear cards with one marked best value, and every button leads to a booking.' },
    ],
    facts: [
      { label: 'Look', value: 'Editorial' },
      { label: 'Booking', value: 'WhatsApp' },
      { label: 'Year', value: '2026' },
    ],
  },
];

export const faqs = [
  {
    q: 'Do you only work with aesthetic clinics?',
    a: 'Yes. Medical aesthetics, skin and laser clinics, and injectors running their own practice. Focusing on one kind of business means I already know your treatments, your clients and the rules your ads have to follow.',
  },
  {
    q: 'Can my ads show before-and-after photos?',
    a: 'Meta restricts them, and health and appearance claims are reviewed closely. Depending on where you practise, your professional body may have its own advertising rules too. I write around both, and lean on client stories and UGC that sell without breaking either.',
  },
  {
    q: 'Why a custom CRM instead of an off-the-shelf one?',
    a: "Off-the-shelf tools make you change how your clinic works to fit them. I build the CRM around your treatments, your team and your booking rules, so it does exactly what you need and nothing you'll never use.",
  },
  {
    q: 'Do I have to take everything?',
    a: "No. Some clinics start with the CRM because their enquiries are already coming in and getting lost. Others start with ads. The free audit shows where the biggest leak is, and that's usually the best place to start.",
  },
  {
    q: 'How will I know it is working?',
    a: 'You get a monthly report built from the CRM: enquiries, time to first reply, consults booked, show rate, cost per booked consult and clients rebooked. Real numbers from your own bookings.',
  },
  {
    q: 'Where are you based?',
    a: "I work remotely with clinics wherever they are. Everything runs over video calls, email and WhatsApp, and I'll fit calls around your clinic hours.",
  },
  {
    q: 'How much does it cost?',
    a: "It depends on how many treatments, locations and channels you have, so every clinic gets its own quote after the audit. You'll see the scope and the price in writing before anything starts.",
  },
];
