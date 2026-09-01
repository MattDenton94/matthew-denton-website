// Central site configuration.
// Fields marked PLACEHOLDER must be replaced with real details before launch.

export const SITE = {
  name: "Matthew Denton",
  brand: "Denton Web",
  role: "Freelance Web Designer & Developer",
  tagline: "Professional websites for South African small businesses, from R2,000.",
  location: "South Africa",
  locationLine: "Based in South Africa. Open to clients everywhere.",
  startingPrice: "R2,000",
  pricingLine: "Every project is quoted individually, starting from R2,000 — no fixed packages.",
  shopifyStartingPrice: "R2,500",
  webAppStartingPrice: "R3,500",
  ctaLabel: "Get My Website",
  replyPromise: "I'll reply within a day.",

  url: "https://matthew-denton-vercel.vercel.app",

  email: "mattdenton94@gmail.com",

  whatsappNumber: "27764133052",
  whatsappDisplay: "+27 76 413 3052",

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/matthew-denton94" },
  ],
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
