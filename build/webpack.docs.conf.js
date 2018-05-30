'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.docs')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

baseWebpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
)

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 3824
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