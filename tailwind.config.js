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
      fontSize: {
        'display-xl': [
          '4.5rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'headline-md': ['2.25rem', { lineHeight: '1.3', fontWeight: '500' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'headline-lg': ['3rem', { lineHeight: '1.2', fontWeight: '500' }],
        'label-caps': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '700' }],
        'body-md': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
      },
    },
  },
  //plugins: [ require("tw-elements/plugin.cjs") ],
  darkMode: 'class',
};
