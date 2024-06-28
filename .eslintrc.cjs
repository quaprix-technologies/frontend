module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    'react/jsx-no-target-blank': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "^(_|React$)",
        "argsIgnorePattern": "^_"
      }
    ],
    'prettier/prettier': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
  },
  ignorePatterns: ['node_modules/', 'build/', 'dist/'],
  globals: {
    process: 'readonly',
  },
};
