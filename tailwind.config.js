/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light1: "#F6F5F5",
        light2: "#D3E0EA",
        dark1: "#1687A7",
        dark2: "#276678",
      },
    },
  },
  plugins: [],
};
