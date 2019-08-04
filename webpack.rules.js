module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(jsx|tsx|ts|js)?$/,
    exclude: /node_modules/,
    use: ['babel-loader', { loader: 'eslint-loader', options: { fix: true } }],
  },
  {
    test: /\.(less|css)$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name]_[sha512:hash:base64:7].[ext]',
        },
      },
    ],
  },
];
