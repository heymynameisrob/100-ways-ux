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
      keyframes: {
        'fade-in': {
            '0%': {
                opacity: '0',
                transform: 'translateY(1rem)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in': 'fade-in 0.5s ease-in-out'
    },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}