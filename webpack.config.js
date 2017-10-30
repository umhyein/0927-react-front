const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src : path.join(__dirname, 'src'),
  dist : path.join(__dirname, 'dist'),
  style : path.join(__dirname, 'src/css/style.css')
};

module.exports = {

  entry: {
    index : path.join(PATHS.src, 'index.jsx'),
    style : PATHS.style
  },
  resolve: {
    modules: [
      PATHS.src,
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
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
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },

  devServer: {
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 7070,
    contentBase: PATHS.dist,
    historyApiFallback: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "Tether": 'tether',
      "window.jQuery": "jquery",
      "window.Tether": 'tether'
    })
  ]
};
