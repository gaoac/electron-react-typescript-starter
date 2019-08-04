/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const rules = require('./webpack.rules');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // Put your normal webpack config below here
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': resolve('./src'),
    },
  },
  module: {
    rules,
  },
};
