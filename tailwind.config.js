/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./build.css", "./dist/**/*.{html,js}", "./**/*.{html,js}"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
        sora: ["Sora"],
      },
      colors: {
        "bg-color": "#272727",
        "gradient-1": "#3BF686",
        "gradient-2": "#4CA9FF",
        "bg-project": "#323443",
        "bg-hover": "#4c4d5b",
        "sec-text": "rgba(239, 237, 232, 0.6)",
      },
      margin: {
        "32px": "32px",
      },
      height: {
        "h-1082px": "1082px",
        "h-338px": "338px",
      },
      width: {
        18: "68px",
      },
    },
  },
  plugins: [],
};
