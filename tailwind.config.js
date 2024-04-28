/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
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