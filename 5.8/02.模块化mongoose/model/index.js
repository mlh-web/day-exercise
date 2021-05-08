//用来创建Schema对象和model对象
//引入mongoose对象
const mongoose = require('mongoose')
//创建schema对象，指定文档的规则
const Schema = mongoose.Schema
const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    default: '男',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  info: {
    type: Schema.Types.Mixed,
    default: '暂无描述',
  },
  hobby: {
    type: Schema.Types.Mixed,
    default: '暂无',
  },
}, {
  collection: 'user'
})
//当创建对象model要使用schema对象
const usersModel = mongoose.model('user', usersSchema)
//因为在其他js文件中要使用model对象，所以要导出去
module.exports = usersModel