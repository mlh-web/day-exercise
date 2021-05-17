const express = require('express')
const app = express()

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static('public'))

app.get('/abc', (req, res) => {
  setTimeout(() => {
    console.log('get', req.query);
    let arr = [{
      name: 'zs',
      age: 18
    }, {
      name: 'ls',
      age: 20
    }, ]
    res.send(arr)
  }, 3000)
})

app.post('/abc', (req, res) => {
  console.log('post', req.body);
  res.send('ok')
})

app.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err);
  else console.log('服务器启动成功');
})