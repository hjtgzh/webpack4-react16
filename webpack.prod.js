const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      // 一个能够删除未引用代码(dead code)的压缩工具 ,如果只有new UglifyJSPlugin() 会报错
      sourceMap: true
    })
  ]
});
