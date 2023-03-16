// const colors  = require('tailwindcss/colors')


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   mode :'jit',
//   darkMode:'class'
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/**@type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        frostGreen:"#8FBCBB",
        frostGreenLoow:"#BFD9D8",
        burstBlue:"#2779a7",
        frostBlue:"#81A1C1",
        classicBlue:"#0F4C81",
        classicBlue2:"#053362",
        classicBlueLow:"#BCDBF6",
        classicIceBlue:"#E3FCFF",
        classicIceBlue2:"#c3d2e9",
        classicLightBlue:"#7495c5",
        classicRed:"#E65758",
        classicRedDark:"#771D32"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};