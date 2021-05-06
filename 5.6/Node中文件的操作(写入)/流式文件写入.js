const fs=require('fs')
//创建读取流
const rs =fs.createReadStream('./新建文本文档.txt')
//创建写入流
const ws =fs.createWriteStream('./新建文本文档.txt')
// ws.write('123')
rs.on('data',(data)=>{
  ws.write(data)
})