import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true,
      },
      colors: {
        'linear-pink': '#FCD6FF',
        'linear-blue': '#29D8FF',
        'linear-yellow': '#FFFD80',
        'linear-dark-pink': '#F89ABF',
      },
    },
  },
  plugins: [],
};
export default config;
