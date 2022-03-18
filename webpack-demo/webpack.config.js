const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: "./src/index.js",
    // 删除掉 print.js 的入口起点，因为现在已经在 index.js 模块中引用了它
    // print: "./src/print.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    // 告诉开发服务器，在哪里查找文件
    contentBase: './dist', 
    // 服务器启用模块热替换
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "模块热替换"
      }),
    // 清理 /dist 文件夹
    new CleanWebpackPlugin(),
    // 你可能会很感兴趣，webpack 和 webpack 插件似乎“知道”应该哪些文件生成。答案是，webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射。如果你想要知道如何以其他方式来控制 webpack 输出，了解 manifest 是个好的开始。
    //通过 WebpackManifestPlugin 插件，可以将 manifest 数据提取为一个容易使用的 json 文件。
    new ManifestPlugin(),
    // 模块热替换插件
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:5000 下正确访问
    publicPath: '/'
  }
};
