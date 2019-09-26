# webpackLearn
## 学习记录：
https://www.notion.so/webpack-c51ad3910ea3445b8134aa03b0070b85

## webpack 指南：
https://www.webpackjs.com/guides/


# webpack-demo
## 模块热替换
https://webpack.docschina.org/guides/hot-module-replacement/

# webpack-library
## 展示如何创建一个library
分支名： author-libraries
文档地址： https://webpack.docschina.org/guides/author-libraries/
完整的librariy创建示例： https://github.com/kalcifer/webpack-library-example

### library应该实现的几个目标
使用 externals 选项，避免将 lodash 打包到应用程序，而使用者会去加载它。
将 library 的名称设置为 webpack-numbers。
将 library 暴露为一个名为 webpackNumbers 的变量。
能够访问其他 Node.js 中的 library。
ES2015 模块。例如 import webpackNumbers from 'webpack-numbers'。
CommonJS 模块。例如 require('webpack-numbers').
全局变量，在通过 script 标签引入时