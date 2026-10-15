export const contact = {
  name: 'Matthew Denton',
  email: 'mattdenton94@gmail.com',
  whatsappDisplay: '076 413 3052',
  whatsappNumber: '27764133052',
  linkedin: 'https://www.linkedin.com/in/matthew-denton94',
  location: 'Cape Town, South Africa',
};

export const mail = (subject = 'Free site review', body = "Hi Matt,\n\nI run [business name] in [city]. Our website is [link]. Could you take a look?\n\nThanks,") =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const wa = (text = "Hi Matt, I found your site and I'd like to chat about a project.") =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

export type Service = {
  slug: string;
  group: 'Build' | 'Grow' | 'Automate';
  title: string;
  line: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: 'websites',
    group: 'Build',
    title: 'Websites',
    line: 'Custom sites that load fast on mobile data and turn visitors into WhatsApp messages, calls and bookings.',
    items: ['Custom design, no templates', 'WhatsApp, forms and maps', 'Google search basics', 'Domain and hosting set up'],
  },
  {
    slug: 'shopify',
    group: 'Build',
    title: 'Shopify stores',
    line: 'Stores set up the way South African shoppers buy: local payments, courier delivery and offers that lift the basket.',
    items: ['Theme and product setup', 'Yoco, PayFast and courier', 'Bundles and upsell offers', 'Store rescues and redesigns'],
  },
  {
    slug: 'tools',
    group: 'Build',
    title: 'Custom tools',
    line: 'Small web apps that replace the spreadsheet you are tired of: quotes, bookings, stock and numbers in one place.',
    items: ['Quote calculators', 'Booking systems', 'Client portals', 'Dashboards and trackers'],
  },
  {
    slug: 'ads',
    group: 'Grow',
    title: 'Meta and Google ads',
    line: 'Campaigns I run the same way I run them for my own store, with creative, tracking and plain-English reporting.',
    items: ['Campaign setup and testing', 'Pixel and conversion tracking', 'Ad creative that sells', 'Monthly reporting'],
  },
  {
    slug: 'design',
    group: 'Grow',
    title: 'Canva design',
    line: 'Brand kits and templates your team can keep using after I hand them over, so everything stays on brand.',
    items: ['Logos and brand kits', 'Social post templates', 'Flyers, menus and price lists', 'Stickers and packaging'],
  },
  {
    slug: 'automations',
    group: 'Automate',
    title: 'AI automations',
    line: 'The repetitive admin handled for you: replies, follow-ups, lead lists and product copy, running in the background.',
    items: ['WhatsApp and email auto-replies', 'Leads straight into a sheet', 'AI product descriptions', 'Reminders and follow-ups'],
  },
];

