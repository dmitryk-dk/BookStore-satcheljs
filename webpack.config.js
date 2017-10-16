const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill",path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: ['babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-1', 'babel-preset-stage-2'].map(require.resolve),
                    plugins: ['transform-decorators-legacy', 'transform-regenerator'],
                    cacheDirectory: false
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: "sass-loader"
                        },
                    ]
                })
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                // autoprefixer({
                                //     browsers: [
                                //         '>1%',
                                //         'last 4 versions',
                                //         'Firefox ESR',
                                //         'not ie < 9', // React doesn't support IE8 anyway
                                //     ],
                                //     flexbox: 'no-2009',
                                // }),
                            ],
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.js', '.jsx', '.scss', '.json'],
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true
        }),
        new ProgressBarPlugin(),
        new ExtractTextPlugin('app.css')
    ],
    devtool: false,
    stats: {
        children: false
    }
};
