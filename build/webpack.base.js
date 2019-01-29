const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        use: [
          {
            loader: 'babel-loader',
            options: {//如果有这个设置则不用再添加.babelrc文件进行配置
              "babelrc": false,// 不采用.babelrc的配置
              "plugins": [
                "@babel/plugin-syntax-dynamic-import"
              ],
            },
          }
        ],
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'my vue cli project',
      filename: 'index.html',
      template: 'src/index.template.html',
      meta: {
        viewport: 'width=device-width,height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black',
        'format-detection': 'telephone=no',
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
}