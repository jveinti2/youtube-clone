/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0000FF",
        secondBlue: "#1A9AB8",
        thirdBlue: "#C9D8AE",
        bgWhite: "#F2E8E0",
        primaryRed: "#C33137",
      },
    },
  },
  plugins: [],
};
