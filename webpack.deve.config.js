var merge = require('webpack-merge');
var base_config = require('./webpack.config.js')
var webpack = require('webpack');

module.exports = merge(base_config, {devtool:"inline-sourcemap",watch:true})