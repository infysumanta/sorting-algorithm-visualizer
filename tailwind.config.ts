import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        system: {
          red10: "#5c0808",
          red15: "#7c0a0a",
          red20: "#a41616",
          red30: "#cc1f1f",
          red40: "#e53e3e",
          red50: "#ff5d5d",
          red60: "#ff7a7a",
          red65: "#ff8a8a",
          red70: "#ff9b9b",
          red80: "#ffbcbc",
          red90: "#ffdcdc",
          red95: "#fff0f0",

          green10: "#071b12",
          green15: "#0c2912",
          green20: "#1c3326",
          green30: "#194e31",
          green40: "#396547",
          green50: "#2e844a",
          green60: "#3ba755",
          green65: "#41b658",
          green70: "#45c65a",
          green80: "#91db8b",
          green90: "#cdefc4",
          green95: "#ebf7e6",
          green100: "#202b23",
        },
      },
    },
  },
  plugins: [],
};
export default config;
