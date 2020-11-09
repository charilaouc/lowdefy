const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  mode: 'production',
  target: 'node',
  node: false,
  externals: ['fs', 'path', 'fsevents'],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: '12',
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'build',
      library: { type: 'commonjs' },
      filename: 'remoteEntry.js',
      exposes: {
        './build': './src/build.js',
      },
      shared: dependencies,
    }),
  ],
};
