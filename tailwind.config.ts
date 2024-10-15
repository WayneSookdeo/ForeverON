import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nude: {
          100: '#FFF5E6',
          200: '#FFE6CC',
          300: '#FFD6B3',
          400: '#FFC799',
          500: '#FFB380',
          600: '#FFA366',
          700: '#FF944D',
          800: '#FF8533',
          900: '#FF751A',
        },
      },
    },
  },
  plugins: [],
};
export default config;