/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: "#4f7942",
        greyish: "#f1f4f8",
        cardShow: "#f7f8f9",
        textColor: "#252b36",
      },
    },
  },
  plugins: [],
};
