import webpack from "webpack";
import Config from "webpack-config";

import ExtractTextPlugin from "extract-text-webpack-plugin";
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

export default new Config().extend("conf/webpack.base.config.js").merge({
  output: {
    filename: "bundle.min.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[hash:base64:10]",
                minimize: true
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.gscss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: false,
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    extractSass
  ]
});
