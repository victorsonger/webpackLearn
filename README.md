# webpackLearn

## 代码分离
https://webpack.docschina.org/guides/code-splitting/

沿用管理输出的代码

常用的代码分离方法有三种：

入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 SplitChunksPlugin 去重和分离 chunk。
动态导入：通过模块中的内联函数调用来分离代码。

本分支展示第三种方法