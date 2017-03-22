const webpack = require('webpack');
const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/app');

const config = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './client',
    historyApiFallback: true,
    port: 8100,
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      ]),
    }],
  },
};

module.exports = config;
