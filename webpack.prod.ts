import * as webpack from "webpack";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import { AngularCompilerPlugin } from "@ngtools/webpack";

import { root } from "./webpack.helpers";

const config = {
  target: "web",
  mode: "development",
  devtool: false,
  entry: {
    main: root("./src/client"),
  },
  output: {
    path: root("./dist-prod"),
    filename: "[name].[hash].bundle.js",
    publicPath: "/",
    chunkFilename: "chunk.[hash].[id].js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    modules: [root("./node_modules")],
  },
  context: root("./src"),
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.AOT": true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new AngularCompilerPlugin({
      tsConfigPath: root("./tsconfig.aot.json"),
      entryModule: root("./src/browser.module") + "#MainModule",
    }),
  ],
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "resolve-url-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: [{ loader: root("./node_modules/@ngtools/webpack") }],
      },
      {
        test: /\.ts$/,
        use: [
          { loader: "awesome-typescript-loader" },
          { loader: "angular2-template-loader" },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              interpolate: "require",
              minimize: false,
            },
          },
        ],
      },
    ],
  },
  node: {
    Buffer: true,
    __dirname: true,
    __filename: true,
    crypto: "empty",
    global: true,
    process: true,
  },
};

export default config;
