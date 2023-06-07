const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    destination: "./src/destination.js",
    crew: "./src/crew.js",
    technology: "./src/technology.js",
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
        test: /\.(scss|css)$/i,
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
    new HtmlWebpackPlugin({
      template: "./crew.html",
      inject: true,
      chunks: ["crew"],
      filename: "crew.html",
    }),
    new HtmlWebpackPlugin({
      template: "./technology.html",
      inject: true,
      chunks: ["technology"],
      filename: "technology.html",
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/details.html",
    //   inject: true,
    //   chunks: ["details"],
    //   filename: "details.html",
    // }),
  ],
};
