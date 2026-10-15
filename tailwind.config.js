/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'brand-forest': '#0A3026',
        'brand-leaf': '#1B5E43',
        'brand-gold': '#C59B27',
        'brand-earth': '#4A3B32',
        'brand-surface': '#FAFAFA'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
};
