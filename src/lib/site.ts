// Central site configuration.
// Fields marked PLACEHOLDER must be replaced with real details before launch.

export const SITE = {
  name: "Matthew Denton",
  brand: "Denton Web",
  role: "Freelance Web Designer & Developer",
  tagline: "Professional websites for small businesses. Designed to turn visitors into calls, WhatsApp messages and customers.",
  locationLine: "Open to clients everywhere.",
  pricingLine: "Every project is scoped and quoted individually around what your business actually needs.",
  ctaLabel: "Get My Website",
  replyPromise: "I'll reply within a day.",

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
