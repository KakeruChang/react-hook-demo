module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'always'],
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': ['error', 'after'],
    'max-len': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'function-paren-newline': 'off'
  }
}
