function core(...args) {
  // ...
  console.log("核心代码", ...args);
  // ....
}

// 高阶函数   一个函数返回一个函数
//           函数参数是一个函数

Function.prototype.before = function (cb) {
  return (...args) => {
    cb();
    this(...args);
  };
};

const newFn = core.before(() => {
  console.log("自身逻辑");
});

newFn("a", "b");
