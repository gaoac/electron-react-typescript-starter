// eslint-disable-next-line @typescript-eslint/no-var-requires
const rules = require('./webpack.rules');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main/main.ts',
  node: {
    __dirname: true,
  },
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
