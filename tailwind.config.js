module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("daisyui")],
};
