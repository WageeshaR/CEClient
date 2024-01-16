/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    colors: {
      ...colors,
      'primary-light': '#38BDF9',
      'primary-light-hover': '#43C3FA',
      'primary-dark': '#0E1729',
      'primary-dark-hover': '#221E2D',
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(1000px)" }
        }
      },
      animation: {
        wiggle: "wiggle 1000ms ease-in-out"
      }
    }
  },
  plugins: [],
}