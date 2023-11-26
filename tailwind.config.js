module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'toma-primary-color': '#fed447',
        'maincolor': '#FD6D64',
      },

      backgroundImage: () => ({
        'toma-primary-gradient': 'linear-gradient(190deg, #FDED4F 0%, #FFB649 100%)'
      }),
    },
    fontFamily: {
      sans: ['Roboto'],
    }
  },
  plugins: [
  ],
};
