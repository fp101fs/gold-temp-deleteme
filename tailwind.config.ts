import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#FBF7E6",
          100: "#F7EFCC",
          200: "#EFDF99",
          300: "#E7CF66",
          400: "#DFBF33",
          500: "#D4AF37",
          600: "#B8962E",
          700: "#9A7D25",
          800: "#7C641C",
          900: "#5E4B13",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
