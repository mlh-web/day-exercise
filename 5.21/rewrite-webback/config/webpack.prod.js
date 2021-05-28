const {
  resolve
} = require("path"); // node内置核心模块，用来设置路径。
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: "./src/index.js", // 入口文件

  output: {
    // 输出配置
    filename: "js/main.[contenthash:10].js", // 输出文件名
    path: resolve(__dirname, "../build"), // 输出文件路径配置
    publicPath:"/", //所有输出资源公共路径
    clean: true, // 清除打包目录的文件
    assetModuleFilename: "images/[contenthash:8][ext][query]",
  },

  module: {
    rules: [
      // 语法检查
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: "pre", // 提前加载使用
        use: {
          // 使用eslint-loader解析
          loader: "eslint-loader",
        },
      },
      // 语法转换
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // 打包 less 资源
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      // 打包样式文件中的图片资源
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 小于8kb以下的图片会被打包成base64格式
          },
        },
      },
      // 打包其他资源（字体）
      {
        type: 'asset/resource',
        include: [/\.ttf$/, /\.woff$/, /\.woff2$/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },

  // 打包 html 文件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  // mode: "development", // 开发环境(二选一)
  mode: 'production',  // 生产环境(二选一)
  target: "browserslist", //让webpack兼容生效，但是DevServer会失效，但是生产环境不需要DevServer
};