const todoModel = require('./model')

function findAllTodos() {
  return todoModel.find()
}
module.exports.findAllTodos