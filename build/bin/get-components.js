/**
 * 用于获取components文件夹下的所有组件
 */

const fs = require('fs');
const path = require('path');

module.exports = function() {
  const allDirs = fs.readdirSync(path.resolve(__dirname, '../../components'));
  const excludes = ['index.js', 'mixins', 'utils', '.DS_Store'];
  return allDirs.filter(dirName => excludes.indexOf(dirName) === -1);
}