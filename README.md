# webpackLearn
## 学习记录：
https://www.notion.so/webpack-c51ad3910ea3445b8134aa03b0070b85

## webpack 指南：
https://www.webpackjs.com/guides/

## tree shaking
代码沿用了 起步  的代码
https://webpack.docschina.org/guides/tree-shaking/


在一个纯粹的 ESM 模块世界中，很容易识别出哪些文件有 side effect。然而，我们的项目无法达到这种纯度，所以，此时有必要提示 webpack compiler 哪些代码是“纯粹部分”。

通过 package.json 的 "sideEffects" 属性，来实现这种方式。
如果所有代码都不包含 side effect，我们就可以简单地将该属性标记为 false，来告知 webpack，它可以安全地删除未用到的 export。

如果你的代码确实有一些副作用，可以改为提供一个数组：

注意，所有导入文件都会受到 tree shaking 的影响。这意味着，如果在项目中使用类似 css-loader 并 import 一个 CSS 文件，则需要将其添加到 side effect 列表中，以免在生产模式中无意中将它删除：

最后，还可以在 module.rules 配置选项 中设置 "sideEffects"。

!!通过将 mode 选项设置为 production，启用 minification(代码压缩) 和 tree shaking。
(不设置生产环境的话， 尽管可以做到标识无用exports， 但是在build时无法将其去除))