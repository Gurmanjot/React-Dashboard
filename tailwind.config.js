module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#E5E5E5",
          text: "#8E8EA1",
        },
      },
      width: {
        brand: "375px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
