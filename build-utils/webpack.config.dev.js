const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const plugins = [
  new MiniCssExtractPlugin(),
  new StyleLintPlugin({
    files: ['**/*.{css, sss,less,scss,sass}'],
    cache: true
  }),
  new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    cache: true
  }),
  new ForkTsCheckerWebpackPlugin({
    async: false
  }),
  new ReactRefreshWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '..', 'src', 'index.html')
  })
];

module.exports = merge(common, {
  // mode defaults to 'production' if not set
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: '' }
          },
          'css-loader',
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        /**
         * The `type` setting replaces the need for "url-loader"
         * and "file-loader" in Webpack 5.
         *
         * setting `type` to "asset" will automatically pick between
         * outputing images to a file, or inlining them in the bundle as base64
         * with a default max inline size of 8kb
         */
        type: 'asset'

        /**
         * If you want to inline larger images, you can set
         * a custom `maxSize` for inline like so:
         */
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader',
          options: {
            /**
             * From the docs: When set, the given directory will be used
             * to cache the results of the loader. Future webpack builds
             * will attempt to read from the cache to avoid needing to run
             * the potentially expensive Babel recompilation process on each run.
             */
            cacheDirectory: true,
            cacheCompression: false
          }
        },
        resolve: {
          extensions: ['.jsx', '.tsx', '.ts', '.js']
        }
      }
    ]
  },

  plugins: plugins,
  target: 'web',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  // required if using webpack-dev-server
  devServer: {
    contentBase: './build',
    hot: true
  }
});
