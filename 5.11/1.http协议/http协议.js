const express = require('express')
const app = express()
app.get('/', (request, response) => {
  response.send('响应的数据')
})
app.post('/abc', (request, response) => {
  response.send('post响应的数据')
})
app.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err);
  else console.log(('服务器启动成功'));
})