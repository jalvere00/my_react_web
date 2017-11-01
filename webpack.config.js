var webpack = require('webpack');
var path = require('path');

module.exports ={
	context:__dirname,
	entry: "./index.js",
	output:{
		path:path.resolve(__dirname,"public","js"),
		filename:"app.min.js"
	},
	module:{
		rules:[
			{
				test:/\.js?$/,
				exclude:/(node_modules|bower_components)/,
				loader:'babel-loader',
				query:{
					presets:['react','es2015','stage-0'],
					plugins:['react-html-attrs','transform-class-properties', 'transform-decorators-legacy']
				}
			},
			{
				test:/\.css$/,
				use:[
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader',
						options:{
							modules:true
						}
					}
				],
				exclude:/flexboxgrid/
			}
		]
	}
};

