const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        frontend: ['babel-polyfill', './assets/js/index.js'],
        customizer: './assets/js/customizer.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets/dist'),
        filename: '[name].js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                test: /\.jsx$/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new BrowserSyncPlugin({
            files: '**/*.php',
            proxy: 'http://your-domain'
        })
    ],
    optimization: {
        minimizer: [new UglifyJSPlugin(), new OptimizeCssAssetsPlugin()],
        // uncomment this to avoid duplicate dependency when using code splitting: https://webpack.js.org/guides/code-splitting/
        // splitChunks: {
        //     chunks: 'all'
        // }
    }
}
