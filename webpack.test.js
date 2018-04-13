const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js', //相对路径
  output: {
    path: path.resolve(__dirname, 'dist'), //打包文件的输出路径
    filename: 'bundle.js' //打包文件名
  },
  devServer: {
    contentBase: './dist',
    hot: true // 模块热替换,  webpack 内置的 HMR 插件
  },
  module: {
    rules: [
      // jsx语法使用
      {
        test: /\.jsx$|\.js$/,
        loaders: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
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
    }),
    new webpack.NamedModulesPlugin(), // 以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin({
      // 一个能够删除未引用代码(dead code)的压缩工具 ,如果只有new UglifyJSPlugin() 会报错
      sourceMap: true
    })
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /jquery/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1,
          reuseExistingChunk: true
        }
      }
    }
  }
};
