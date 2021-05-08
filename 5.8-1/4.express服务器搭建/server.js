// 1.引入包（express）
const express=require('express')
// 2.创建应用对象
const app=express()
//3.开启服务器
app.listen(5000,(err)=>{
  if(err) console.log('服务器启动失败',err);
  else console.log('express服务器启动成功');
})