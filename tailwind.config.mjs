import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#112A46",
          sky: "#C3D5FD",
          skyMuted: "#AEC3EF",
          gold: "#FED700",
          goldDark: "#E6C200",
          goldBright: "#FED700",
        },
        pool: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#EEF2F6",
          200: "#CFD8E6",
          300: "#B3C1D8",
          400: "#8CA1BF",
          500: "#5F7AA1",
          600: "#3E587D",
          700: "#233B5C",
          800: "#172947",
          900: "#0F1D35",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        'hero': ['Montserrat', 'Inter', ...defaultTheme.fontFamily.sans],
        'display': ['Bebas Neue', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;