const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./packages/renderer/src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
