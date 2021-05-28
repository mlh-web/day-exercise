const todoModel = require('./model')
// 查询所有任务列表的方法
function findAllTodos() {
  return todoModel.find()
}

// 增加任务列表的方法
function addTodoFn(document) {
  return todoModel.create(document)
}

// 修改数据的方法
function updateTodoFn(ids, isDone) {
  return todoModel.updateMany({_id:{$in:ids}},{$set:{isDone}})
}

// 删除数据的方法
function deleteTodoFn(ids){
  return todoModel.deleteMany({_id:{$in:ids}})
}

module.exports.findAllTodos = findAllTodos
module.exports.addTodoFn = addTodoFn
module.exports.updateTodoFn = updateTodoFn
module.exports.deleteTodoFn = deleteTodoFn