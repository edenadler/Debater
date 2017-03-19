var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './app.jsx',
    resolve:{
        extensions:['','.js','jsx']
    },
    module: {
        loaders: [
            {
              loader:'babel-loader',
              query:{
                presets:['react', 'es2015']
              },
              test: /\.jsx?$/,
              exclude:/(node_modules)/
              }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
         new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};