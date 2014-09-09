/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {
  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: '[name].js'
  },

  debug: false,
  devtool: false,
  entry: {
    head : './src/scripts/head.js',
    main : './src/scripts/components/<%= pkg.mainInput %>.jsx'
  },

  stats: {
    colors: true,
    reasons: false
  },

  resolve: {
    extensions: ['','.js','.jsx'],
    modulesDirectories: ['src', 'src/js', 'bower_components', 'node_modules']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: ['node_modules', 'bower_components'],
      loader: 'jshint'
    }],

    loaders: [{
        test: /\.css$/,
        loader: 'style!css'
    }, {
        test: /\.scss$/,
        loader: "style-loader!css!sass-loader?outputStyle=expanded&includePaths[]=./bower_components/foundation/scss/&includePaths[]=./bower_components/foundation-icon-fonts/"
    }, {
        test: /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
    }, {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
    }, {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
    }, {
        test: /\.jsx$/,
        loader: 'jsx-loader'
    }]
  }
};
