const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    another: "./src/another-module.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "代码分离"
    }),
    // 清理 /dist 文件夹
    new CleanWebpackPlugin(),
    // 你可能会很感兴趣，webpack 和 webpack 插件似乎“知道”应该哪些文件生成。答案是，webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射。如果你想要知道如何以其他方式来控制 webpack 输出，了解 manifest 是个好的开始。
    //通过 WebpackManifestPlugin 插件，可以将 manifest 数据提取为一个容易使用的 json 文件。
    new ManifestPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  optimization: {
    // SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件，将前面示例中重复的 lodash 模块去除
    splitChunks: {
      chunks: "all"
    }
  }
};
