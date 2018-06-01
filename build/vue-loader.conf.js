'use strict'
const config = require('./config/demoConfig')

module.exports = {
  cacheBusting: config.dev.cacheBusting,
  transformAssetUrls: { // 可以直接引用本地的图片资源了
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}