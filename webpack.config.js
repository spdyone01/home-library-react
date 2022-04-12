const path = require("path");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public"),
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
          { loader: 'css-loader', options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  }
};
