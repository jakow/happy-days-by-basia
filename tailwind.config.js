module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["PT Sans", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    colors: {
      ivory: "#FFFCF8",
      yellow: "#F9F1E8",
      green: "#E9F0EC",
      pink: "#F3EBEE",
      red: "#F6E1E1",
      blue: "#EBF1F9",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
