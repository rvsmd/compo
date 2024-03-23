const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.tsx",
	resolve: {
		alias: {
			"@api": path.resolve(__dirname, "../src/api"),
			"@ui": path.resolve(__dirname, "../src/components/ui"),
			"@views": path.resolve(__dirname, "../src/components/views"),
			"@models": path.resolve(__dirname, "../src/models"),
			"@router": path.resolve(__dirname, "../src/router"),
			"@assets": path.resolve(__dirname, "../src/assets"),
		},
		extensions: ['.ts', '.tsx', '.js', '.jpg', '.png', '.svg', '.gif']
	},

	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}]
			},
			{
				test: /\.ts(x?)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					presets: ['@babel/preset-typescript', "@babel/preset-env", "@babel/preset-react"]
				},
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 3, sourceMap: true } },
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", { loader: "css-loader", options: { modules: true } }],
			},
			{
				test: /\.(jpg|png|svg|gif|woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new ESLintPlugin({
			extensions: ["ts", "tsx"],
			cache: true,
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "public/index.html",
		}),
		new MiniCssExtractPlugin(),
		new webpack.ProvidePlugin({
			process: "process/browser",
		}),
	],
};
