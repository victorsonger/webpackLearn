const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 从 webpack v4 开始, 指定 mode 会自动地配置 DefinePlugin(即用来获取 process.env.NODE_ENV)
  // 设置 production mode 配置后，webpack v4+ 会默认压缩你的代码
  mode: "production",
  entry: {
    app: "./src/index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "生产环境demo"
    }),
    // 清理 /dist 文件夹
    new CleanWebpackPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
