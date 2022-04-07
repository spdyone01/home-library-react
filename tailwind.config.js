module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
  },
  plugins: [require("daisyui")],
};
