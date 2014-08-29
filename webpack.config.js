/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';

module.exports = {
  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: './src/scripts/components/<%= pkg.mainInput %>.jsx',

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['','.js','.jsx'],
    modulesDirectories: ['src', 'src/js', 'bower_components', 'node_modules']
  },

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
    },
    // {
    //     test: /\.woff$/,
    //     loader: "url?limit=5000&mimetype=application/font-woff"
    // },
    // { test: /\.ttf$/,    loader: "file" },
    // { test: /\.eot$/,    loader: "file" },
    // { test: /\.svg$/,    loader: "file" },
    {
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
