;
(async function () {
  const express = require('express')

  //引入router
  const logicRouter = require('./router/logicRouters')
  const uiRouter = require('./router/uiRouter')
  //引入cookie-parser,用来解析cookie上传上来的数据
  const cookieParser = require('cookie-parser')
  // 开启session的模块
  let session = require('express-session')
  // 将session数据存储到mongodb数据库要使用的模块
  let MongoStore = require('connect-mongo')(session)

  // 由于服务器中大部分的操作都是要操作数据库,如果当数据库连接成功之后,再去开启服务器
  await require('./db/condb')
  console.log('数据库连接成功')
  const app = express()

  // 是为了让我们可以在浏览器的地址栏中直接通过http://127.0.0.1:5000/login/index.html. 可以直接访问到登录/注册的页面
  app.use(express.static('../public'))
  // 处理post请求上传上来的数据
  app.use(express.urlencoded({
    extended: true
  }))
  //把解析cookie数据的中间件配置好
  app.use(cookieParser())

  app.use(session({
    name: 'userid', //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否在存储内容之前创建会话
    resave: true, //是否在每次请求时，强制重新保存session，即使他们没有变化
    store: new MongoStore({
      url: 'mongodb://localhost:27017/sessions_container',
      touchAfter: 24 * 3600 //修改频率（例：//在24小时之内只更新一次）
    }),
    cookie: {
      httpOnly: true, // 开启后前端无法通过 JS 操作cookie
      maxAge: 1000 * 60 * 5 // 设置cookie的过期时间
    },
  }));

  // 使用路由器中间件
  app.use(logicRouter)
  app.use(uiRouter)

  // 配置ejs模板
  // 告诉express,当前我们服务器中使用的是ejs这个模板引擎
  app.set('view engine', 'ejs')

  // 告诉express,我们定义的模板在哪个文件夹下面
  // 所有的.ejs文件就是所谓的模板
  app.set('views', '../views/home')

  app.listen(5000, (err) => {
    if (err) console.log('错误', err)
    else console.log('服务器开启成功')
  })
})()