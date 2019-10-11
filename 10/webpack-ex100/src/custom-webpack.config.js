const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-short')(),
                    ]
                }
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            title: '自定义webpack演示',
            contentImage: path.join(__dirname, 'wallpaper7.jpg')
        }),
    ]
};