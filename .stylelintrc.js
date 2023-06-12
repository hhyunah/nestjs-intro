module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-property-sort-order-smacss',
  ],
  formatter: 'stylelint-checkstyle-formatter',
  plugins: ['stylelint-scss'],
  ignoreFiles: [
    'src/styles/reset.scss',
    'src/styles/common.scss',
    'styles/global.scss',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'max-nesting-depth': 3,
    'no-descending-specificity': null,
    'string-quotes': 'single',
    'scss/at-rule-conditional-no-parentheses': null,
  },
}
