const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
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
            }
        ]
    },
    plugins: [ htmlPlugin ]
});

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    return config(devMode);
};
