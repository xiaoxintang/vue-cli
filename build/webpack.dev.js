process.env.NODE_ENV = "development";
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const portfinder = require('portfinder');

const { logIp } = require('../utils/utils');

portfinder.basePort = 8080;    // default: 8000
portfinder.highestPort = 9000;

module.exports = () => new Promise((resolve, reject) => {
  portfinder.getPortPromise().then(freePort => {
    logIp(freePort);
    process.env.NODE_ENV = 'development';
    resolve(
      merge(baseConfig, {
        mode: 'development',
        devServer: {
          compress: true,
          port: freePort,
          hot: true,
          noInfo: true,
          clientLogLevel: 'error',
          host: "0.0.0.0",
        },
        plugins: [
          /* 启用hot module replacement(HMR) */
          new webpack.HotModuleReplacementPlugin()
        ],
        output: {
          filename: '[name].[hash].js'
        },
      })
    )
  }).catch(e => {
    console.error(`${portfinder.basePort}到${portfinder.highestPort}没有找到可用端口`)
  });
})
