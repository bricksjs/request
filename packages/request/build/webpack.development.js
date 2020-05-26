const { resolve } = require('./webpack.system');

const config = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: resolve('./lib'),
    filename: 'index.js',
    chunkFilename: '[name].chunk.[chunkhash:5].js',
  },
};

module.exports = config;
