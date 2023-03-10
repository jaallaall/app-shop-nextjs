/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1140px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1765FC",
          dark: "#003eb2",
        },
        secondary: {
          100: "#F1F2F4",
        },
        danger: {
          100: "#f9c2cd",
          DEFAULT: "#f97a93",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: theme("colors.blue-500"),
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "4px",
          width: "5px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#dbdbdb",
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: "#F1F2F4",
        },
      });
    }),
  ],
};
