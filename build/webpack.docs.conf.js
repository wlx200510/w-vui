'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.docs')
const config = require('./config/docConfig')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      baseWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      baseWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${baseWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: utils.createNotifierCallback()
      }))

      resolve(baseWebpackConfig)
    }
  })
})