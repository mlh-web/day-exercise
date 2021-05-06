const fs=require('fs')
fs.writeFile('./新建文本文档.txt','写入的内容',(err)=>{
  console.log(err);
})