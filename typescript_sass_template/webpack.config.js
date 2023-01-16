// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const config = {
//     target: 'node',

//     mode: 'development',

//     externals: [nodeExternals()],

//     entry: {
//         main: 'src/ts/main.ts'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 loader: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     'sass-loader',
//                 ],
//             }
//         ]
//     },

//     resolve: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//         mainFields: ['browser', 'module', 'main'],
//         symlinks: false,
//     },

//     output: {
//         chunkFilename: '[name].js',
//         filename: '[name].js',
//         clean: true
//     },

//     node: false,

//     plugins: [
//         new CopyWebpackPlugin({
//             patterns: [{ from: './package.json', to: './package.json' }]
//         }),
//         new HtmlWebpackPlugin({
//             template: './index.html',
//         }),
//     ],
//     optimization: {
//         minimize: true,
//         minimizer: [new TerserPlugin()],

//         splitChunks: {
//             cacheGroups: {
//                 vendors: {
//                     priority: -10,
//                     test: /[\\/]node_modules[\\/]/
//                 }
//             },

//             chunks: 'async',
//             minChunks: 1,
//             minSize: 30000,
//             name: false
//         }
//     }
// };

// module.exports = config;

const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
    target: 'web',

    mode: 'production',

    devtool: false,

    externals: [nodeExternals()],

    entry: {
        'main': './src/ts/main.ts',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        mainFields: ['browser', 'module', 'main'],
        symlinks: false
    },

    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
        clean: true
    },

    node: false,

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/package.json', to: './package.json' },
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            fix: true,
            failOnError: true
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ],

        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: false
        }
    }
};

module.exports = config;
