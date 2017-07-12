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
        // Validate closing tag location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/jsx-closing-tag-location.md
        // TODO: enable, semver-minor
        'react/jsx-closing-tag-location': 'off',

        // Enforce all defaultProps have a corresponding non-required PropType
        // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
        // TODO: enable, semver-minor
        'react/default-props-match-prop-types': ['off', {allowRequiredDefaults: false}],

        // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
        // TODO: enable, semver-major
        'react/no-redundant-should-component-update': 'off',
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json']
            }
        },
        react: {
            pragma: 'React',
            version: '15.0'
        },
    }
};
