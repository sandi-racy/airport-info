const path = require('path');

module.exports = {
    entry: './www/src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'www/js'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },  {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    watch: true
}
