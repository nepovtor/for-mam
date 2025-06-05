module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/assets/**/*.css'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#F8BBD0',
        secondary: '#FFECB3',
        accent: '#BBDEFB',
      },
    },
  },
  plugins: [],
}
