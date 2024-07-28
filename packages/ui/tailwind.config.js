/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@repo/tailwindcss-config/config.js')],
  prefix: '',
  content: ['./components/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
