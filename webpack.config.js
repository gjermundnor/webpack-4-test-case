const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js', // ./src/index.js is the default path, so be without this line
    output: {
        filename: 'bundle.js', // main.js is default filename
        path: path.resolve(__dirname, 'dist') // dist is default folder
    },
    devtool: "source-map", 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    }, // END module
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ]
}