export type Shot = { src: string; alt: string; kind: 'phone' | 'post' | 'desktop'; caption: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  tag: 'My own brand' | 'Client' | 'Ongoing client' | 'Tool';
  year: string;
  place: string;
  summary: string;
  services: string[];
  url?: string;
  urlLabel?: string;
  mock: 'harlan' | 'pearls' | 'tnt' | 'nafts' | 'nectra';
  shots?: Shot[];
  brief: string;
  built: { title: string; body: string }[];
  facts: { label: string; value: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: 'harlan',
    name: 'Harlan',
    kind: "Women's jewellery gifting brand",
    tag: 'My own brand',
    year: '2026',
    place: 'South Africa, nationwide',
    summary:
      'My own gifting brand, built and run end to end. One product, the Build Your Gift Box: she gets three pieces of jewellery, gift-boxed with a personal note. The store, the builder, the numbers and the ads are all mine, so every tactic I sell to clients gets tested with my own money first.',
    services: ['Shopify', 'Custom builder', 'Brand', 'Meta ads'],
    url: 'https://harlan.co.za',
    urlLabel: 'harlan.co.za',
    mock: 'harlan',
    shots: [
      { src: '/work/harlan-gift-home.webp', alt: 'Harlan homepage on a phone: "The gift she\'ll never take off." above an open pink gift box holding a necklace, bracelet and hoops, with a Build Her Box button', kind: 'phone', caption: 'Homepage. One promise, one button, and every section leads to the builder.' },
      { src: '/work/harlan-gift-builder.webp', alt: 'Harlan Build Your Gift Box page: step 1, choose 3 pieces, with 2 of 3 slots filled and cards for necklaces, bracelets and earrings, then step 2, choose her box in pink, white or black', kind: 'phone', caption: 'The builder. Tap three pieces, watch the slots fill, then pick her box colour.' },
      { src: '/work/harlan-gift-checkout.webp', alt: 'Harlan builder steps 3 and 4: a live preview of the handwritten gift note, delivery options for standard, express and by a date, and an Add to cart R798 button', kind: 'phone', caption: 'The note and delivery. A live card preview, and a total that updates with every choice.' },
    ],
    brief:
      'Most jewellery stores make the buyer do all the work: browse dozens of products, guess what she would like, then work out how to wrap it. Harlan sells one thing instead, the finished gift. The site had to make choosing feel easy and personal on a phone, look premium enough to give, and keep a R699 box profitable on paid traffic.',
    built: [
      {
        title: 'One product, one path',
        body: 'The whole store is the Build Your Gift Box. No product pages in the menu and no browsing: every button, occasion and piece on the homepage leads straight to the builder.',
      },
      {
        title: 'A custom step-by-step builder',
        body: 'A custom Shopify theme section, mobile first. Pick 3 of 11 pieces with a live counter and slots that fill as you tap, choose a pink, white or black box, write a free note with a live card preview, then choose delivery. The add to cart button shows the running total and stays locked until the box is complete.',
      },
      {
        title: 'Delivery upsells that are honest',
        body: 'Standard delivery is free. Express (+R99) and a guaranteed date (+R149, with a date picker that skips Sundays) are hidden add-on products that go into the cart with the box, and come out with it if the box is removed.',
      },
      {
        title: 'Every choice lands on the order',
        body: 'Pieces, box colour, note, sender and delivery date are saved on the order itself, so packing a box takes one glance and nothing gets lost between checkout and courier.',
      },
      {
        title: 'Numbers worked out before the first ad',
        body: 'Cost per box, breakeven cost per sale and a target cost per sale were set before spending a rand on Meta ads. Any ad set that spends three times the target without a sale gets switched off.',
      },
      {
        title: 'A brand built for gifting',
        body: 'Cream, champagne and dusty rose, elegant serif headings and one line that sums it up: "Because you deserve it, beautiful." Yoco, PayFast, free nationwide delivery and 30-day returns answer every reason to hesitate.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Product', value: 'One gift box' },
      { label: 'Price', value: 'R699' },
      { label: 'Delivery', value: 'Free, nationwide' },
    ],
  },
  {
    slug: 'creative-pearls',
    name: 'Creative Pearls',
    kind: 'Handmade pearl jewellery',
    tag: 'Ongoing client',
    year: '2026',
    place: 'Cape Town',
    summary:
      "Twenty years of handmade freshwater pearl jewellery from Riana's Cape Town studio. I'm refreshing the site and brand pieces and running their Meta ads.",
    services: ['Shopify', 'Canva design', 'Meta ads'],
    url: 'https://creativepearls.co.za',
    urlLabel: 'creativepearls.co.za',
    mock: 'pearls',
    shots: [
      { src: '/work/pearls-home.webp', alt: 'Creative Pearls homepage on a phone: "20 Years. One Pair of Hands." with Shop Earrings and Shop Necklaces buttons', kind: 'phone', caption: 'Homepage hero. Twenty years of craft in one line, then straight into the shop.' },
      { src: '/work/pearls-about.webp', alt: 'Creative Pearls story section with a quote from founder Riana Smith and sections on craftsmanship, design and genuine pearls', kind: 'phone', caption: 'The maker story. Riana in her own words, without needing her on camera.' },
    ],
    brief:
      'Creative Pearls came to me for help with marketing. The product is beautiful and the reputation is real, but the site and the ads needed to carry that story to people who have never met Riana at a market. The creative also had to work without the owner on camera.',
    built: [
      {
        title: 'Site pages that tell the story',
        body: 'Working through the Shopify store page by page, leading with "20 years, one pair of hands" and the fact that every piece is finished in her own studio.',
      },
      {
        title: 'Logo and stickers',
        body: 'A cleaned-up logo and sticker designs for packaging, so an order looks as considered as the jewellery inside it.',
      },
      {
        title: 'Meta ads without a face on camera',
        body: 'Product-led creative built around the pearls themselves: close-ups, hands, packaging and the maker story told in text.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Scope', value: 'Site, brand, ads' },
      { label: 'Status', value: 'In progress' },
      { label: 'Location', value: 'Cape Town' },
    ],
  },
  {
    slug: 'tnt-fitness',
    name: 'TNT Fitness',
    kind: 'Boxing, strength and self-defence gym',
    tag: 'Client',
    year: '2026',
    place: 'Bothasig, Cape Town',
    summary:
      'A full rebuild for a boxing, strength and self-defence gym. Real members, real results and real coaches, built to turn a scroll into a booked first session.',
    services: ['Website', 'Copywriting'],
    url: 'https://tnt-fitness-ojru0r8zs-matt-517e.vercel.app',
    urlLabel: 'View the new site',
    mock: 'tnt',
    shots: [
      { src: '/work/tnt-home.webp', alt: 'TNT Fitness homepage on a phone: members boxing outdoors, headline "You won\'t leave the same." and a Book your first session button', kind: 'phone', caption: 'The hero. Real members training, one line that sticks, and booking one tap away.' },
      { src: '/work/tnt-schedule.webp', alt: 'TNT Fitness Fight week schedule with a card for each day, today highlighted in red, morning and evening times', kind: 'phone', caption: '"Fight week". Each day has its theme and times, and today lights up on its own.' },
      { src: '/work/tnt-fight.webp', alt: 'TNT Fitness Pick your fight section with photo cards for boxing fitness and strength and conditioning', kind: 'phone', caption: '"Pick your fight". Every offer is a photo of the real group, not stock.' },
      { src: '/work/tnt-about.webp', alt: 'TNT Fitness session stats, a red ticker banner and the More than a gym section', kind: 'phone', caption: 'Session times and the R85 drop-in up front, then the story: "More than a gym."' },
    ],
    brief:
      "TNT had outgrown its first one-page site. The gym's strongest selling points were its people: members with real results, coaches who know them by name, and a self-defence instructor companies and schools book. None of that came through. The new site needed to show it and still get people onto WhatsApp in one tap.",
    built: [
      {
        title: 'Real people from the first second',
        body: 'The hero is members boxing outdoors at dusk, with one line: "You won\'t leave the same." Session times and the R85 drop-in sit right under it.',
      },
      {
        title: 'A results board',
        body: 'Before-and-after results from nine members, 182 kg lost between them, next to reviews in their own words. Proof beats promises.',
      },
      {
        title: 'Self-defence gets its own stage',
        body: 'A dedicated section for the instructor, with 39 years of teaching, the weekly class, and corporate and school workshops.',
      },
      {
        title: 'Pricing and schedule in the gym\'s own voice',
        body: '"Pick your rounds" lays out every plan from the R85 drop-in to the R1,200 all-in. "Fight week" shows the theme and times for each day and highlights today automatically.',
      },
      {
        title: 'Coaches up front',
        body: '"Your corner" introduces the owner, who is a coach and medic, the boxing coach and the self-defence instructor.',
      },
      {
        title: 'WhatsApp everywhere',
        body: 'A sticky "WhatsApp us to book" bar on every screen, plus a direct "WhatsApp Trish" button at the end.',
      },
    ],
    facts: [
      { label: 'Look', value: 'Dark, photo-led' },
      { label: 'Plans', value: 'R85 to R1,200' },
      { label: 'Contact', value: 'WhatsApp' },
      { label: 'Year', value: '2026' },
    ],
  },
  {
    slug: 'nafts',
    name: 'Nautical Aerial & Fitness',
    kind: 'Aerial and fitness studio',
    tag: 'Client',
    year: '2023',
    place: 'Melkbosstrand',
    summary:
      'A dark, editorial site built around real photography, so a serious studio stops looking like a hobby class.',
    services: ['Website'],
    url: 'https://www.nafts.co.za/',
    urlLabel: 'nafts.co.za',
    mock: 'nafts',
    shots: [
      { src: '/work/nafts-home.webp', alt: 'Nautical Aerial & Fitness homepage on a phone: black and white pole photo, headline "Aerial Fitness, Reimagined" and a Book on WhatsApp button', kind: 'phone', caption: 'Homepage hero. Real studio photography, the blue italic accent and booking one tap away.' },
      { src: '/work/nafts-specialties.webp', alt: 'Specialties section listing youth and kids aerial, active ageing, pre and post-natal, weight control, mobility, rehab support and chronic condition management', kind: 'phone', caption: 'Specialties. Every kind of client sees themselves before they see a price.' },
      { src: '/work/nafts-contact.webp', alt: 'Contact and booking section with a Google map of the Melkbosstrand studio and studio hours', kind: 'phone', caption: 'Contact and booking. Map, address and hours, with WhatsApp always in reach.' },
    ],
    brief:
      'The studio needed to show real credentials and premium positioning, and speak to more than young, flexible people: older clients, active agers, pre and post-natal clients and rehab patients too.',
    built: [
      {
        title: 'Real photos, not stock',
        body: 'Black-and-white studio photography on deep navy, with one italic word in blue: "Aerial Fitness, Reimagined".',
      },
      {
        title: 'Specialties, up front',
        body: 'Youth and kids, active ageing, pre and post-natal, mobility and rehab support, listed plainly so each visitor sees themselves before they see a price.',
      },
      {
        title: 'Simple pricing, clear best value',
        body: 'Six cards with one marked best value, and every call to action routed to WhatsApp.',
      },
      {
        title: 'Easy to find and visit',
        body: 'A contact section with the map, address and studio hours, plus a floating WhatsApp button on every screen.',
      },
    ],
    facts: [
      { label: 'Look', value: 'Dark, editorial' },
      { label: 'Pricing', value: 'Six cards' },
      { label: 'Contact', value: 'WhatsApp' },
      { label: 'Year', value: '2023' },
    ],
  },
  {
    slug: 'nectra',
    name: 'Nectra',
    kind: 'Single-product tech store',
    tag: 'My own brand',
    year: '2025',
    place: 'South Africa, nationwide',
    summary:
      'A single-product Shopify store for the MagFold Pro magnetic power bank, built to take paid traffic and convert it on one page.',
    services: ['Shopify', 'Meta ads'],
    url: 'https://nectra.co.za',
    urlLabel: 'nectra.co.za',
    mock: 'nectra',
    brief:
      'One product, paid traffic, and a landing page that has to do all the selling. Nectra is where I learned what a product page needs before someone will pay a stranger online.',
    built: [
      {
        title: 'A one-product store',
        body: 'A Shopify build focused on a single product page, with every section answering a buyer objection.',
      },
      {
        title: 'Ads to landing page',
        body: 'Paid social traffic from Facebook, Instagram and TikTok, with the landing page tuned for conversion.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Products', value: 'One' },
      { label: 'Traffic', value: 'Paid social' },
      { label: 'Status', value: 'Paused' },
    ],
  },
];

