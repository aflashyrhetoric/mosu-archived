module.exports = {
	entry: './resources/assets/js/app.js',
	output: {
		filename: 'public/js/app.js'       
	},
	module: {
		loaders: [
		{ test: /\.coffee$/, loader: 'coffee-loader' },
		{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.jsx$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader',
		},
		]
	},
	resolve: {
		// you can now require('file') instead of require('file.coffee')
		extensions: ['', '.js', '.jsx', '.json'] 
	}
};