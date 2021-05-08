// 1.引入http模块
const http = require('http')
const queryString = require('querystring')
//2.创建服务器对象
const server = http.createServer((request, response) => {
  let str = request.url
  let arr = str.split('?')
  const res = queryString.parse(arr[1])
  console.log(res)
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('服务器相应回来的数据')
})
//3.开启服务器
server.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err)
  else console.log('服务器启动成功')
})