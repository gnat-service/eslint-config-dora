module.exports = {
    plugins: [
        'jsx-a11y',
        'react'
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    rules: {
        // ensure <a> tags are valid
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
        // TODO: enable, semver-major
        'jsx-a11y/anchor-is-valid': [
            'off', {
                components: ['Link'],
                specialLink: [],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            }
        ],
    },
};
