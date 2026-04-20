import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        raion: {
          black: '#0A0A0A',
          charcoal: '#141414',
          gold: '#C5A059',
          red: '#8B0000',
          white: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        display: ['var(--font-archivo-black)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
