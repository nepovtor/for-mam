module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/assets/**/*.css'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#FF968A',
        secondary: '#FFD8A9',
        accent: '#FFECCE',
      },
    },
  },
  plugins: [],
}
