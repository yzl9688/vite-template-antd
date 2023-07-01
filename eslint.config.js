const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/extensions': ['.ts', '.tsx', '.vue'],
  },
  extends: [
    './.eslintrc-auto-import.json',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
  ],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'no-const-assign': 'error',
    'object-shorthand': 'error',
    quotes: ['error', 'single'],
    'no-eval': 'error',
    'arrow-spacing': 'error',
    // vue
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',

    // import
    'import/named': 'off',
    'import/no-unresolved': 'off',

    // prettier
    'prettier/prettier': 'error',

    // ts
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
})
