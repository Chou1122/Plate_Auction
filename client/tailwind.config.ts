import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
        montserat: ["var(--font-montserat)"]
      },
      colors: {
        cgreen: {
          300: "#2ef491",
          500: "#02DE86",
          600: "#27D17C"
        }
      },
      screens: {
        xs: '480px'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
export default config;
