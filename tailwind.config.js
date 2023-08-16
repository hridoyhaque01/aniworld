/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    colors: {
      overlay: "rgba(0,0,0,0.4)",
      black: "#121319",
      white: "#fff",
      yellow: "#f6ff00",
      blue: "#5a4acd",
      fade: "#a1a1a1",
      error: "#ff2b2b",
    },
    extend: {},
    backgroundImage: {
      bgOverlay:
        "linear-gradient(180deg, rgba(13, 12, 22, 0.81) 24.11%, rgba(14, 12, 25, 0.55) 62.15%, rgba(7, 6, 14, 0.52) 100%)",
    },
  },
  plugins: [require("preline/plugin")],
};
