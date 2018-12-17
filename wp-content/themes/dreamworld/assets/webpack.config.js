const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'sourcemap',

    // optimization: {
    //     minimizer: [new UglifyJsPlugin({
    //         sourceMap: true
    //     })]
    // },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css", ".ts", ".tsx"],
    },

    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: ['babel-loader', 'awesome-ts-loader']
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                        outputPath: 'images/'
                    }
                }
            },
            {
                test: /\.(ttf|wtf|otf)$/,
                loader: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            }
        ]
    }
};