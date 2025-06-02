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
        // Updated ROK Brand Colors - Red Primary, Gold Secondary, White Background
        primary: {
          DEFAULT: '#FF514D', // Red as primary
          light: '#FF7A77',
          dark: '#CC413E',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold as secondary/accent
          light: '#E6C866',
          dark: '#B8941F',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold accent
          light: '#E6C866',
          dark: '#B8941F',
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

        // Background colors - White focused
        warm: '#FFFFFF', // Changed to white
        light: '#FFFFFF',
        cream: '#FAFAFA', // Very light gray for subtle contrast

        // Text colors
        backgroundLight: '#FFFFFF',
        backgroundDark: '#FF514D', // Red for dark backgrounds
        textLight: '#FFFFFF',
        textDark: '#333333',

        // Functional colors
        error: '#dc3d1c',
        confirm: '#3dc81c',
        link: '#FF514D', // Red for links

        // Keep existing names for compatibility but update colors
        darkCard: '#FF514D', // Red
        lightCard: '#FFFFFF', // White

        // Monochrome for sharp contrast
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
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
        // NO ROUNDING - All set to 0 for sharp, fashion-forward aesthetic
        none: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        DEFAULT: '0',
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
        fashion: '0 20px 40px -10px rgba(255, 81, 77, 0.15)', // Red shadow
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
