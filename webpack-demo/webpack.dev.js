const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = merge(common, {
  mode: 'development',
  // 我们鼓励你在生产环境中启用 source map，因为它们对 debug(调试源码) 和运行 benchmark tests(基准测试) 很有帮助。虽然有着如此强大的功能，然而还是应该针对生产环境用途，选择一个可以快速构建的推荐配置（更多选项请查看 devtool）。对于本指南，我们将在生产环境中使用 source-map 选项，而不是我们在开发环境中用到的 inline-source-map
  // 避免在生产中使用 inline-*** 和 eval-***，因为它们会增加 bundle 体积大小，并降低整体性能。
  devtool: 'inline-source-map',
  // 告诉开发服务器，在哪里查找文件
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // 你可能会很感兴趣，webpack 和 webpack 插件似乎“知道”应该哪些文件生成。答案是，webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射。如果你想要知道如何以其他方式来控制 webpack 输出，了解 manifest 是个好的开始。
    //通过 WebpackManifestPlugin 插件，可以将 manifest 数据提取为一个容易使用的 json 文件。
    new ManifestPlugin()
  ],
  output: {
    // publicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问
    publicPath: '/'
  }
})
