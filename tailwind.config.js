/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors')

export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Outfit"', 'serif'],
      },
    colors: {
      'reMain': '#4AAB3D',
    },

    },
  },
  plugins: [],
}

