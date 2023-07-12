/* eslint-env node */

module.exports = {
  presets: [
    '@quasar/babel-preset-app',
    [
      '@babel/env',
      {
        corejs: 3,
        targets: {
          chrome: 49
        },
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    "@babel/plugin-transform-exponentiation-operator"
  ]
}
