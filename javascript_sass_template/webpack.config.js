const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const config = {
  target: "web",

  mode: "development",

  devtool: false,

  entry: {
    main: "./src/js/main.js",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    mainFields: ["browser", "module", "main"],
    symlinks: false,
  },

  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
    clean: true,
  },

  node: false,

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/package.json", to: "./package.json" }],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      fix: true,
      failOnError: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
};

module.exports = config;
