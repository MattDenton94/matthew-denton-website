import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Single source of truth for the deployed site URL — canonical tags, og:url,
// og:image and structured data all derive from this, so update it here (e.g.
// when moving to a custom domain) and every page picks it up automatically.
const site = "https://matthew-denton.vercel.app";

export default defineConfig({
  site,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
