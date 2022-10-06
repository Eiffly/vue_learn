// // 从https://www.webpackjs.com/官网照着配置
// const path = require('path');

// module.exports = {
//     // 入口
//     entry: './src/index.js',
//     // 出口
//     output: {
//         // 虚拟打包路径，就是说文件夹不会真正生成，而是在8080端口虚拟生成
//         publicPath: 'dist',
//         // 打包出来的文件名，不会真正的物理生成
//         filename: 'bundle.js'
//     },
//     devServer: {
//         hot: true, //支持热更新
//         port: 8080,
//         //contentBase:path.resolve(__dirname,'static') //指定（额外的）静态文件目录， // 如果使用 CopyWebpackPlugin ，设置为false
//         static: path.resolve(__dirname, 'www')
//     },
//     mode:'development'
// };

// const path = require("path");

// module.exports = {
//   // 入口
//   entry: "./src/index.js",
//   // 出口
//   output: {
//     // 虚拟打包路径，就是说文件夹不会真正生成，而是在8080端口虚拟生成
//     publicPath: "xuni",
//     // 打包出来的文件名，不会真正的物理生成
//     filename: "bundle.js",
//   },
//   devServer: {
//     // 端口号
//     port: 8080,
//     // 静态资源文件夹
//     contentBase: "www",
//   },
// };
const path = require("path");
module.exports = {
  mode: "development", //开发环境
  // webpack5 不用配置mode
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    // 虚拟打包路径，文件夹不会真正生成，而是在8080端口虚拟生成
    publicPath: "xuni",
    // 打包出来的文件名
    filename: "bundle.js",
  },
  // 配置webpack-dev-server
  devServer: {
    // 静态根目录
    contentBase: "www",
    // static: path.resolve(__dirname, "www"),
    // 端口号
    port: 8080,
    hot: true,
  },
};
