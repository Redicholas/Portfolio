/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      comfortaa: ["Comfortaa", "sans-serif"],
      redHat: ["Red Hat Text", "serif"],
    },
    extend: {},
    colors: {
      fire: "#f27405",
      darkFire: "#731702",
      white: "#fff",
      black: "#000",
      darkGreen: "#014040",
      middleGreen: "#02635E",
      lightGreen: "#03A678",
      transparentBlack: "#00000033",
      blue1: "#020E26",
      blue2: "#57AAF2",
      blue3: "#77ABD9",
      blue4: "#B6D6F2",
      blue5: "#0597F2",
    },
    plugins: [],
  },
};
