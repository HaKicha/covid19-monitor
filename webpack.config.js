const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ArcGISPlugin = require('@arcgis/webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {

    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'scripts/[name]/[name].[hash].bundle.js',
        chunkFilename: 'scripts/[name]/[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [
            //@formatter:off
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', resolve: {extensions: ['.js', '.jsx']}},
            {test: /\.(jpe?g|png|gif|svg|xml)$/i, use: ['file-loader?name=images/[name].[ext]']},
            {
                test: /\.scss$|\.css$/, use: [MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {importLoaders: 1, import: true}},
                    {loader: 'resolve-url-loader'}]
            },
            {
                test: /\.(ttf|eot|otf|svg|woff2?)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                use: ['url-loader?name=fonts/[name].[ext]']
            },
            {
                test: /\.html$/, loader: 'html-loader', options: {
                    minimize: false,
                    removeComments: false,
                    ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/, /\/*\//],
                    collapseWhitespace: false
                }
            }
            //@formatter:on
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ArcGISPlugin({
            useDefaultAssetLoaders: false,
            locales: ['uk'],
            features: {
                "3d": false
            }
        }),
        new CopyWebpackPlugin([
            //@formatter:off
            { from:  path.resolve(__dirname, 'node_modules/arcgis-js-api'), to: 'esri' },
            { from:  path.resolve(__dirname, 'node_modules/@dojo'), to: '@dojo' },
            { from:  path.resolve(__dirname, 'node_modules/dgrid'), to: 'dgrid' },
            //@formatter:on
        ]),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'styles/[name].[chunkhash].bundle.css',
            chunkFilename: 'styles/[id].[chunkhash].bundle.css'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            images: path.resolve(__dirname, './assets/images')
        },
        modules: [
            path.resolve(__dirname, '/src'),
            path.resolve(__dirname, 'node_modules/')
        ],
        extensions: ['.jsx', '.js', '.scss', '.css']
    },
    externals: [
        (context, request, callback) => {
            if (/pe-wasm$/.test(request)) {
                return callback(null, 'amd ' + request);
            }
            callback();
        }
    ],
    node: {
        process: false,
        global: false,
        fs: 'empty'
    }

};
