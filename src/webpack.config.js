var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'js/bundle')
var APP_DIR = path.join(__dirname, 'js')

var config = {
  entry: {
    'app': APP_DIR + '/root.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;