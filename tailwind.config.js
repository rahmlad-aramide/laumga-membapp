/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#CCAE0E",
        form_bg: "#F2F2F2",
      },
      backgroundImage: {
        "hero-image": "url('./assets/images/hero-image.jpg')",
        "login-image": "url('./assets/images/login-bg.png')",
        "review-image": "url('./assets/images/review-image.jpg')",
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
