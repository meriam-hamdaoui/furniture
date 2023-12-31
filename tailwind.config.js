/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["page/index.html"],
  presets: [require("./src/js/my-preset")],
  theme: {
    extend: {
      colors: {
        "bg-furniture": "#F2F5FF",
      },
      fontFamily: {
        sans: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
