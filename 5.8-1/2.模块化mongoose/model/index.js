//用来创建Schema对象和model对象

const mongoose = require("mongoose");
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
      default: '男',
    },
    info: {
      type: Schema.Types.Mixed, //表示任何类型
      default: '暂无信息',
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  //创建Schema时，如果传入了第二个参数，那么第二个参数用来决定集合的名字最终叫什么
  //可以乱写，但是实际开发中，不会乱写
  {
    collection: 'stus'
  }
)
const usersModel = mongoose.model('stus', usersSchema)
module.exports = usersModel