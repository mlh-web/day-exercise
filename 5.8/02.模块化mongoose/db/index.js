//用来连接数据库
//引入mongoose
const mongoose = require('mongoose')
//连接数据库
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0223', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})