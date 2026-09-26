/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Neutral near-black base + editorial dark surfaces
        base: '#0A0A0B',
        surface: '#141416',
        panel: '#1A1A1D',
        'navy-black': '#0B1020',
        // SANLINK brand accent (orange) — CTAs & highlights
        brand: {
          400: '#FF8A3D',
          500: '#FF6B1A',
          600: '#F5560A',
          700: '#d94708',
        },
        // Electric-blue technology accent (secondary — lines, glows, data)
        electric: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        // Muted cool gray for secondary text
        muted: '#9AA3B2',
        // Note: indigo (#6366F1), violet (#8B5CF6) and magenta (#D946EF)
        // use Tailwind's built-in scales — no overrides needed.
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        15: '0.15',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 18px 50px -25px rgba(99,102,241,0.5)',
        'glow-brand': '0 10px 40px -12px rgba(255,107,26,0.5)',
        'glow-electric': '0 10px 40px -14px rgba(56,189,248,0.45)',
        card: '0 1px 2px rgba(0,0,0,0.4), 0 24px 60px -40px rgba(0,0,0,0.9)',
        'card-lift': '0 1px 2px rgba(0,0,0,0.4), 0 40px 80px -50px rgba(0,0,0,1)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-node': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        dash: {
          to: { 'stroke-dashoffset': '-260' },
        },
        'glow-breathe': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        spin_slow: {
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.96)' },
        },
        ticker: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-node': 'pulse-node 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3.4s ease-out infinite',
        dash: 'dash 8s linear infinite',
        'glow-breathe': 'glow-breathe 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin_slow 26s linear infinite',
        'spin-reverse': 'spin-reverse 34s linear infinite',
        marquee: 'marquee 32s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        ticker: 'ticker 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
