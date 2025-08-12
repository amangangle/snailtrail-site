module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        skinbg: '#F5F3EE',
        skingray: '#333333',
        skinaccent: '#C7A77A',
        skinmuted: '#A9846F'
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'system-ui', 'Roboto']
      }
    }
  },
  plugins: []
}
