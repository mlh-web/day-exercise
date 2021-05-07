;
(async function () {
  const mongoose = require('mongoose');
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/web0223-1', {
      //解决警告问题
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('mongodb数据库连接成功');
    //连接成功之后，要对数据库进行操作，要先创建Schema对象和Model对象
    //创建Schema对象
    const Schema = mongoose.Schema
    //具体创建schema对象，指定文档的规则
    const usersSchema = new Schema({
      //制定要插入的数据的规则
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      gender: {
        type: String,
        default: '男'
      },
      info: {
        type: Schema.Types.Mixed, //表示任何类型
        default: '暂无'
      },
      date: {
        type: Date,
        default: Date.now()
      },
    })
    //当创建集合对象model要使用schema
    //mongoose.model('集合名',schema对象)返回一个集合对象
    const usersModel = mongoose.model('user', usersSchema)
    //要往集合中添加一条数据
    //添加数据是异步操作，添加完成之后，会调用这个回调函数
    usersModel.create({
        name: "路人丙",
        age: "25",
        gender: "女"
      },
      (err, data) => {
        console.log(err, data);
      }
    )
  } catch (error) {
    console.log('mongodb数据库连接失败', error);
  }
})()