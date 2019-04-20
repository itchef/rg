const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

const config = (devMode) => ({
    entry: "./src/index.html",
    module: {
        rules: [
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
