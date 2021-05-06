//fs模块是node中的内置模块，这个模块用来读写文件，由于是内置模块，所以不需要下载，但是需要导入
const fs = require('fs')
//错误优先原则：回调函数中第一个参数是错误信息，第二个参数才是读取到的信息
//如果读取出错了，err就是一个错误对象，如果没有出错err就是一个null
fs.readFile('./新建文本文档.txt', (err, data) => {
  console.log(err, data);
  console.log(data.toString());
})
console.log("123");