module.exports = {
  rules: {
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true
      }
    ],
    'no-catch-shadow': 'error', // 禁止 catch 块中的异常参数与外部块变量的命名相同
  }
};
