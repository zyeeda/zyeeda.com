/**
 * Created by vimniky on 4/26/16.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname  + '/build', // webpack will output files to this path
        filename: 'build-[hash].js', // the final output filename to the above path
        publicPath : '/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            {test: /\.css$/, loader: 'style!css!postcss'},
            {test: /\.scss$/, loaders: ["style", "css", "sass", "postcss"]},
            {test: /\s[a|c]ss$/, exclude: /node_modules/, loader: 'sasslint'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', 'jsx']
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({template : "./src/index.tmpl.html" , inject :true}),
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/images' , to:'images' }
        ])
    ]
};

