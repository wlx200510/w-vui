module.exports = {
  showEslintErrorsInOverlay: true,
  useEslint: false,
  cssSourceMap: true,
  devtool: 'cheap-module-eval-source-map',
  dev: {
    assetsPublicPath: '/',
    proxyTable: {},
    host: 'localhost',
    port: 3824,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false
  }
}