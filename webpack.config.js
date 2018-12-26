const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // Specifies a relative path to distribution directory
        path: path.resolve(__dirname, 'dist/js/'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ["style-loader","css-loader"]
                // use: ["style-loader/url","file-loader"]
                use: [
                    { loader: "style-loader/url" },
                    { loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ]
    }
}