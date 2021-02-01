const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',
  cache: true,
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: require.resolve('ts-loader'),
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      title: 'workspace-a app',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};
