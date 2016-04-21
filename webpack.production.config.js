var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: __dirname + "/app/index.js",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: "json"},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.css$/, loader: 'style!css!postcss'},
            {test: /\.scss$/, loaders: ["style", "css", "sass", "postcss"]},
            {test: /\s[a|c]ss$/, exclude: /node_modules/, loader: 'sasslint'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
            // { test: /\.css$/, loader: 'style!css?components!postcss' }
            //{ test: /\.coffee$/, loader: 'coffee-loader' },
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.BannerPlugin("Copyright Zyeeda Unicorns inc."),
        new HtmlWebpackPlugin({template: __dirname + "/app/index.tmpl.html", title: 'www.zyeed.com'}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("[name]-[hash].css"),
        new OpenBrowserPlugin({url: 'http://localhost:8080'}),
        new CopyWebpackPlugin([{from: 'app/images', to: 'images'}])
    ],
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee', 'jsx']
    }

}

