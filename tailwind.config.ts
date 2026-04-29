import type { Config } from 'tailwindcss';

/**
 * Palette: Restrained Trade.
 * The historical token names (navy/cyan/charcoal) are kept so existing
 * className references continue to compile, but the values now resolve
 * to ink/rust per DESIGN.md.
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Ink — was navy
        navy: '#1C1F26',
        'navy-mid': '#2A2D34',
        charcoal: '#2A2D34',
        // Rust — was cyan
        cyan: '#B85A32',
        'cyan-glow': '#D77548',
        'cyan-dim': '#8A4023',
        rust: '#B85A32',
        'rust-deep': '#8A4023',
        'rust-soft': '#D77548',
        // Neutrals
        slate: '#5A5D68',
        offwhite: '#FAF7F2',
        cream: '#FAF7F2',
        stone: '#F0ECE5',
        'warm-white': '#FFFFFF',
        coolgray: '#D8D2C7',
        // Legacy keys (kept so older pages still resolve)
        amber: '#B85A32',
        'amber-dim': '#8A4023'
      },
      fontFamily: {
        heading: ['var(--font-barlow)', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['var(--font-barlow)', 'Arial', 'Helvetica', 'sans-serif'],
        sans: ['var(--font-barlow)', 'Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(28,31,38,0.04), 0 8px 24px rgba(28,31,38,0.06)',
        glow: '0 1px 2px rgba(28,31,38,0.04), 0 8px 24px rgba(28,31,38,0.06)',
        'glow-strong': '0 2px 4px rgba(28,31,38,0.06), 0 12px 32px rgba(28,31,38,0.08)',
        card: '0 1px 2px rgba(28,31,38,0.04), 0 8px 24px rgba(28,31,38,0.06)',
        dark: '0 12px 32px rgba(0,0,0,0.18)'
      },
      maxWidth: {
        content: '80rem'
      },
      backgroundImage: {
        'hero-grid': 'none',
        'navy-gradient': 'linear-gradient(180deg, #1C1F26 0%, #1C1F26 100%)',
        'navy-gradient-soft': 'linear-gradient(180deg, #1C1F26 0%, #2A2D34 100%)',
        'cta-radial': 'linear-gradient(180deg, #1C1F26 0%, #1C1F26 100%)',
        'footer-radial': 'none',
        'dot-grid': 'none'
      }
    }
  },
  plugins: []
};

export default config;
