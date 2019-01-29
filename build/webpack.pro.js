process.env.NODE_ENV = "production";
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = () => new Promise((resolve, reject) => {
  resolve(merge(baseConfig, {
    mode: 'production',
    output: {
      filename: '[name].[chunkhash].js',
      // 动态导入的模块
      chunkFilename: '[name].[chunkhash].js',
    },
    plugins: [
      new CleanWebpackPlugin('dist/*', {
        root: path.resolve(__dirname, '../')
      }),
    ],
    stats: 'errors-only'
  }))
})