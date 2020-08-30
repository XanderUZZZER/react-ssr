const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webPackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  //exclude node_modules from server bundle
  externals: [webPackNodeExternals()]
}

module.exports = merge(baseConfig, config);