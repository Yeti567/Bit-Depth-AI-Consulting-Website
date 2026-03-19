import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3B',
        'navy-mid': '#0E2847',
        charcoal: '#1F2933',
        cyan: '#00B4D8',
        'cyan-glow': '#00D4FF',
        'cyan-dim': '#007A96',
        slate: '#4B5563',
        offwhite: '#F5F7FA',
        'warm-white': '#FAFBFC',
        amber: '#F59E0B',
        'amber-dim': '#B45309',
        coolgray: '#CBD5E1'
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['var(--font-source-sans)', 'Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px rgba(11, 31, 59, 0.08)',
        glow: '0 8px 32px rgba(0, 180, 216, 0.35)',
        'glow-strong': '0 8px 32px rgba(0, 180, 216, 0.4)',
        card: '0 12px 40px rgba(0,0,0,0.12), 0 0 0 2px #00B4D8',
        dark: '0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,180,216,0.2)'
      },
      maxWidth: {
        content: '80rem'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(203, 213, 225, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(203, 213, 225, 0.12) 1px, transparent 1px)',
        'navy-gradient': 'linear-gradient(135deg, #0B1F3B 0%, #0E2847 60%, #0a2a4a 100%)',
        'navy-gradient-soft': 'linear-gradient(160deg, #0B1F3B 0%, #0E2847 100%)',
        'cta-radial': 'radial-gradient(ellipse at 50% 0%, #0a3a5c 0%, #0B1F3B 70%)',
        'footer-radial': 'radial-gradient(ellipse at 50% 0%, rgba(0,180,216,0.08) 0%, transparent 60%)',
        'dot-grid': 'radial-gradient(circle, rgba(0,180,216,0.03) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
