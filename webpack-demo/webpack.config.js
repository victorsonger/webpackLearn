const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve(index.js),
        use: ''
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
    // 我们本质上所做的，就是告诉 webpack……  如果你遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块。
    //  _: 'lodash'
    // 数组路径  无论 join 方法在何处调用，我们都只会获取到 lodash 中提供的 join 方法
    join: ['lodash', 'join']
    })
  ]
};