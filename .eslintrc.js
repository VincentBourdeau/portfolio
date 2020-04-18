module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-default-prop': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'no-plusplus': 'off',
    'no-restricted-properties': 'off',
    'no-nested-ternary': 'off',
    'no-var': 2,
    'prefer-const': 2,
    'import/prefer-default-export': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
