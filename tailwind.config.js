/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          light: "#4796A9",
          dark: "#3A7988",
        },
      },
      boxShadow: {
        custom: "20px 20px 30.2px 6 rgba(0, 0, 0, 0.25)", // x: 20, y: 20, blur: 30.2, spread: 0, opacity: 25%
        custom2: "10px 10px 6.7px 0 rgba(0, 0, 0, 0.25)",
        form:"6px 6px 11.4px -10 rgba(0, 0, 0, 0.25)"
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #4796A9, #3A7988)",
        "custom-gradient1": "linear-gradient(to right, #4796A90A, #3A79880A)",
        "card-gradient":
          "linear-gradient(to bottom, #181C1D1A 10%, #242828 100%)",
        'card-gradient2': 'linear-gradient(to right, #2D555FDB 50%, #203135DB 86%)',
        },
    },
  },
  plugins: [],
};
