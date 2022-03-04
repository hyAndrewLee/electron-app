const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./client/index.tsx'],
  mode: process.env.NODE_ENV,
  output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js',
	},
  devServer: {
		historyApiFallback: true,
		host: 'localhost',
		port: 8080,
    hot: true,
    proxy: {
      '/api': '3000'
    } 
	},
  module: {
		rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
		  template: './client/index.html',
		})
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}