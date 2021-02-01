const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
  devtool: 'source-map',
  cache: true,
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: require.resolve('ts-loader'),
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      title: 'workspace-a app',
    }),
  ],
};
