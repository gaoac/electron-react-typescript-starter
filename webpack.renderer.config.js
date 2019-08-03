// eslint-disable-next-line @typescript-eslint/no-var-requires
const rules = require('./webpack.rules');

module.exports = {
  // Put your normal webpack config below here
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  module: {
    rules,
  },
};
