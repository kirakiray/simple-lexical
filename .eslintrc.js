module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    es2022: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.native.js'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  globals: {},
  overrides: [
    {
      files: ['packages/**/*.js', 'packages/**/*.jsx'],
      extends: ['@arcblock/eslint-config'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
      },
    },
    {
      files: ['packages/**/*.ts', 'packages/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
