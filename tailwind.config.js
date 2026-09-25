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
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        // Primary — deep midnight navy. Hero, CTA bands, footer, headings.
        navy: {
          950: '#070c17',
          900: '#0b1424',
          800: '#101d33',
          700: '#182a44',
          600: '#223a5c',
          500: '#33507a',
        },
        // Secondary — professional blue. CTAs, links, active states.
        royal: {
          50: '#eef4ff',
          100: '#dbe7fe',
          200: '#bdd3fd',
          300: '#8fb3fb',
          400: '#5b8bf5',
          500: '#3667ec',
          600: '#2450d4',
          700: '#1e40ad',
          800: '#1d388c',
          900: '#1c3374',
        },
        // Bright blue — icon fills & small highlights (used with restraint).
        brand: {
          400: '#3ea0ff',
          500: '#1a8bff',
          600: '#0b73e6',
        },
        // Accent — controlled electric cyan. Thin lines, dots, tiny details only.
        cyan: {
          400: '#38d0e6',
          500: '#12b5cf',
          600: '#0e97ad',
        },
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Tighter display sizes with controlled line-height for headings
        'display-sm': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        15: '0.15',
      },
      boxShadow: {
        // Fine, enterprise-grade shadows — subtle, never heavy
        soft: '0 1px 2px rgba(15, 23, 42, 0.04)',
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 28px -20px rgba(15, 23, 42, 0.22)',
        lift: '0 10px 30px -14px rgba(36, 80, 212, 0.32)',
        navbar: '0 1px 0 rgba(15, 23, 42, 0.05), 0 10px 30px -24px rgba(15, 23, 42, 0.25)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        dash: {
          to: { 'stroke-dashoffset': '-240' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        float: 'float 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3.2s ease-out infinite',
        dash: 'dash 7s linear infinite',
      },
    },
  },
  plugins: [],
};
