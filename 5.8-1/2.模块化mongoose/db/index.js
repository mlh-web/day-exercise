//用于连接数据库
//引入mongoose
const mongoose = require('mongoose')
//连接数据库mongodb，前提是mongodb数据库处于启动状态
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0508', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})