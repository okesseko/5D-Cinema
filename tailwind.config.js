module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainBlue: "#2481A6",
        lightBlue: "#00DDF2",
        gray: "#A6A6A6",
      },
      fontSize: {
        "c-40": ["40px", "40px"],
      },
      scale: {
        "c-1": "-1",
      },
      spacing: {
        "c-72": "72px",
        "c-100": "100px",
        "c-200": "200px",
        "c-400": "400px",
        "c-450": "450px",
        "c-10%": "10%",
        "c-25%": "25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
