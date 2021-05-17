const express = require('express')
const app = express()

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static('public'))

app.post('/test', (req, res) => {})

//接口(接口文档)
app.get('/test', (req, res) => {
  const callback = req.query.callback
  let arr = ['a', 'b', 'c']
  let arrStr = JSON.stringify(arr)
  setTimeout(() => {
    res.send(`${callback}(${arrStr})`)
  }, 3000);
})

app.listen(5000, () => {
  console.log('ok');
})