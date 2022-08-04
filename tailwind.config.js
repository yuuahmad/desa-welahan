// tailwind.config.js
module.exports = {
  content: [
    "./app.vue",
    './pages/**/*.{html,vue,js}',
    './pages/*.{html,vue,js}',
    "./components/**/*.{js,html,vue,ts}",
    "./components/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./dist/index.html",
    "./.output/public/index.html",
  ],

  darkMode: true, // or 'media' or 'class'
  theme: {
    colors: {
      'backgroundPrimer': '#1A1D2D',
      'backgroundSekunder': '#1E2235',
      'lemon1': '#ABF77A',
      'lemon2': '#CBFF57',
      'ungu1': '#CA7ACE',
      'ungu2': '##9965F6',
      'biru1': '#599CF5',
      'biru2': '#B9EAFE',
      'teks': '#ABADC6',


    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};