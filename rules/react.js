module.exports = {
  plugins: [
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    'react/boolean-prop-naming': 'off',
    'react/no-typos': 'off',
    'react/no-unused-state': 'off',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json'
        ]
      }
    },
    react: {
      pragma: 'React',
      version: '15.0'
    },
  }
};
