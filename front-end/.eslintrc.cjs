module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'functional'],
  extends: ['eslint:recommended'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:functional/external-vanilla-recommended',
        'plugin:functional/recommended',
        'plugin:functional/stylistic',
        'prettier',
      ],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.jsx', '.tsx'] },
        ],
        'functional/no-expression-statements': 'off',
        'functional/functional-parameters': 'off',
        'functional/no-try-statements': 'error',
        'functional/no-this-expressions': 'error',
        'functional/prefer-immutable-types': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'no-var': 'error',
        'no-param-reassign': 'error',
        'prefer-const': 'error',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        "import/extensions": [
          1,
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never",
            "svg": "always"
          }
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
