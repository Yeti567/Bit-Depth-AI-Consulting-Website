import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3B',
        charcoal: '#1F2933',
        cyan: '#00B4D8',
        offwhite: '#F5F7FA',
        coolgray: '#CBD5E1'
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['var(--font-source-sans)', 'Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px rgba(11, 31, 59, 0.08)'
      },
      maxWidth: {
        content: '80rem'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(203, 213, 225, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(203, 213, 225, 0.12) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
