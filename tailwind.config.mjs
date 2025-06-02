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
        // Primary Palette - Purple
        primary: '#50036C',
        'primary-light': '#7A35A0',
        'primary-dark': '#3B0251',

        // Secondary Palette - Orange
        secondary: '#FF514D',
        'secondary-light': '#FF7A77',
        'secondary-dark': '#CC413E',

        // Tertiary Colors - Mulberry Smoke
        tertiary: '#826466',
        'tertiary-light': '#A08789',
        'tertiary-dark': '#5F484A',

        // Neutral Colors
        neutral: '#D8D6D3',
        'neutral-light': '#E8E7E5',
        'neutral-dark': '#B8B5B1',

        // Background Colors
        light: '#FFFFFF',
        warm: '#F3E2DA',
        cream: '#F3E2DA',

        // Text Colors
        dark: '#333333',
        light: '#FFFFFF',
        muted: '#666666',

        // Functional mappings for ROK Coaching
        backgroundLight: '#FFFFFF',
        backgroundDark: '#50036C',
        accent: '#FF514D',
        altPrimary: '#826466',
        altAccent: '#D8D6D3',
        textLight: '#FFFFFF',
        textDark: '#333333',
        error: '#dc3d1c',
        confirm: '#3dc81c',
        link: '#50036C',
        darkCard: '#50036C',
        lightCard: '#F3E2DA',

        // Backward compatibility mappings
        'db-red': '#FF514D',
        purple: '#50036C',
        tan: '#826466',
        teal: '#50036C',
      },
      fontFamily: {
        heading: ['Agrandir', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        heartbeat: 'heartbeat 3s infinite',
        fadeIn: 'fadeIn 0.6s ease forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      },
    },
  },
};

export default tailwindConfig;
