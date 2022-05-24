module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
       extend: {
        colors: {
          corp: '#A0CE4E',
          secondary: '#045B62',
          test: '#FF0000',
          darkText: '#1E293B',
          mainText: '#777777',
          lightText: '#94A3B8',
          gray: '#363839',
        },
        fontFamily: {
          'merriweather': ["'Merriweather'", 'serif']
        },
        height: {
          '128': '34rem',
        }
    },
  },
  plugins: [],
};