export const tools = [
  { name: 'Profit tracker', line: 'Sales, costs and margin per product, so you know what actually makes money.' },
  { name: 'Budget tracker', line: 'Monthly money in and out with categories and running totals.' },
  { name: 'Travel explorer', line: 'Search, filter and save destinations in a clean little web app.' },
];

export const clients = ['TNT Fitness', 'Nautical Aerial & Fitness', 'Creative Pearls'];

export const faqs = [
  {
    q: 'How much does it cost?',
    a: "Every project is quoted on its own, because a five-page site and a Shopify store with ads are different jobs. Send me a WhatsApp with what you need and I'll come back with a clear price and timeline.",
  },
  {
    q: 'Can you work with the site I already have?',
    a: "Yes. I can fix, speed up or add to an existing site or Shopify store. If a rebuild makes more sense, I'll tell you why before you spend anything.",
  },
  {
    q: 'I only need one thing, like ads or a logo. Is that fine?',
    a: 'Completely fine. Most people start with one thing. It just helps that the same person can do the rest when you are ready.',
  },
  {
    q: 'What do AI automations actually do for a small business?',
    a: "They take care of repeat work: answering common questions, sending follow-ups, putting new leads into a sheet, writing product descriptions. I start with the task that eats most of your week.",
  },
  {
    q: 'Do I need to supply the words and photos?',
    a: "It helps, but you don't have to. I can write the copy, design graphics in Canva and tell you exactly which photos to take on your phone.",
  },
  {
    q: 'Do you work with businesses outside South Africa?',
    a: "Yes. I'm based in Cape Town and work with businesses in the US and South Africa. Everything runs over email, video calls and WhatsApp. Cape Town is 6 to 9 hours ahead of the US, so calls fit easily into your morning.",
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes. Larger projects are usually split into a deposit and payments at set milestones.',
  },
];
