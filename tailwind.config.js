/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false,
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
      slate: colors.slate,
    },
    extend: {
      transitionDuration: {
        '0': '0ms',
        '1000': '1000ms',
      }
    },
    backgroundColor: (theme) => theme("colors"),

  },
  plugins: [],
}
