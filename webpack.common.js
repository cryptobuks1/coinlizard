const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // generate index.html
        new HtmlWebpackPlugin({
            title: 'CoinLizard',
            filename: 'index.html',
            template: 'src/index.html',
            favicon: 'src/assets/images/favicon.ico',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'set-cookie': { 'http-equiv': 'Cache-control', content: 'public' },
                description: 'CoinLizard',
                'theme-color': '#ffffff',
                charset: 'UTF-8'
            }
        })
    ]
};
