const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const port = "3000";

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: port,
    historyApiFallback: true,
  },
});
