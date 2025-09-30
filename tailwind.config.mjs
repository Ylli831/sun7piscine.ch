/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override default gray/white colors
        white: '#C3D5FD',
        gray: {
          50: '#C3D5FD',
          100: '#B8CCFC',
          200: '#A8BFFA',
          300: '#98B2F8',
          400: '#88A5F6',
          500: '#7898F4',
          600: '#112A46',
          700: '#0F2540',
          800: '#0D1F3A',
          900: '#0B1934',
        },
        slate: {
          50: '#C3D5FD',
          100: '#B8CCFC', 
          200: '#A8BFFA',
          300: '#98B2F8',
          400: '#88A5F6',
          500: '#7898F4',
          600: '#112A46',
          700: '#0F2540',
          800: '#0D1F3A',
          900: '#0B1934',
        },
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#c3d5fd',
          600: '#a7c7f7',
          700: '#8bb5f1',
        },
        accent: {
          400: '#d4af37',
          500: '#b8941f',
        },
        pool: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        // New default theme colors
        'default-bg': '#C3D5FD',
        'default-text': '#112A46',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
};