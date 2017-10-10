const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src : path.join(__dirname, 'src'),
  dist : path.join(__dirname, 'dist')
}

module.exports = {

  entry: path.join(PATHS.src, 'index.jsx'),
  resolve: {
    modules: [
      PATHS.src,
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: 'file'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.src
      }
    ]
  },

  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 7070,
    contentBase: __dirname + '/public/'
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
