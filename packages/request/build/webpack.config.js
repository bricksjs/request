const merge = require('webpack-merge');
const common = require('./webpack.common');

const { mode } = process.env;
let config = {};

switch (mode) {
  case 'development':
    const development = require('./webpack.development');
    config = merge(common, development);
    break;
  case 'production':
    const production = require('./webpack.production');
    config = merge(common, production);
    break;
  default:
    config = merge(common, development);
}

module.exports = config;
