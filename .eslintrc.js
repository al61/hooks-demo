module.exports = {
  env: {
    mocha: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  rules: {
    semi: 1,
    'no-trailing-spaces': 1,
    'space-before-blocks': 1,
    'space-infix-ops': 1,
    'arrow-spacing': 1,
    'no-confusing-arrow': 1,
    'no-useless-constructor': 1,
    'object-curly-spacing': ['warn', 'always'],
    'no-duplicate-imports': [1],
    'eol-last': ['warn', 'always'],
    'no-unneeded-ternary': [1],
    'linebreak-style': [2, 'unix'],
    'comma-dangle': [1, 'always-multiline'],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'vars-on-top': [1],
    'max-len': [
      1,
      120,
      2,
      {
        ignoreComments: true,
      },
    ],
    'no-cond-assign': [2, 'except-parens'],
    'no-debugger': [1],
    'no-unused-vars': [
      1,
      {
        vars: 'local',
        args: 'none',
      },
    ],
    'no-console': [1],
    'no-underscore-dangle': [
      1,
      {
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    'no-undef': 'warn',
    'no-var': 1,
    'prefer-const': 1,
    'nonblock-statement-body-position': [1],
    'block-scoped-var': [1],
    'no-template-curly-in-string': 1,
    'default-case': 1,
    eqeqeq: 1,
    'no-extra-bind': 1,
    'import/no-unresolved': [0],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-string-refs': [1],
    'react/forbid-prop-types': 0,
    'react/prefer-es6-class': 1,
    'react/require-default-props': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-uses-vars': 2,
    'react/sort-prop-types': [
      1,
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
      },
    ],
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/no-multi-comp': 0,
    'react/no-deprecated': 0,
    'react/no-unescaped-entities': 0,
  },
  settings: {
    react: {
      version: '16.4', // React version, default to the latest React stable release
    },
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  globals: {
    expect: true,
    __ENV__: true,
    Promise: true,
    window: true,
  },
};
