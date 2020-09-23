// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: ['bg-white', 'bg-yellow', 'bg-dark-yellow', 'bg-red', 'bg-teal', 'bg-grey', 'bg-orange', 'bg-green'],
    }
  },
  theme: {
    fontFamily: {
      sans: ['Gilmer', ...defaultTheme.fontFamily.sans]
    },
    container: {
      center: true,
    },
    boxShadow: {
      default: '-10px 10px 30px -5px rgba(0,0,0,0.45)',
    },
    extend: {
      colors: {
        white: '#fff',
        yellow: '#f4c800',
        'dark-yellow': '#D2AE13',
        red: '#c12c1a',
        teal: '#0a918f',
        grey: '#3f3f37',
        orange: '#fb6107',
        green: '#a9c40d',
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
