module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier",
    "@typescript-eslint"
  ],
  rules: {
    "prettier/prettier": "error",
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx','ts','tsx'] }],
    "@typescript-eslint/indent":0,
  },
};
