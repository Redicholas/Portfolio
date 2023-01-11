/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      openSans: ['Comfortaa', 'sans-serif'],
      josefin: ['Red Hat Text', 'serif'],
    },
    extend: {},
    colors: {
      fire: '#f27405',
      darkFire: '#731702',
      white: '#fff',
      black: '#000',
      darkGreen: '#014040',
      middleGreen: '#02635E',
      lightGreen: '#03A678',
      transparentBlack: '#00000033',
    },
    plugins: [],
  },
};
