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
        // Primary Palette
        primary: '#3C7A89',
        'primary-light': '#5090A0',
        'primary-dark': '#2C5A69',

        // Secondary Palette
        secondary: '#DB5461',
        'secondary-light': '#E37883',
        'secondary-dark': '#B9343F',

        // Tertiary Colors
        tertiary: '#4C1E4F',
        'tertiary-light': '#6C3E6F',
        'tertiary-dark': '#3C0E3F',

        // Background Colors
        light: '#FFFFFF',
        warm: '#FEE1C7',
        neutral: '#B5A886',

        // Text Colors
        dark: '#333333',
        light: '#FFFFFF',
        muted: '#666666',

        // Backward compatibility
        'db-red': '#DB5461',
        purple: '#4C1E4F',
        tan: '#B5A886',
        cream: '#FEE1C7',
        teal: '#3C7A89',

        // Functional mappings
        backgroundLight: '#FFFFFF',
        backgroundDark: '#4C1E4F',
        accent: '#DB5461',
        altPrimary: '#B5A886',
        altAccent: '#805561',
        textLight: '#FFFFFF',
        textDark: '#333333',
        error: '#dc3d1c',
        confirm: '#3dc81c',
        link: '#3C7A89',
        darkCard: '#4C1E4F',
        lightCard: '#FEE1C7',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        heartbeat: 'heartbeat 3s infinite',
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.08)' },
          '70%': { transform: 'scale(1)' },
        },
      },
    },
  },
};

export default tailwindConfig;
