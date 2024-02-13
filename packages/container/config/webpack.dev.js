const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')


const devConfig = {
  mode:  'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      },
      //shared: ['react', 'react-dom']
      shared: packageJson.dependencies
    })
  ]
}

const mergedConfig = merge(commonConfig, devConfig)
console.log("mergedConfig", mergedConfig)
module.exports = mergedConfig