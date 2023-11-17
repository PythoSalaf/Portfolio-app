/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0db760",
        secondary: "#e0f6f7",
        infoColor: "#0F2851",
        basicText: "#1E293B",
        iconColor: "#446193",
        mainWhite: "#FFF",
        green: "#60BB18",
        inactiveText: "#898D9E",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};
