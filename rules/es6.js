module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            experimentalObjectRestSpread: true,
            objectLiteralDuplicateProperties: false
        }
    },
    rules: {
        'arrow-spacing': [ // 箭头函数中的空格
            'error',
            {
                before: true,
                after: true
            }
        ],
        'generator-star-spacing': [ // 强制 generator 函数中 * 号周围使用一致的空格
            'error',
            {
                before: true,
                after: true
            }
        ],

        'no-class-assign': 'error', // 不允许修改类声明的变量

        'no-dupe-class-members': 'error', // 不允许类成员中出现重复名称

        // 'no-this-before-super': 'error', // 禁止 super() 前出现 this

        // 'no-useless-computed-key': 'error', // 禁止不必要的 computed-key，如 {['key']: 1}，会被要求修正为 {key: 1} 或 {key: 1}

        'no-var': 'error', // 使用 const 和 let 代替 var

        'object-shorthand': ['warn', 'always', {
            'ignoreConstructors': false,
            'avoidQuotes': true
        }],

        'prefer-const': ['warn', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],

        'prefer-rest-params': 'warn', // 使用 rest 参数替代 arguments

        'prefer-spread': [ // 使用扩展运算符替代 .apply()
            'error'
        ],


        'prefer-template': 'warn', // 使用模板字符串替代字符串拼接
    }
};
