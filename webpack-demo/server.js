const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// console.log('compiler------------------------------ \n', compiler);

// 告诉express使用webpack-dev-middleware并使用webpack.config.js 配置文件作为基础

const appUseParam = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
});
// console.log('appUseParam ----------------------- \n', appUseParam);


app.use(appUseParam);

// 在3000端口跑服务
app.listen(3000, function () {
  console.log('示例app正在3000监听！\n');
})