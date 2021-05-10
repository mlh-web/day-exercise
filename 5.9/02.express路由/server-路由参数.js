const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('😄')
})
app.get('/:page?/:pageSize?', (req, res) => {
  console.log(req.params);
  res.send('🤭')
})
app.listen(5000, (err) => {
  if (err) console.log('服务器启动失败');
  else console.log('服务器启动成功');
})