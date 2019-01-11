module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'vue/no-use-v-if-with-v-for': ['error', {
      'allowUsingIterationVar': true
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
