/*  
  webpack配置文件：当你运行webpack，webpack读取配置文件的配置，根据配置来工作
  需要向外暴露配置对象：属性名固定的对象，属性值较灵活
*/
const {
  resolve
} = require("path"); // path是nodejs专门处理路径的模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // webpack配置对象

  // entry: 入口，指示webpack从哪个文件开始打包构建
  entry: "./src/index.js",
  // output: 输出，指示webpack打包后的文件输出到哪里去
  output: {
    // 所有输出的目录：必须是决定路径
    path: resolve(__dirname, "../build"),
    // 输出的文件名
    filename: "./js/main.js",
    assetModuleFilename: "images/[hash:8][ext][query]",
    // clean: true, // 自动删除 path 目录下的所有资源
  },
  // loader: 加载器，帮助webpack识别其他文件类型（非js、json文件类型）
  module: {
    rules: [
      // loader的配置
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: "pre", // 提前加载使用，优先执行
        use: {
          // 使用eslint-loader解析
          // eslint要想工作，必须在项目根目录定义配置文件
          loader: "eslint-loader",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // 将ES6以上语法编译成ES5语法
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 小于8kb以下的图片会被打包成base64格式
          },
        },
      },
      {
        test: [/\.woff2?$/, /\.ttf$/, /\.map3$/, /\.map4$/],
        // 会在输出原文件
        type: "asset/resource",
        // 权重更高
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  // plugins: 插件, 帮助webpack干活，功能更加强大
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  target: 'browserslist',
  // plugins: 插件, 帮助webpack干活，功能更加强大
  // mode: 模式（development, production）
  mode: "production",
};