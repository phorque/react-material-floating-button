var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  entry: [path.join(__dirname, '/app.jsx')],
  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: ["", ".js", ".jsx"]
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Server Configuration options
  devServer:{
    contentBase: './',  //Relative directory for base of server
    devtool: 'eval',
    hot: true,        //Live-reload
    inline: true,
    port: 3000,        //Port Number
    host: '0.0.0.0'  //Change to '0.0.0.0' for external facing server
  },
  //output config
  output: {
    path: buildPath,    //Path of output file
    filename: 'app.js'  //Name of output file
  },
  plugins: [
  	//Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    //Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, //All .js and .jsx files
        loaders: ['babel'], //react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath]
      },
      {
      	test: /\.css$/,
      	loader: 'style-loader!css-loader',
      }
    ]
  },
};

module.exports = config;