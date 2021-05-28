const express = require('express')
const {
  findAllTodos,
  addTodoFn,
  updateTodoFn,
  deleteTodoFn,
} = require('../db/crud')
const router = express.Router()

// 返回所有todo数据
router.get('/findTodos', async (req, res) => {
  // 去数据库中，找到所有的任务列表，然后响应给浏览器
  const todoList = await findAllTodos()
  // 配合前端,完成jsonp跨域请求
  // 1. 先获取函数名
  const {
    callback
  } = req.query

  // 将数据响应给浏览器
  // 直接将数组传入send.express会自动将数组转成json格式的字符串.
  // 但是现在要解决跨域问题,所以要自己拼接函数调用的字符串.就必须先将todoList里面存储的数据,转成json格式的字符串,然后再拼接,最后响应回去
  let dataStr = JSON.stringify(todoList)
  // 拼接函数调用的字符串
  let cbStr = `${callback}(${dataStr})`
  res.send(cbStr)
})

// 新增数据的接口
router.post('/addTodo', async (req, res) => {
  const {
    todoName
  } = req.body
  await addTodoFn({
    todoName
  })

  const todoList = await findAllTodos()
  res.send(todoList)
})

// 修改数据的接口
router.post('/updataTodos', async (req, res) => {
  let {
    ids,
    isDone
  } = req.body
  // 传上来的ids是字符串数组.所以要转成字符串
  ids = JSON.parse(ids)
  await updateTodoFn(ids, isDone)

  const todoList = await findAllTodos()
  res.send(todoList)
})

// 删除数据的接口
router.post('/deleteTodos', async (req, res) => {
  let {
    ids
  } = req.body
  ids = JSON.parse(ids)
  await deleteTodoFn(ids)

  const todoList = await findAllTodos()
  res.send(todoList)
})

module.exports = router