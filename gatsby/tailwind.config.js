// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ['Gilmer', ...defaultTheme.fontFamily.sans]
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        white: '#fff',
        yellow: '#f4c800',
        'dark-yellow': '#D2AE13',
        red: '#c12c1a',
        teal: '#0a918f',
        grey: '#3f3f37',
      },
      width: {
        'full-1-5': '150%',
      },
      maxWidth: {
        '45ch': '45ch',
      },
    },
  },
  variants: {},
  plugins: [],
}
