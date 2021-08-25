module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    // "jest/globals": true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    // parser: '@babel/eslint-parser',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  settings: {
    'import/resolver': {},
    react: {
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
    jest: {
      version: 26,
    },
  },
  plugins: ['react', 'import', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    // base
    'no-shadow': 'off',
    'max-len': 'off',

    // react
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',

    // simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // import
    'import/no-unresolved': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 'off',

    // typescript
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/consistent-type-imports': 2,
  },
};
