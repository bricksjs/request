const path = require('path');

// resolve 函数
const resolve = (...dirs) => path.join(__dirname, '..', ...dirs);

const config = {
  resolve,
};

module.exports = config;
