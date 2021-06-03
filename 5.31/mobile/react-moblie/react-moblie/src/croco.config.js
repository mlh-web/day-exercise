const pxtoviewport = require("postcss-px-to-viewport");
module.exports={
  style{
    postcss{
      plugins: [
        pxtoviewport({
          unitToConvert: "px",
          viewportWidth: 375, // 设计稿宽度
          unitPrecision: 5,
            propList: ["*"],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: ["body"],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: /node_modules/,
      ],
    }
  }
}