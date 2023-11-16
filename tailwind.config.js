/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#281748",
        white: "#fff",
        black: "#000",
        red: "#BE1B12",
        green: "#536D4D",
        grey: "#777777",
      },
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
      xl: "1920px",
    },
  },
  plugins: [],
};
