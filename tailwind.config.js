const tailwindcss = require('tailwindcss');

module.exports = {
  theme: {
    colors: {
      myBlue: "#4b21ff"
    },
    extend: {
    }
  },
  variants: {
    boxshadow: ['hover'],
  },
  plugins: [
    tailwindcss('./tailwind.js'),
  ]
};
