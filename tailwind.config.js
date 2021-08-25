module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainBlue: "#2481A6",
        lightBlue: "#00DDF2",
        gray: "#A6A6A6",
      },
      spacing: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
