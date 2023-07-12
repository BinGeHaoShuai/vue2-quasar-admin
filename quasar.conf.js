const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const path = require('path')

module.exports = function(/* ctx */) {
  return {
    supportTS: false,
    boot: [
      'axios',
      'cookies',
      'mock'
    ],
    css: [
      'app.scss'
    ],
    extras: [
      'material-icons'
    ],
    build: {
      vueRouterMode: 'hash',
      gzip: true,
      transpileDependencies: [/mathjs/],
      chainWebpack (chain) {
        chain.plugin('moment-locales-webpack-plugin').use(MomentLocalesPlugin, [{ localesToKeep: ['zh-cn'] }])
        chain.plugin('eslint-webpack-plugin').use(ESLintPlugin, [{ extensions: ['js', 'vue'] }])
        // chain.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
        chain.module.rule('enumify')
          .test(/\.js$/)
          .include
          .add(path.resolve(__dirname, './src'))
          .add(path.resolve(__dirname, 'node_modules/enumify'))
          .end()
          .use('babel-loader')
          .loader('babel-loader')
      },
      distDir: 'dist/project_name'
    },
    devServer: {
      https: false,
      port: 8080,
      open: true,
      proxy: {
        '/api': {
          target: 'http://api_domain/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    framework: {
      iconSet: 'material-icons',
      lang: 'en-us',
      config: {},
      importStrategy: 'auto',
      plugins: [
        'Notify',
        'Dialog',
        'Loading'
      ]
    },
    animations: 'all',
    ssr: {
      pwa: false
    }
  }
}
