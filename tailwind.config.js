module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'jumbotron': "url('https://www.travelreport.mx/wp-content/uploads/2019/02/que-hacer-en-tequesquitengo-muelle-e1549516752746.jpg')",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
