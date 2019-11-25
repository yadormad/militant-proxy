module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": 0,
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "no-tabs": 0,
    "prefer-promise-reject-errors": 0,
    "no-underscore-dangle": 0,
  },
};
