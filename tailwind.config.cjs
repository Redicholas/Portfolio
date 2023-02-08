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
      lightGrey: "#F5F5F7",
      fire: "#f27405",
      white: "#fff",
      dark: "#0E1117",
      black: "#000",
      skyBlue: "#579be4",
      lazerBlue: "#40dde6",
      transparentBlack: "#00000033",
      transparentWhite: "#ffffff33",
      yellow: "#F4CA62",
      greyblack: "#222120",
      beige: "#EAE6D4",
      yellowbeige: "#EBE2BE",
      darker: "#141313",
    },
    plugins: [],
  },
};
