/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: "#714fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      "base-4": "1.02rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
