/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        Cust_OxfordBlue: "#020122",
        Cust_GiantsOrange: "#FF521B",
        Cust_SandyBrown: "#FC9E4F",
        Cust_Flax: "#EDD382",
        Cust_Vanilla: "#F2F3AE",

        cust_dark_grey: "#141414",
        cust_orange: "#f44336",
        cust_light_grey1: "#292929",
        cust_light_grey2: "#404040",
        cust_light_grey3: "#585858",
        cust_light_grey4: "#727272",
        cust_light_grey5: "#8c8c8c",
        
      }
    },
  },
  plugins: []
};