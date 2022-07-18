/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        night: {
          dark: "#232946",
          gray: "#B8C1EC",
          pink: "#EEBBC3",
          white: "#FFFFFE",
        },
        ocean: {
          deep: "#094067",
          blue: "#3DA9FC",
          gray: "#5F6C7B",
          white: "#FFFFFE",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
