const config = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};

module.export = config;
