module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      ms: "640px",
      md: "768px",
      lg: "992px",
      xl: "1300px",
    },

    container: {
      center: true,
      // padding: "1rem",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
