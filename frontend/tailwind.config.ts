import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eduble: {
          mint: "#98FF98",
          slate: "#334155",
          dark: "#1e293b",
          light: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
export default config;
