const express = require('express')
const app = express()

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.post('/xxx', (req, res) => {
  console.log('post', req.body);
  res.send('ok')
})
app.get('/xxx', (req, res) => {
  console.log('get', req.query)
  res.send('ok')
})

app.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err);
  else console.log('服务器启动成功');
})