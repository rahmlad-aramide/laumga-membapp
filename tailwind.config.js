/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#CCAE0E",
      },
      backgroundImage: {
        "hero-image": "url('./assets/images/hero-image.png')",
        "login-image": "url('./assets/images/login-bg.png')",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        man: ["Manrope", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
