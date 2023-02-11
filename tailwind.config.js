/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // screens
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      colors: {
        // Colors
        // Primary
        cl_Softred: "hsl(7, 99%, 70%)",
        cl_Yellow: "hsl(51, 100%, 49%)",
        cl_Darkdesaturatedcyan: "hsl(167, 40%, 24%)",
        cl_Darkblue: "hsl(198, 62%, 26%)",
        cl_Darkmoderatecyan: "hsl(168, 34%, 41%)",
        // ### Neutral
        cl_Verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        cl_Verydarkgrayishblue: "hsl(213, 9%, 39%)",
        cl_Darkgrayishblue: "hsl(232, 10%, 55%)",
        cl_Grayishblue: "hsl(210, 4%, 67%)",
        cl_White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}
