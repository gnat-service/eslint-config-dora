module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/best-practices',
        './rules/errors',
        './rules/es6',
        './rules/style',
        './rules/variables',
    ].map(require.resolve),
    rules: {}
};
