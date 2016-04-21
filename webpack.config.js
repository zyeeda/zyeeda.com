const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    // entry: ['babel-polyfill', __dirname + "/app/index.js"] ,
    entry: ['babel-polyfill', __dirname + "/app/index.js"] ,
    /*
    * Note: The build folder wont be created until we make a production
    * deploy configuration. While in development, all the bundled files
    * and the generated HTML will be served from memory.
    */
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module : {
        loaders:[
            { test:/\.json$/, loader : "json" },
            { test : /\.js$/, exclude : /node_modules/, loader : 'babel' },
            { test: /\.scss$/, loader:'style!css!sass!postcss'},
            { test : /\.css$/, loader:'style!css!postcss' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    postcss : [
         require('autoprefixer')
    ],
    plugins: [
        new HtmlWebpackPlugin({template : __dirname + "/app/index.tmpl.html"}),
        new webpack.HotModuleReplacementPlugin(),
        // new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new CopyWebpackPlugin([
            // {output}/file.txt
            { from: 'app/images' , to:'images' }
        ])
    ],
    // developer server setting
    devServer: {
        contentBase: "./build",
        colors: true,
        historyApiFallback: true,
        port : 8080,
        inline: true,
        hot: true
    }
};

