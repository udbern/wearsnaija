/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./dist/*.{html,js}",
    
 ],

 

  theme: {
    extend: {

      

      darkMode: 'class',

      fontFamily: {
        'libre': ['Libre Baskerville', 'serif'],
      },

      colors: {
        'footer' : '#00071B'
      },

      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },


    },
  },


  plugins: [],
}

