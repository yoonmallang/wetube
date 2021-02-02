const path = require("path");
const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "asset", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: MODE,
  entry: ["@babel/polyfill", ENTRY_FILE],
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                pluginss: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: "cover 99.5%",
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  // eslint-disable-next-line no-dupe-keys
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};

module.exports = config;
