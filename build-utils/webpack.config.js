const path = require('path');

module.exports = {
  // This is unnecessary in Webpack 5, because it's the default.
  // However, react-refresh-webpack-plugin can't find the entry without it.
  entry: './src/index.tsx',

  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.join(__dirname, '../build/'),
    filename: 'js/[name].[contenthash:8].js',
    // this places all images processed in an image folder
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
  },

  cache: {
    type: 'filesystem'
  }
};
