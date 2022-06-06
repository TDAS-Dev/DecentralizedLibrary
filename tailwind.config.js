module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      sm: "360px",
      md: "760px",
      lg:"1024px"
    },
    fontFamily: {
    lato: ["Lato, sans-serif"],
    raleway: ["Raleway, sans-serif"],
    openSans: ["font-family: 'Open Sans', sans-serif;"],
    kumbh: ["font-family: 'Kumbh Sans', sans-serif;"]
    },
    borderWidth: {
      '6' : '6px',
      '7' : '7px',
      '8' : '8px',
      '10': '10px',
      '12': '12px',
    },
  },
  plugins: [],
}