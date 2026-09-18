import type { Config } from "tailwindcss";

/* Tokens are 1:1 with design.md §1. Names match the doc so the two stay
   legible against each other. */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#C34811",
          light: "#E4642A", // the on-dark terracotta
          dark: "#9C390D",
        },
        blue: "#0B369A",
        ink: "#241B14",
        ground: "#1B130D", // page ground for all dark sections
        cream: "#f7f2ec",
        stone: "#D9D1CA",
        dark: {
          body: "#f0e9df",
          muted: "#bdb0a2",
          faint: "#8d8074",
          nav: "#e6dcd0",
        },
        light: {
          body: "#241B14",
          muted: "#6f6255",
        },
        edge: {
          nav: "#362a20",
          rule: "#4a3d31",
          card: "#e2d9cf",
          stone: "#c7bcb0",
          track: "#d8ccc0",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
        pill: "999px",
      },
      boxShadow: {
        cta: "0 10px 26px rgba(195,72,17,.36)",
        case: "0 24px 60px rgba(36,27,20,.22)",
        caseLight: "0 24px 60px rgba(36,27,20,.12)",
        nav: "0 10px 30px rgba(27,19,13,.34)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(.16,1,.3,1)",
      },
      keyframes: {
        ring: { to: { transform: "rotate(360deg)" } },
        ringReverse: { to: { transform: "rotate(-360deg)" } },
      },
      animation: {
        ring: "ring 30s linear infinite",
        ringReverse: "ringReverse 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
