/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        light: {
          base: "#fffffe",
          title: "#094067",
          paragraph: "#5f6c7b",
          button: "#3da9fc",
          "button-text": "#fffffe",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
