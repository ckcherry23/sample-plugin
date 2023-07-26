const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path');
const port = "3000";

module.exports = {
  output: {
    filename: '[name].[contenthash].js', 
    path: path.resolve(__dirname, 'dist'),
    publicPath: `http://localhost:${port}/`,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'assets/img/[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "sampleReactPlugin",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Register": "./src/register.tsx",
      },
      shared: {
        "react@^17.0.2": { singleton: true },
        "react-dom@^17.0.2": { singleton: true },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ]
};
