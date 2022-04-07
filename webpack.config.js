const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          { loader: 'css-loader', options: { importLoaders: 1 } },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ]
};
