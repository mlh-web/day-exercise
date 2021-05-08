// 1.引入包（express）
const express = require('express')
//2.创建应用对象
const app = express()
//处理请求
// app.get专门处理get请求，只要是get请求，并且路径是指定的这一个，这个回调就会被调用
app.get('/', (request, response) => {
  console.log('/', request.query);
  response.send('<h1>/的get请求响应的内容</h1>')
})
//注意：服务器端区分多个请求，是利用请求方式和请求的路径，当前情况下，发过来的都是get请求，所以就只使用路径来区分
app.get('/abc', (request, response) => {
  console.log('abc', request.query);
  response.send('<h1>/abc的get请求响应的内容</h1>')
})
//3.开启服务器
app.listen(5001, (err) => {
  if (err) console.log('服务器启动失败', err);
  else console.log('服务器启动成功');
})