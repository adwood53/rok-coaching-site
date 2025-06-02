// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ROK Brand Colors - Following Brand Guidelines
        primary: {
          DEFAULT: '#50036C',
          light: '#7A35A0',
          dark: '#3B0251',
        },
        secondary: {
          DEFAULT: '#FF514D',
          light: '#FF7A77',
          dark: '#CC413E',
        },
        tertiary: {
          DEFAULT: '#826466',
          light: '#A08789',
          dark: '#5F484A',
        },
        neutral: {
          DEFAULT: '#D8D6D3',
          light: '#E8E7E5',
          dark: '#B8B5B1',
        },

        // Background colors
        warm: '#F3E2DA',
        light: '#FFFFFF',
        cream: '#F3E2DA',

        // Text colors (for backward compatibility)
        backgroundLight: '#FFFFFF',
        backgroundDark: '#50036C',
        textLight: '#FFFFFF',
        textDark: '#333333',

        // Functional colors
        accent: '#FF514D',
        error: '#dc3d1c',
        confirm: '#3dc81c',
        link: '#50036C',

        // Keep existing color names for compatibility
        darkCard: '#50036C',
        lightCard: '#F3E2DA',

        // Monochrome additions for fashion-forward elements
        black: '#000000',
        white: '#ffffff',
      },

      fontFamily: {
        // ROK Brand Fonts
        heading: ['Agrandir', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },

      fontSize: {
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
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
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
        18: '4.5rem',
        22: '5.5rem',
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
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        medium:
          '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        fashion: '0 20px 40px -10px rgba(80, 3, 108, 0.15)',
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
