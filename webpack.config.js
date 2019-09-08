'use strict'
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

function filter(loader) {
	if (process.env.DEVSERVER && typeof loader === 'string') {
	    return loader.repalce('file-loader', 'url-loader');
	} else {
	    return loader;
	}
}

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.pug$/,
                oneOf: [
                    // this applies to `<template lang="pug">` in Vue components
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    },
                    // this applies to pug imports inside JavaScript
                    {
                        use: ['raw-loader', 'pug-plain-loader']
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: filter('file-loader?name=[name].[ext]')
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, 'src/index.pug'),
          inject: false
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        })
    ],
    devServer: {
        historyApiFallback: false }
};
