module.exports = {
  extends: './node_modules/gts',
  plugins: ['deprecation'],
  rules: {
    'deprecation/deprecation': 'error',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    mocha: true,
  },
  root: true,
};
