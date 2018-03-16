import webpack from 'webpack';
import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

export default new Config().merge({
	entry: './client/index.js',
	output: {
		path: __dirname + '/../public',
	},
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						// путь прописан относительно ~client/main.gscss
						// нашел путем брутфорса
						outputPath: '/../public/fonts/fonts',
					}
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
			inject: "body"
		}),
		new webpack.LoaderOptionsPlugin({ options: { postcss: [precss, autoprefixer] } }),
		new webpack.DefinePlugin({
			'process.env': {
				BROWSER:  JSON.stringify(true),
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
			}
		})
	]
});