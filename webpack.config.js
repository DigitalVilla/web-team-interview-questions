const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    stats: 'errors-only'
  }
};

const deckOfCardsConfig = {
  ...config,
  entry: './1-deck-of-cards/src/index.js',
  output: {
    path: path.resolve(__dirname, '1-deck-of-cards/dist'),
    filename: 'bundle.js',
    publicPath: '/1-deck-of-cards/'
  }
};

const sumOfArrayConfig = {
  ...config,
  entry: './2-sum-of-array/src/index.js',
  output: {
    path: path.resolve(__dirname, '2-sum-of-array/dist'),
    filename: 'bundle.js',
    publicPath: '/2-sum-of-array/'
  }
};

const listViewerConfig = {
  ...config,
  entry: './3-list-viewer/src/index.js',
  output: {
    path: path.resolve(__dirname, '3-list-viewer/dist'),
    filename: 'bundle.js',
    publicPath: '/3-list-viewer/'
  }
};

const brokenTodoConfig = {
  ...config,
  entry: './4-broken-todo/src/index.js',
  output: {
    path: path.resolve(__dirname, '4-broken-todo/dist'),
    filename: 'bundle.js',
    publicPath: '/4-broken-todo/'
  }
};

module.exports = [ deckOfCardsConfig, sumOfArrayConfig, listViewerConfig, brokenTodoConfig ];