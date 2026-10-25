export const contact = {
  name: 'Matthew Denton',
  email: 'mattdenton94@gmail.com',
  whatsappDisplay: '+27 60 802 6755',
  whatsappNumber: '27608026755',
  linkedin: 'https://www.linkedin.com/in/matthew-denton94',
};

export const wa = (text = "Hi Matt, I'd like to chat about a project for my business.") =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const projectMsg =
  "Hi Matt, I'd like a quote.\n\nBusiness name:\nWhat I need:\nWebsite or Instagram:";

/* ---------- What I build ---------- */
export type Service = { slug: string; icon: string; title: string; line: string; items: string[] };

export const services: Service[] = [
  { slug: 'websites', icon: 'browser', title: 'Custom websites', line: 'Hand-coded, fast and built to turn visitors into enquiries. No templates that look like everyone else.', items: ['Designed around your brand', 'Fast on every phone', 'Easy for you to update'] },
  { slug: 'booking', icon: 'calendar', title: 'Booking systems', line: 'Clients book and pay on your own site, at any hour, without phoning or messaging first.', items: ['Your services and prices', 'Live availability', 'Automatic confirmations'] },
  { slug: 'crm', icon: 'users', title: 'CRMs', line: 'Every lead, client and conversation in one place, with reminders so nobody gets forgotten.', items: ['Pipeline you can drag', 'Follow-up reminders', 'Built for your team'] },
  { slug: 'back-office', icon: 'grid', title: 'Back offices and dashboards', line: 'The admin side of your business, finally in one system instead of ten spreadsheets.', items: ['Orders, stock and staff', 'Reports at a glance', 'Logins for your team'] },
  { slug: 'stores', icon: 'bag', title: 'Online stores', line: 'Shopify and custom shops that look premium and make checking out effortless.', items: ['Shopify or custom', 'Bundles and gift flows', 'Payments set up'] },
  { slug: 'branding', icon: 'pen', title: 'Logos and branding', line: 'A logo, colours and type that make a small business look established from day one.', items: ['Logo and variations', 'Colours and fonts', 'Social and print files'] },
  { slug: 'ads', icon: 'target', title: 'Meta ads', line: 'Facebook and Instagram campaigns measured on enquiries and sales, not likes.', items: ['Campaign setup', 'Pixel and tracking', 'Monthly results'] },
  { slug: 'creative', icon: 'play', title: 'Ad creative and UGC', line: 'Scroll-stopping images and short videos that feel real, made for your ads and socials.', items: ['Scripts and hooks', 'Edited video cuts', 'Fresh creative monthly'] },
];

/* ---------- How a project runs ---------- */
export const process = [
  { t: 'Chat', d: 'A quick call or WhatsApp about your business, what is slowing you down and what you want to build.' },
  { t: 'Plan and quote', d: 'A clear scope and a fixed price in writing, so you know exactly what you are getting before anything starts.' },
  { t: 'Build', d: 'I design and build it, and you see progress along the way. Two rounds of changes are included.' },
  { t: 'Launch and grow', d: 'It goes live, I show you how to use it, and I stay on to support it, add features and run your ads.' },
];

/* ---------- Clients ---------- */
export type Client = { name: string; industry: string; logo: string; bg: string; wide?: boolean; mark?: string; fallback?: string };
export const clients: Client[] = [
  { name: 'TNT Fitness', industry: 'Fitness', logo: '/clients/tnt.webp', bg: '#121110', wide: true },
  { name: 'Party Starters', industry: 'Events and party hire', logo: '/clients/party-starters.webp', bg: '#ffffff' },
  { name: 'Nautical Aerial & Fitness', industry: 'Fitness', logo: '/clients/nautical.webp', bg: '#2a4560' },
  { name: 'Adamant Aesthetics', industry: 'Skin and laser clinic', logo: 'https://www.adamantaesthetics.co.za/wp-content/uploads/2023/09/Adamant-Aesthetics-2048x365.png', bg: '#d4917c', wide: true },
  { name: 'Harlan', industry: 'Jewellery', logo: '/clients/harlan.webp', bg: '#fbf7f2', wide: true },
  { name: 'My Au Pairs', industry: 'Childcare agency', logo: '/clients/my-au-pairs.svg', bg: '#eef3f7', mark: 'My Au Pairs' },
  { name: 'Creative Pearls', industry: 'Handmade jewellery', logo: '/clients/creative-pearls.webp', bg: '#ffffff' },
];

