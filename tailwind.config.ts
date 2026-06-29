import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      colors: {
        bg: "oklch(var(--bg) / <alpha-value>)",
        surface: "oklch(var(--surface) / <alpha-value>)",
        ink: "oklch(var(--ink) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        primary: "oklch(var(--primary) / <alpha-value>)",
        maize: "oklch(var(--maize) / <alpha-value>)",
        chili: "oklch(var(--chili) / <alpha-value>)",
        patina: "oklch(var(--patina) / <alpha-value>)",
        line: "oklch(var(--line) / <alpha-value>)"
      },
      boxShadow: {
        warm: "0 10px 24px oklch(0.22 0.08 36 / 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
