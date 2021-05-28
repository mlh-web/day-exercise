/*  
  webpack配置文件：当你运行webpack，webpack读取配置文件的配置，根据配置来工作
  需要向外暴露配置对象：属性名固定的对象，属性值较灵活
*/
const { resolve } = require("path"); // path是nodejs专门处理路径的模块

module.exports = {
  // webpack配置对象

  // entry: 入口，指示webpack从哪个文件开始打包构建
  entry: "./src/index.js",
  // output: 输出，指示webpack打包后的文件输出到哪里去
  output: {
    // 所有输出的目录：必须是决定路径
    path: resolve(__dirname, "build"),
    // 输出的文件名
    filename: "./js/main.js",
  },
  // loader: 加载器，帮助webpack识别其他文件类型（非js、json文件类型）
  module: {
    rules: [
      // loader的配置
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: "pre", // 提前加载使用，优先执行
        // use: {
        //   // 使用eslint-loader解析
        //   // eslint要想工作，必须在项目根目录定义配置文件
        //   loader: "eslint-loader",
        // },
        loader: "eslint-loader",
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
        // 多个loader得使用use
        use: [ // 执行顺序从小到上
          // compiles Less to CSS
          "style-loader", // 动态创建style标签，将js中的css代码添加style中
          "css-loader", // 将css以module方式整合到js中
          "less-loader", // 将less编译成css
        ],
      },
    ],
  },
  // plugins: 插件, 帮助webpack干活，功能更加强大
  // mode: 模式（development, production）
  mode: "development",
};
