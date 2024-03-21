module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2020: true,
  },
  plugins: ['react', 'tailwindcss', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'warn'
  }
};