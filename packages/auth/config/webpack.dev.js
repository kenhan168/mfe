const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: "http://localhost:8082/"
  },
  devServer: {
    port: 8082,
    contentBase: './public',
    historyApiFallback: {
      index: '/'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap'
      },
      //shared: ['react', 'react-dom']
      shared: packageJson.dependencies
    })
  ]
}

const mergedConfig = merge(commonConfig, devConfig)
console.log("mergedConfig", mergedConfig)
module.exports = mergedConfig