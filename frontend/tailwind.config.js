module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      sm: "300px",
      md: "760px",
      lg:"1024px"
    },
    fontFamily: {
    lato: ["Lato, sans-serif"],
    raleway: ["Raleway, sans-serif"],
    openSans: ["font-family: 'Raleway', sans-serif"]
    },
    borderWidth: {
      '10': '10px',
      '12': '12px',
    },
  },
  plugins: [],
}