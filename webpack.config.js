const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        // Specifies a relative path to distribution directory
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js"
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        // watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/about.html'
        }),
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist'), {}),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                // use: ["style-loader","css-loader"]
                // use: ["style-loader/url","file-loader"]
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
                // use: [
                    // { loader: "style-loader" },
                    // { loader: "css-loader" },
                    // { loader: "sass-loader" },

                //     "style-loader",
                //     "css-loader",
                //     "sass-loader",
                //     { loader: "file-loader",
                //         options: {
                //             name: "[name].[ext]"
                //         }
                //     }
                // ]
            },
            // Transpiling ES6 to ES5 for browser compatibility
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    { loader: "file-loader" }
                ]
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            }
        ]
    }
}