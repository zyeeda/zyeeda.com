var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module : {
        loaders:[
            { test:/\.json$/, loader : "json" },
            { test : /.js$/, exclude : /node_modules/, loader : 'babel' },
            { test : /.css$/, loader : 'style!css?modules!postcss' }
        ]
    },
    postcss : [
         require('autoprefixer')
    ],
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({template : __dirname + "/app/index.tmpl.html"}),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }

}

