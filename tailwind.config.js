const { colors } = require("@mui/material");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xss: "350px",
      },
    },
  },
  plugins: [],
};
