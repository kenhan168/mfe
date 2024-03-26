const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')


const devConfig = {
  mode:  'development',
  output: {
    publicPath: "http://localhost:8080/"
  },
  devServer: {
    port: 8080,
    contentBase: './public',
    historyApiFallback: {
      index: '/'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js'
      },
      //shared: ['react', 'react-dom']
      shared: packageJson.dependencies
    })
  ]
}

const mergedConfig = merge(commonConfig, devConfig)
console.log("mergedConfig", mergedConfig)
module.exports = mergedConfig