const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // Specifies a relative path to distribution directory
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        watchContentBase: true
    }
}