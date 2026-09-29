export const contact = {
  name: 'Matthew Denton',
  email: 'mattdenton94@gmail.com',
  whatsappDisplay: '076 413 3052',
  whatsappNumber: '27764133052',
  linkedin: 'https://www.linkedin.com/in/matthew-denton94',
  location: 'Cape Town, South Africa',
};

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

export type Shot = { src: string; alt: string; kind: 'phone' | 'post'; caption: string };

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
    kind: "Men's steel jewellery store",
    tag: 'My own brand',
    year: '2026',
    place: 'South Africa, nationwide',
    summary:
      'My own jewellery brand, built and run end to end. The store, the brand, the product photos, the offers and the ads are all mine, so every tactic I sell to clients gets tested with my own money first.',
    services: ['Shopify', 'Brand', 'Canva design', 'Meta ads'],
    url: 'https://harlan.co.za',
    urlLabel: 'harlan.co.za',
    mock: 'harlan',
    shots: [
      { src: '/work/harlan-home.webp', alt: 'Harlan homepage on a phone: "Steel you never have to take off." with Shop bracelets and Shop necklaces buttons', kind: 'phone', caption: 'Homepage. The promise, the proof points and two clear paths into the shop.' },
      { src: '/work/harlan-ad.webp', alt: 'Harlan Meta ad: two steel bracelets on a wrist in a car, headline "Payday. Treat the wrist." Second bracelet half price, R298.50 for both', kind: 'post', caption: 'Meta ad made in Canva. A payday hook, a real wrist and the offer in one line.' },
      { src: '/work/harlan-trust.webp', alt: 'Harlan trust section: 316L steel, posted from Cape Town, 30-day returns, answered by Matt on WhatsApp, Yoco and PayFast logos', kind: 'phone', caption: 'Trust block. Every reason a first-time buyer hesitates, answered before checkout.' },
    ],
    brief:
      "Cheap jewellery tarnishes, and South African shoppers have learned not to trust online stores they have never heard of. Harlan had to look established from day one, sell to men buying for themselves and to women buying gifts, and make a R179 bracelet feel like a considered buy.",
    built: [
      {
        title: 'A brand with one clear promise',
        body: 'The name, logo and tagline all point at one idea: 316L stainless steel you can wear in the shower, the gym and the sea. "Steel you never have to take off."',
      },
      {
        title: 'A Shopify store set up for how locals buy',
        body: 'Yoco and PayFast checkout, The Courier Guy delivery, 30-day returns and a WhatsApp line for questions, so a first-time buyer has no reason to hesitate.',
      },
      {
        title: 'Offers that grow the basket',
        body: 'Buy a bracelet, get the second at 50% off, and free delivery on any two items. Sets and gift options give the gift buyer an easy yes.',
      },
      {
        title: 'Product photography and ad creative',
        body: 'Steel on black for the catalogue, real wrist shots for lifestyle, and Meta ads designed in Canva, like "Payday. Treat the wrist." with the second-bracelet offer built in.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Payments', value: 'Yoco, PayFast' },
      { label: 'Delivery', value: 'Posted from Cape Town' },
      { label: 'Prices from', value: 'R179' },
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
    kind: 'Boxing and self-defence gym',
    tag: 'Client',
    year: '2025',
    place: 'Bothasig, Cape Town',
    summary:
      'A single-page site a coach can text to anyone and trust it will get them booked, on a phone, standing in a gym car park.',
    services: ['Website'],
    url: 'https://github.com/MattDenton94/TNT_Fitness',
    urlLabel: 'View the code',
    mock: 'tnt',
    brief:
      'TNT needed a site built to convert: a link coaches could share that turns into bookings. No CMS to maintain and nothing for the owners to manage.',
    built: [
      {
        title: 'A gym noticeboard look',
        body: 'Black and red with condensed type, so it feels like the wall of the gym and not a template.',
      },
      {
        title: 'Every button goes to WhatsApp',
        body: "Each section routes to a pre-filled WhatsApp message, because that's where the gym already talks to members.",
      },
      {
        title: 'Pricing by decision, not by grid',
        body: 'Options grouped by what a member is actually deciding, with a schedule that turns into cards on mobile.',
      },
      {
        title: 'Fast and findable',
        body: 'Structured data for hours and location, sized images for slow connections, and full keyboard and reduced-motion support.',
      },
    ],
    facts: [
      { label: 'Stack', value: 'HTML, CSS, JS' },
      { label: 'Dependencies', value: 'None' },
      { label: 'Contact', value: 'WhatsApp' },
      { label: 'Year', value: '2025' },
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
    brief:
      'The studio needed to show real credentials and premium positioning, and speak to more than young, flexible people: older clients, active agers, pre and post-natal clients and rehab patients too.',
    built: [
      {
        title: 'Real photos, not stock',
        body: 'A duotone hero and teal-toned apparatus photography, with an italic accent word in the headline.',
      },
      {
        title: '"Who this is for", up front',
        body: 'The About section lists every audience plainly, so each visitor sees themselves before they see a price.',
      },
      {
        title: 'Simple pricing, clear best value',
        body: 'Six cards with one marked best value, and every call to action routed to WhatsApp.',
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

export const clients = ['Creative Pearls', 'TNT Fitness', 'Nautical Aerial & Fitness'];

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
    q: 'Do you only work in Cape Town?',
    a: "I'm based in Cape Town and happy to meet locally, but everything works over WhatsApp and video calls, so I work with clients anywhere.",
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes. Larger projects are usually split into a deposit and payments at set milestones.',
  },
];
