/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
    colors: {
      lightGrey: "#EAEAEA",
      powderBlue: "#bbd6e2",
      fire: "#f27405",
      white: "#fff",
      black: "#000",
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
