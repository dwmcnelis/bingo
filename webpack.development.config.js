const path = require('path')
const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin = require('webpack-shell-plugin')

const { NODE_ENV = 'development' } = process.env

module.exports = {
	entry: './server/index.ts',
	mode: NODE_ENV,
	target: 'node',
	watch: NODE_ENV === 'development',
	externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new WebpackShellPlugin({
			onBuildEnd: ['npm run run:dev']
		})
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader']
			}
		]
	}
}
