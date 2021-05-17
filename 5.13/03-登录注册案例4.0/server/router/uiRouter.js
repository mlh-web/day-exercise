const express = require('express')
const {
  findUserById
} = require('../db/crud/login')

// 创建路由对象
const uiRouter = express.Router()

//响应首页
uiRouter.get('/home', async (req, res) => {
  if (req.session.userId) {
    // 要获取到当前用户的信息
    // 想在这里拿到当前登录的用户信息,就需要去数据库中查找,但是查找,需要有一个查询条件
    // console.log(req.query)
    // 去数据库中根据_id,找到指定的用户信息
    const _id = req.query._id
    const user = await findUserById(_id)
    // 将.ejs里面的代码,进行拼接,然后响应给浏览器
    res.render('index', {
      username: user.name
    })
  } else {
    res.redirect('http://127.0.0.1:5000/login/index.html')
  }
})

//用于响应详情页面
uiRouter.get('/detail', (req, res) => {
  if (req.session.userId) {
    //说明之前登录过，登陆过就有cookie信息
    res.render('detail', {})
  } else {
    //说明之前没有登录过/退出了
    res.redirect('http://127.0.0.1:5000/login/index.html')
  }
})

module.exports = uiRouter