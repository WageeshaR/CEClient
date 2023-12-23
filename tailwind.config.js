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
      'primary-dark': '#0E1729',
    },
    extend: {},
  },
  plugins: [],
}