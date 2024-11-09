import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color_dark_1: "#252525",
        color_dark_2: "#3a3a3a",
        color_dark_3: "#4f4f4f",
        color_dark_4: "#636363",
      },
    },
  },
  plugins: [],
};
export default config;
