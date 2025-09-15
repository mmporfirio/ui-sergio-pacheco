/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0057aa",
        text: "rgb(194,126,25)",
      },
    },
  },
  plugins: [],
};
