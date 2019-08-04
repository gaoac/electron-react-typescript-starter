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
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: [
            [
              'import',
              {
                libraryName: 'antd',
                style: true,
              },
            ],
          ],
        },
      },
      {
        loader: 'eslint-loader',
        options: { fix: true },
      },
    ],
  },
  {
    test: /\.(less|css)$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          modifyVars: {
            'primary-color': '#1DA57A',
          },
          javascriptEnabled: true,
        },
      },
    ],
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
