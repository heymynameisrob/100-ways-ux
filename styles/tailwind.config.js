const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    fontFamily: {
      'sans': 'DM Sans, sans-serif',
    },
    colors: {
      ...colors,
      "primary": '#8E64FF',
      "primary-dark": '#5b34c2',
      "primary-light": "#e2d8fe",
      "muted": "#FCFAFA"
    },
    extend: {
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {},
  plugins: [],
}