// Ver: 1.3
// Last Update: 2023/03/08

module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true,
    'vue/setup-compiler-macros': true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules (look for Vuejs 2 ones)
    // 'plugin:vue/essential', // Priority A: Essential (Error Prevention)
    'plugin:vue/strongly-recommended',
    'standard'
  ],

  plugins: [
    'vue'
  ],
  globals: {
    ga: 'readonly',
    cordova: 'readonly',
    __statics: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },
  rules: {
    'arrow-parens': 'off',
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'warn',
    'generator-star-spacing': 'off',
    'multiline-ternary': 'off',
    'no-case-declarations': 'off',
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
      { 'allow': ['error', 'warn'] }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty-pattern': 'off',
    'no-return-assign': 'off',
    'no-useless-catch': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
    'no-void': 'off',
    'one-var': 'off',
    'prefer-const': ['warn', { 'destructuring': 'all' }],
    'prefer-promise-reject-errors': 'off',
    'quote-props': 'off',
    'space-before-function-paren': 'off',

    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    'vue/attributes-order': ['warn', {
      'order': ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', ['UNIQUE', 'SLOT'], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'],
      'alphabetical': false
    }],
    'vue/html-closing-bracket-spacing': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/order-in-components': ['warn', { 'order': ['el', 'name', 'key', 'parent', 'functional', ['delimiters', 'comments'], ['components', 'directives', 'filters'], 'extends', 'mixins', ['provide', 'inject'], 'ROUTER_GUARDS', 'layout', 'middleware', 'validate', 'scrollToTop', 'transition', 'loading', 'inheritAttrs', 'model', ['props', 'propsData'], 'emits', 'setup', 'fetch', 'asyncData', 'data', 'head', 'computed', 'watch', 'watchQuery', 'LIFECYCLE_HOOKS', 'methods', ['template', 'render'], 'renderError'] }],
    'vue/require-prop-type-constructor': 'off',
    'vue/require-v-for-key': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/valid-v-for': 'warn'
  }
}
