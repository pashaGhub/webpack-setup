const path = require("path");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,

  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          //without additional babel settings, this will reference .babelrc
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  devtool: "source-map",

  devServer: {
    static: "./public",
  },
};
