const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "production",
    devtool: 'source-map',
    entry: {
        filename: './js/src/app.js'
    },
    output: {
        path: path.resolve(__dirname, "js"),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: true
    }
}