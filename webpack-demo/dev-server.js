// 在 Node.js API 中使用 webpack dev server 时，不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。而是，在创建时，将其作为第二个参数传递
// 例如：

// new WebpackDevServer(compiler, options)

// 想要启用 HMR，还需要修改 webpack 配置对象，使其包含 HMR 入口起点。webpack-dev-server package 中具有一个叫做 addDevServerEntrypoints 的方法，你可以通过使用这个方法来实现。这是关于如何使用的一个基本示例：

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');
const options = {
    contentBase: './dist',
    hot: true,
    host: '127.0.0.1' // 这里的host需要与下面listen的host一样，且都为127.0.0.1 （写成localhost会报错  原因是本地开了crashX代理）
}

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(5000, '127.0.0.1', () => {
    console.log('正在5000端口跑服务');
});