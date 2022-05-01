module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        "custom-color-red": "#B20600",
        "custom-color-orange": "#FF5F00",
        "custom-color-grey": "#EEEEEE",
        "kc-green": "#166534",
        "kc-light-green": "#f0fdf4",
        "kc-active-green": "#84cc16",
        "kc-green-hover": "#14532",
        "kc-color-grey": '#333333',
        "kc-border-green": "#22c55e",
      },
      container: {
        center: true,
        padding: "1rem",
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1124px",
            xl: "1124px",
            "2xl": "w-10/12",
        },
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
