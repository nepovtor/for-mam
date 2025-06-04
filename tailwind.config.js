module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
