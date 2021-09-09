require('webpack');

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const plugins = () => {
    return [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin('src/assets/img/logo.svg'),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
    ];
};

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                path: './postcss.config.js',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                exclude: [/node_modules/, /dist/],
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@img': path.resolve(__dirname, 'src/assets/img'),
            '@model': path.resolve(__dirname, 'src/model'),
            '@typings': path.resolve(__dirname, 'src/typings'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000,
    },
    plugins: plugins(),
    watchOptions: { ignored: /node_modules/ },
};
