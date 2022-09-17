/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      emerald: colors.emerald,
      indigo: colors.indigo,
      sky: colors.sky,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      spacing: {
        0: "0px",
        1: '0.25rem',
      }
    },
  },
  plugins: [],
}
