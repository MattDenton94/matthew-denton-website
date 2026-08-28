/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          alt: "#111113",
        },
        surface: {
          DEFAULT: "#18181B",
          border: "#2A2A2E",
          raised: "#1E1E22",
        },
        paper: "#F3EFE6",
        muted: "#96908A",
        accent: {
          DEFAULT: "#E3A23D",
          dark: "#BD8228",
          light: "#F0C077",
          soft: "rgba(227, 162, 61, 0.12)",
        },
      },
      fontFamily: {
        display: ["\"Fraunces Variable\"", "ui-serif", "Georgia", "serif"],
        sans: ["\"Inter Variable\"", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["\"IBM Plex Mono\"", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1180px",
        prose: "62ch",
      },
      letterSpacing: {
        widish: "0.04em",
        wideish: "0.08em",
        label: "0.14em",
      },
      backgroundImage: {
        grain: "url('/images/grain.svg')",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
