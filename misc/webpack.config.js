const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      //'fetch': path.resolve(__dirname, ".", "src", "index.js"),
      //'wappalyzer': path.resolve(__dirname, ".", "src", "wappalyzer.js"),
   },
   optimization: {
      minimize: false
   },
   experiments: {
      outputModule: true
   },
   output: {
      globalObject: "this",
      path: path.join(__dirname, "../misc/dist"),
      filename: "[name].js",
      library: {
         type: 'module'
      }
   },
   resolve: {
      extensions: [".ts", ".js"],
      fallback: {
         "path": false,
         "util": false,
         "fs": false,
         "stream": false,
         "zlib": false,
         "os": false,
         "readline": false,
         "child_process": false,
         "url": false,
         "http": false,
         "https": false,
         "crypto": false,
         "tls": false,
         "net": false,
         "dns": false,
         "assert": false,
         "constants": false,
         "utf-8-validate": false,
         "bufferutil": false
      }
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: "babel-loader",
          }
      ],
   },
   plugins: [
      // new CopyPlugin({
      //    patterns: [{from: "./bptk", to: "./bptk", context: "src"}]
      // }),
   ],
};