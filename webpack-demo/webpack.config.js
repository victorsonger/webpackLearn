const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[id].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // 使用imports-loader覆盖this的指向
      // https://webpack.docschina.org/loaders/imports-loader/
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?this=>window"
      },
      // 使用exports-loader，将一个全局变量作为一个普通的模块来导出
      // https://webpack.docschina.org/loaders/exports-loader/
      {
        test: require.resolve("./src/global.js"),
        use: "exports-loader?file,parse=helpers.parse"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "shim"
    }),
    new webpack.ProvidePlugin({
      // 我们本质上所做的，就是告诉 webpack……  如果你遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块。
      //  _: 'lodash'
      // 数组路径  无论 join 方法在何处调用，我们都只会获取到 lodash 中提供的 join 方法
      join: ["lodash", "join"]
    })
  ]
};
