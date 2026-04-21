const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    privacy: './src/privacy.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Template',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      title: 'Privacy Policy',
      template: './src/policies/privacy.html',
      filename: 'policies/privacy.html',
      chunks: ["privacy"]
    }),
  ],
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
};