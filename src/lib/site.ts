// Central site configuration.
// Fields marked PLACEHOLDER must be replaced with real details before launch.

export const SITE = {
  name: "Matthew Denton",
  brand: "Denton Web",
  role: "Freelance Web Designer & Developer",
  tagline: "Websites that make small businesses look as good as they actually are.",
  location: "South Africa",
  locationLine: "Based in South Africa. Working worldwide.",
  pricingLine: "Every project is quoted individually — no packages, no starting-from price.",

  // PLACEHOLDER — swap for the real production domain once registered.
  url: "https://www.matthewdenton.co.za",

  // PLACEHOLDER — swap for a real inbox.
  email: "hello@matthewdenton.co.za",

  // PLACEHOLDER — swap for a real WhatsApp Business number (E.164, no spaces, no leading +).
  whatsappNumber: "27000000000",
  whatsappDisplay: "+27 00 000 0000",

  socials: [
    // PLACEHOLDER — add real profiles once decided which to keep public.
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "GitHub", href: "https://github.com/MattDenton94" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
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
