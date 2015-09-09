var path = require('path');
var webpack = require('webpack');

var PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.join(__dirname, 'src/client.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader?stage=0'
      }
    ],
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx']
  },
  plugins: PRODUCTION ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
  ] : [],
  devtool: 'source-map'
};
