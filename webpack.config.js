const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = (env, argv) => {
  let config = {
    entry: ["@babel/polyfill", path.join(__dirname, './src/index.js')],
    output: {
      filename: 'build.js',
      path: path.join(__dirname, '/dist/cash-app')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg|gif|ttf|eot|svg|woff|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'res'
              }
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, './src/index.html'),
        minify: true
      }),
      new MiniCssExtractPlugin({ filename: "[name].css", chunkFilename: "[id].css" }),
      new CleanWebpackPlugin(),
      new MomentLocalesPlugin()
    ],
  }

  // to generate source maps - helpfull in debugging
  config.devtool = (argv.mode == "production") ? "none" : "source-map";

  return config;
}