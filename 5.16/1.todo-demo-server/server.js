;
(async function () {
  // 引入express
  const express = require('express')
  const router = require('./routers/logicRouter')
  const cors = require('cors')

  //引入连接数据库的代码
  await require('./db/db')
  console.log('数据库连接成功');

  // 创建应用对象
  const app = express()

  app.use(express.urlencoded({
    extended: true
  }))

  app.use(cors())

  app.use(router)

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err);
    else console.log('服务器启动成功');
  })
})()
