const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

const cssPlugin = new MiniCssPlugin({
    filename: "[name].css",
    chunkFilename: '[id].css',
});

const config = (devMode) => ({
    entry: "./src/js/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader' }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: '/node_modules/',
                use:[
                    devMode ? 'style-loader' : MiniCssPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [ htmlPlugin, cssPlugin ]
});

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    return config(devMode);
};
