

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
       extend: {
        colors: {
          corp: {
            DEFAULT: 'var(--color-primary)',
            dark:  'var(--color-primary-dark)'
          },
          secondary: {
            DEFAULT: 'var(--color-secondary)',
            dark:  'var(--color-secondary-dark)'
          },
          textColor: {
            DEFAULT: '#777777',
            light: '#94A3B8',
            dark: '#1E293B',
          },
          logo: {
            DEFAULT: 'var(--logo)'
          },
          test: '#FF0000',
          gray: '#363839',
          loginBtn: {
            DEFAULT: '#045B62',
            dark: '#0A5056'
          }
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
