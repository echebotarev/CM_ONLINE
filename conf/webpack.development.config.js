import webpack from "webpack";
import Config from "webpack-config";

export default new Config().extend("conf/webpack.base.config.js").merge({
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "react-hot-loader/patch",
    __dirname + "/../client/index.js"
  ],
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.local.scss$/,
        use: [
          {
            loader: "style-loader",
            options: { sourceMap: true }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[local]__[hash:base64:5]",
              getLocalIdent: (context, localIdentName, localName, options) =>
                localName +
                "__" +
                Math.random()
                  .toString()
                  .slice(2, 8),
              minimize: false,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.global.scss$/,
        use: [
          {
            loader: "style-loader",
            options: { sourceMap: true }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[local]",
              minimize: false,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
