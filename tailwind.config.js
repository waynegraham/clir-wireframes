module.exports = {
  content: [
    './src/**/*.{html,njk}',
    //"./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"ABCOtto"', 'ui-sans-serif', 'system-ui'],
        abc: ['"ABCOtto"', 'sans-serif'],
      },
    }
  },
  //plugins: [ require("tw-elements/plugin.cjs") ],
  darkMode: 'class',
};
