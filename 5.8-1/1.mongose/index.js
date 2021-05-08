(async function () {
  // 1.引入mongoose
  const mongoose = require('mongoose')
  try {
    // 2.连接数据库mongodb
    //前提：mongodb数据库处于启动状态
    await mongoose.connect('mongodb://127.0.0.1:27017/web0508', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('mongodb数据库连接成功');
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
      })

    //当创建集合对象model时要使用schema
    //mongoose.model('集合名'，schema对象)，返回一个集合对象
    const usersModel = mongoose.model('stus', usersSchema)

    //增
    // 添加数据是异步操作,添加完成之后,会调用这个回调函数
    /* usersModel.create({
      name: '路人己',
      age: 18,
      gender: '女'
    }, (err, data) => {
      console.log('create', err, data);
    }) */

    //查
    //find方法，返回的数据是一个数组，即便没有数据，也是空数组
    //usersModel.find({查询条件}，{投影}，回调函数)
    //findOne 返回符合条件中所有数据中的第一条，如果没有找到，就是一个null
    //usersModel.findOne({查询条件}，{投影}，回调函数)
    /* usersModel.find({
      age: 18
    }, {}, (err, data) => {
      console.log(err, data);
    }) */
    /* usersModel.findOne({
      age: 100
    }, {}, (err, data) => {
      console.log(err, data);
    }) */

    //改
    // usersModel.updateOne(查询条件, 要更新的内容[, 配置对象], callback)
    // usersModel.updateMany(查询条件, 要更新的内容[, 配置对象], 回调函数)
    /* usersModel.updateOne({
      name: '路人卯'
    }, {
      $set: {
        name: '路人戊'
      }
    }, (err, data) => {
      console.log(err, data);
    }) */

    /* usersModel.updateMany({
      age: 18
    }, {
      $set: {
        age: 19
      }
    }, (err, data) => {
      console.log(err, data);
    }) */

    //删
    // usersModel.deleteOne({查询条件}, 回调函数)
    // usersModel.deleteMany({查询条件}, 回调函数)
    // 备注： 没有delete方法， 会报错！
    /* usersModel.deleteOne({
      name: '路人甲'
    }, (err, data) => {
      console.log(err, data);
    }) */
    /* usersModel.deleteMany({
      name: '路人己'
    }, (err, data) => {
      console.log(err, data);
    }) */

    //了解
    //如何创建document对象
    //创建一条数据，但是数据还没有插入到集合中
    const usersDocument = new usersModel({
      name: '路人辛',
      age: 23
    })
    //调用save方法可以添加到集合中
    usersDocument.save()
  } catch (error) {
    console.log('mongodb数据库连接失败', error);
  }
})()