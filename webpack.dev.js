const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true // 模块热替换,  webpack 内置的 HMR 插件
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin()
  ]
});
