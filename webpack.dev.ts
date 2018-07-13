import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import { root } from "./webpack.helpers";

const config = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  entry: {
    main: root("./src/client"),
  },
  output: {
    path: root("./dist-dev"),
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
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
