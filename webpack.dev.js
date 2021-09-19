const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
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
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new StyleLintPlugin({
            files: './src/assets/styles/*.scss'
        })
    ],
    devServer: {
        static: path.resolve(__dirname, './dist'),
        hot: true
    }
});
