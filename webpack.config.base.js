const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js',
	},
	// resolve: {
	// 	extensions: ['.ts', '.tsx'],
	// },
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'awesome-typescript-loader',
					},
				],
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.md$/i,
				use: 'raw-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	// externals: {
	// 	react: 'React',
	// 	'react-dom': 'ReactDOM',
	// },
};
