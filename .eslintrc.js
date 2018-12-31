module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['promise'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'error',
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/no-return-in-finally': 'error',
    'prefer-arrow-callback': 'error',
  },
};
