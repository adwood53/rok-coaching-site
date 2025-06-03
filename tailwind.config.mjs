/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // This covers all files in src directory
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}', // Your components are here
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // In case you add pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // In case you move components
  ],
  theme: {
    extend: {
      colors: {
        // ROK Brand Colors - Inheriting from CSS custom properties
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
          light: 'var(--color-tertiary-light)',
          dark: 'var(--color-tertiary-dark)',
        },
        neutral: {
          DEFAULT: 'var(--color-neutral)',
          light: 'var(--color-neutral-light)',
          dark: 'var(--color-neutral-dark)',
        },

        // Background colors
        warm: 'var(--color-warm)',
        backgroundLight: 'var(--color-background-light)',
        backgroundDark: 'var(--color-background-dark)',

        // Text colors
        textLight: 'var(--color-text-light)',
        textDark: 'var(--color-text-dark)',

        // Functional colors
        accent: 'var(--color-accent)',
        error: 'var(--color-error)',
        confirm: 'var(--color-confirm)',
        link: 'var(--color-link)',

        // Monochrome colors - inheriting from CSS variables
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },

        // Backward compatibility aliases
        darkCard: 'var(--color-primary)',
        lightCard: 'var(--color-warm)',
        light: 'var(--color-background-light)',
        cream: 'var(--color-warm)',
      },

      fontFamily: {
        // ROK Brand Fonts - Inheriting from CSS variables
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },

      fontSize: {
        xxs: '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },

      fontWeight: {
        light: 'var(--font-weight-light)',
        normal: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
        black: '900',
      },

      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },

      spacing: {
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        6: 'var(--spacing-6)',
        8: 'var(--spacing-8)',
        12: 'var(--spacing-12)',
        16: 'var(--spacing-16)',
        18: '4.5rem',
        20: 'var(--spacing-20)',
        22: '5.5rem',
        24: 'var(--spacing-24)',
        32: 'var(--spacing-32)',
        88: '22rem',
        128: '32rem',
      },

      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },

      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      animation: {
        heartbeat: 'heartbeat 3s infinite',
        fadeIn: 'fadeIn 0.6s ease forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },

      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.08)' },
          '70%': { transform: 'scale(1)' },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      boxShadow: {
        soft: 'var(--shadow-sm)',
        medium: 'var(--shadow-base)',
        fashion: 'var(--shadow-fashion)',
        sm: 'var(--shadow-sm)',
        base: 'var(--shadow-base)',
        lg: 'var(--shadow-lg)',
      },

      backdropBlur: {
        xs: '2px',
      },

      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '4/5': '4 / 5',
        '2/3': '2 / 3',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
