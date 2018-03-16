import webpack from "webpack";
import Config from "webpack-config";

export default new Config().extend('conf/webpack.base.config.js').merge({
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'react-hot-loader/patch',
		__dirname + '/../client/index.js'
	],
	devtool: 'inline-source-map',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.gscss$/,
			use: [
				{
					loader: 'style-loader', options: { sourceMap: true }
				}, {
					loader: 'css-loader',
					options: {
						modules: false,
						importLoaders: 1,
						minimize: false,
						sourceMap: true
					}
				}, {
					loader: 'postcss-loader', options: { sourceMap: true }
				}, {
					loader: "sass-loader", options: {sourceMap: true}
				}
			]
		}, {
			test: /\.scss$/,
			use: [
				{
					loader: 'style-loader', options: { sourceMap: true }
				}, {
					loader: 'css-loader',
					options: {
						modules: true,
						importLoaders: 1,
						localIdentName: "[local]__[hash:base64:5]",
						minimize: false,
						sourceMap: true
					}
				}, {
					loader: 'postcss-loader', options: { sourceMap: true }
				}, {
					loader: "sass-loader", options: {sourceMap: true}
				}
			]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});