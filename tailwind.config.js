/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        l: { max: "1050px"},
        ml: { max: "960px"},
        sm: {min: "550px", max: "960px"},
        vm: {max: "850px"},
        m: { max: "700px" },
        xm: { max: "650px"},
        s: { max: "550px" },
        vs: {max: "490px"},
        xs: {max: "350px"},
        
      },
      colors: {
        primary: "#3ed232",
        secondary: "#edde33",
        background: "#F5F5F5",
        foreground: "#ffffff",
        front: "#efefef",
        back: "#000000",
        grey: "#666768",
        pink: "#FF00C7",
        footerbg: "#1B1B1B",
    
      },

      textColor:{
        gradient: 'var(--gradient-text)',
      },
      borderRadius: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
        roboto : '"Roboto", sans-serif',
        manrope: '"Manrope", sans-serif',
      },
      backgroundImage:{
          herogradient : "linear-gradient(103.22deg, #4923B4 -13.86%, #E878CF 99.55%)",
      },
    },
  },
  plugins: [],
};
