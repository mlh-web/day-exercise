const express = require('express')
const path = require('path')
const app = express()
app.get('/', (req, res) => {
  // res.download('./队列.jpg')
  // res.sendFile(__dirname+'/队列.jpg')
  // res.redirect('http://www.baidu.com')
})
app.listen(5000, (err) => {
  if (err) console.log('服务器启动失败');
  else console.log('服务器启动成功');
})