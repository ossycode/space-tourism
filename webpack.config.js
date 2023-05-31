const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    destination: "./src/destination.js",
  },
  // output: {
  //   path: path.resolve(__dirname, "./dist"),
  //   filename: "[name].js",
  //   filename: "[name].[contenthash].bundle.js",
  // },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: true,
      chunks: ["main"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./destination.html",
      inject: true,
      chunks: ["destination"],
      filename: "destination.html",
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/details.html",
    //   inject: true,
    //   chunks: ["details"],
    //   filename: "details.html",
    // }),
  ],
};
