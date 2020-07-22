// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ['Gilmer Regular', ...defaultTheme.fontFamily.sans]
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        white: '#fff',
        yellow: '#e9c018',
      },
    },
  },
  variants: {},
  plugins: [],
}
