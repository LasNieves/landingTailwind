module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
     {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'verde': '#CAEAC7',
      'gris': '#F7F7F7',
      'verdeButton' : '#4BA87D',
      'white' : '#fff',
      'black' : '#000',
    },
    zIndex: {
      'n1': '-10',
      'n2': '-5',
      'n3': '-4',
    },
  },
  plugins: [],
}
