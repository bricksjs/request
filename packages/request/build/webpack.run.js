const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);
compiler.run((err, stat) => {
  if (err) {
    throw err;
  }

  process.stdout.write(stat.toString({
    colors: true,
  }));
});
