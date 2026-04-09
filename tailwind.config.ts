import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    screens: {
      tablet: '810px',
      desktop: '1200px'
    },
    extend: {
      colors: {
        page: '#EBEAE6',
        cream: '#F8F6F3',
        accent: '#FF5900',
        slate: '#5F6566',
        navy: '#001666',
        ink: '#2A3132',
        ice: '#CADCFC',
        sand: '#EBE9E4',
        white: '#FFFFFF'
      },
      fontFamily: {
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        libre: ['var(--font-libre)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        hand: ['var(--font-just-me)', 'cursive'],
        domine: ['var(--font-domine)', 'serif'],
        space: ['var(--font-space)', 'sans-serif']
      },
      boxShadow: {
        soft: '0px 1px 2px rgba(39, 39, 42, 0.05)'
      },
      
    }
  },
  plugins: []
} satisfies Config;
