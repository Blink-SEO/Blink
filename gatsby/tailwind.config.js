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
        yellow: '#f4c800',
        grey: '#3f3f37',
      },
    },
  },
  variants: {},
  plugins: [],
}
