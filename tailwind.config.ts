import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "card-background": "var(--card-background)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          light: "var(--primary-light)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          hover: "var(--secondary-hover)",
          light: "var(--secondary-light)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "var(--font-dm)", "sans-serif"],
        numbers: ["var(--font-space)", "Space Grotesk", "monospace"],
        accent: ["var(--font-cormorant)", "serif"],
        bricolage: ["var(--font-bricolage)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
