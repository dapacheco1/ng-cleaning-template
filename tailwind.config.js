/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#004A82',
        'black-text':'#444'
      }
    },
  },
  plugins: [],
}