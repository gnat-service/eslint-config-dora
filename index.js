module.exports = {
  extends: [
    'eslint-config-airbnb',

    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/style',
    './rules/react',
    './rules/react-a11y',
    './rules/variables',
  ].map(require.resolve),
  rules: {}
};
