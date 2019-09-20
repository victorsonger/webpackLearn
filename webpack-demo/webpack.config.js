const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  // mode: 'development',
  // // 优化项
  // optimization: {
  //   // 可以去除未使用的exports， 在生产模式下，默认打开。其他模式下默认禁用。 在这里手动打开它
  //   usedExports: true
  mode: "production"
};
