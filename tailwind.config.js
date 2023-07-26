/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#000444',
        first: '#28DF99',
        second: '#99F3BD',
      },
      backgroundImage: {
        logo: "url('/src/assets/images/logo.png')",
      },
    },
  },
  safelist: ['bg-navy', 'bg-first', 'bg-second'],
  plugins: [],
};
