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
        lato: ["Lato", "sans-serif"]
      },
      colors: {
        cgreen: {
          300: "#2ef491",
          500: "#02DE86"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
export default config;
