module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        snailwhite: '#ffffff',
        snailbrown: '#A9744F'
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'system-ui', 'Roboto', 'Helvetica', 'Arial']
      }
    }
  },
  plugins: []
}
