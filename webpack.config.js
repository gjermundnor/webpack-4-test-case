const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js', // ./src/index.js is the default path, so be without this line
    output: {
        filename: 'bundle.js', // main.js is default filename
        path: path.resolve(__dirname, 'dist') // dist is default folder
    },
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
