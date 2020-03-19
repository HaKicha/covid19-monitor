const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        inline: true,
        contentBase: '/',
        historyApiFallback: true,
        watchOptions: {
            ignored: /\/node_modules\/.*/
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            // SERVER_API_URL: JSON.stringify('http://192.168.100.235/')
            SERVER_API_URL: JSON.stringify('http://192.168.20.186:8080/')
        })
    ]
});
