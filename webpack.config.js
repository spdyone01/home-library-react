const path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: "babel-loader"
            }
        ]
    }
};