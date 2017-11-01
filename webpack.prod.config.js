var merge = require('webpack-merge');
var base_config = require('./webpack.config.js')
var webpack = require('webpack');

module.exports = merge(base_config, {plugins:[
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	]})