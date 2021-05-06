const fs = require('fs')
//创建读取流
const rs = fs.createReadStream('./新建文本文档.txt')
//读取文件中的数据
//on 里面传递的是data，表示监听这个文件读取的过程，每次读到文件中的一部分信息，就调用一个后面的回调函数
rs.on('data', (data) => {
  console.log(data.toString());
})