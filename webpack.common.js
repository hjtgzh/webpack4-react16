const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js' //相对路径
    // common_react: ['react', 'react-dom'] // 提取出React/Redux等依赖，避免重复打包
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //打包文件的输出路径
    filename: '[name].bundle.js' //打包文件名
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false // 去除asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
  },
  module: {
    rules: [
      // jsx语法使用
      {
        test: /\.jsx$|\.js$/,
        loaders: 'babel-loader'
      },
      // 使用css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 使用less
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // 使用图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      //处理字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  // plugins是用于扩展webpack功能的
  plugins: [
    new CleanWebpackPlugin(['dist']), // 在每次构建前清理 /dist 文件夹，是比较推荐的做法
    new HtmlWebpackPlugin({
      // 让webpack知道这就是我们的html入口文件
      template: './public/index.html', // 指定模板路径
      filename: 'index.html' // 指定文件名
    })
  ]
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       common_react: {
  //         chunks: 'initial',
  //         minChunks: 3,
  //         name: 'common_react',
  //         enforce: true
  //       }
  //     }
  //   }
  // }
};
