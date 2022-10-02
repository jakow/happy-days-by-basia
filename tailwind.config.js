module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      blue: "#EBF1F9",
      green: "#E9F0EC",
      ivory: "#FFFCF8",
      pink: "#F3EBEE",
      red: "#F6E1E1",
      yellow: "#F9F1E8",
    },
    fontFamily: {
      display: ["Playfair Display", "serif"],
      sans: ["PT Sans", "sans-serif"],
      serif: ["Source Serif Pro", "serif"],
    },
  },
};
