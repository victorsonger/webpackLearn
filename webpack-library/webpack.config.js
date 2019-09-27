const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-number.js",
    // 将你的 library bundle 暴露为名为 webpackNumbers 的全局变量，consumer 通过此名称来 import
    library: 'webpackNumbers',
    // 为了让 library 和其他环境兼容，则需要在配置中添加 libraryTarget 属性。这个选项可以控制以不同形式暴露 library
    libraryTarget: 'umd'
  },
  // 外部扩展
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
};
