module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "vieva-orange": {
          2: "#D93F00",
          3: "#E15100",
          4: "#EC7100",
          5: "#F59B32",
          6: "#FCC67C",
          7: "#FFF5E7",
        },
        "vieva-blue": {
          1: "#2F80ED",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
