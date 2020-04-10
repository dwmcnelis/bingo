const path = require('path')
const nodeExternals = require('webpack-node-externals')

const {
  NODE_ENV = 'production',
} = process.env

module.exports = {
  entry: './api/index.ts',
  mode: NODE_ENV,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build/api'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  }
}