/* ---------- Numbers (keep these real) ---------- */
export const stats = [
  { value: 6, prefix: '', suffix: '', label: 'Active clients right now' },
  { value: 30, prefix: 'R', suffix: 'k+', label: 'In client sales generated' },
  { value: 7, prefix: '', suffix: '', label: 'Brands built and grown' },
  { value: 5, prefix: '', suffix: '', label: 'Industries served' },
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
    lesson: 'Every ad tactic I recommend has been tested on my own budget first.',
    services: ['Shopify', 'Guided booking flow', 'Meta ads', 'Creative'],
    url: 'https://harlan.co.za',
    urlLabel: 'harlan.co.za',
    tone: 'harlan',
    shots: [
      { src: '/work/harlan-home.webp', alt: 'Harlan homepage on a phone: "The gift she\'ll never take off." with a Build Her Box button', kind: 'phone', caption: 'One promise, one button. The visitor knows exactly what to do next.' },
      { src: '/work/harlan-builder.webp', alt: 'Harlan gift builder step one: Choose her 3 pieces, with filters and product cards', kind: 'phone', caption: 'A guided, step-by-step flow. The same thinking makes any booking feel easy.' },
      { src: '/work/harlan-occasions.webp', alt: 'Harlan Shop by Occasion section with cards for her birthday, anniversary, for Mom and more', kind: 'phone', caption: 'Shop by occasion. People see their own reason for buying before they see a product.' },
    ],
    results: [],
    brief:
      'A gift is a considered purchase from a brand the buyer has never heard of. Harlan had to feel personal and trustworthy from the first screen, and turn ad traffic into a finished gift box in a few taps.',
    built: [
      { title: 'A guided flow instead of a catalogue', body: 'Pick three pieces, choose the box, add a note, choose delivery speed and a date. Each step asks one question, so nobody gets stuck choosing.' },
      { title: 'Organised around the customer\'s reason', body: 'Birthday, anniversary, for Mom, just because. Visitors start from their own situation, not a product list.' },
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
      { title: 'Practitioners up front', body: 'The coaches are introduced by name, with their experience, so a nervous first-timer knows who will look after them.' },
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
      { title: 'Specialties up front', body: 'Active ageing, pre and post-natal, mobility and rehab support listed plainly, so every kind of client sees herself first.' },
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
    q: 'Do you only work with certain industries?',
    a: 'No. I work with businesses of every kind: fitness studios, event and party hire, childcare agencies, jewellery brands, beauty and skin clinics and more. If you have customers to win and admin to simplify, I can help.',
  },
  {
    q: 'Why custom-built instead of a template?',
    a: 'Templates make you bend your business to fit them, and they look like everyone else. I build around how you actually work, so it does exactly what you need, loads fast and looks like your brand, not a theme.',
  },
  {
    q: 'Do I have to take everything?',
    a: 'No. Some clients start with a logo or a website, others with a booking system or ads. Start with what will make the biggest difference now and add the rest when you are ready.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most websites take two to four weeks once I have your content. Systems like CRMs and back offices depend on what they need to do. You get a timeline with your quote.',
  },
  {
    q: 'How much does it cost?',
    a: 'Every business is different, so every project gets a fixed quote after a short chat. You see the scope and the price in writing before anything starts, with a 50% deposit to begin.',
  },
  {
    q: 'Where are you based?',
    a: 'Cape Town, South Africa, and I work with businesses anywhere. Everything runs over WhatsApp, calls and email, and you deal with me directly from start to finish.',
  },
];
