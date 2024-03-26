const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: "http://localhost:8083/"
  },
  devServer: {
    port: 8083,
    contentBase: './public',
    historyApiFallback: {
      index: '/'
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}

const mergedConfig = merge(commonConfig, devConfig)
console.log("mergedConfig", mergedConfig)
module.exports = mergedConfig