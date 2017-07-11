module.exports = {
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                // CallExpression: {
                // parameters: null,
                // },
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                }
            }
        ],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                mode: 'strict'
            }
        ],
        'lines-around-comment': [
            'error',
            {
                allowBlockStart: true,
                allowObjectStart: true,
                allowArrayStart: true
            }
        ],
        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'max-params': [
            'warn',
            7
        ],
        'no-multiple-empty-lines': ['warn',
            {
                max: 2,
                maxEOF: 1
            }
        ],
        'no-plusplus': 'off', // 允许自增和自减
        'object-curly-spacing': ['error', 'never', {objectsInObjects: false, arraysInObjects: false}],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'always',
            asyncArrow: 'always'
        }],
    }
};
