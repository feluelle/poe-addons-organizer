const path = require('path');
const webpack = require('webpack');

let options ={
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [],
      exclude: /node_modules/,
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
        Ajax$: path.resolve(__dirname, 'src/ajax/ajax.js'),
        GitHubCrawler$: path.resolve(__dirname, 'src/github/crawler/github-crawler.js'),
        GitHubCrawlerDocuments: path.resolve(__dirname, 'src/github/crawler/documents/')
    }
  },
  entry: [
    './src/main.js',
  ],
  target: "electron"

};

module.exports = options;