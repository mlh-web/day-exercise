;
(async function () {
  //引入mongoose
  const mongoose = require('mongoose')
  //连接数据库mongodb
  //前提：mongodb数据库处于启动的状态
  try {
    //注意：如果没有这个数据库，就会自动创建一个，但是由于是空的，所以看不见，添加数据进去之后就可以了
    await mongoose.connect('mongodb://127.0.0.1:27017/web0223', {
      //解决警告问题  
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('数据库连接成功');
    //连接成功之后，要对数据库进行操作，要先创建Schema对象和Model对象
    //创建Schema对象
    const Schema = mongoose.Schema
    //具体创建schema对象，指定文档的规则
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
    })
    //当创建集合对象model要使用schema
    //mongoose.model('集合名'，schema对象)返回一个集合对象
    const usersModel = mongoose.model('user', usersSchema)
    //要往集合中添加一条数据
    //添加数据是异步操作，添加完成之后，会调用这个回调函数
    usersModel.create({
        name: '路人丙',
        age: 22,
      },
      (err, data) => {
        console.log(err, data)
      }
    )
  } catch (error) {
    console.log('数据库连接失败', error)
  }
})()