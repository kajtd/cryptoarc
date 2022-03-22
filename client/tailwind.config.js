module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#101822',
        grayLight: '#e3e3e3',
        blueDark: '#14253d',
        blueLight: 'hsl(215, 51%, 70%)',
        primary: '#D93D6F',
        secondary: '#CCFB02',
      },
      screens: {
        laptop: '960px',
      },
    },
  },
  plugins: [],
};
