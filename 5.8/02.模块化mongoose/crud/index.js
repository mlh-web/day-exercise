;
(async function () {
  //具体的增删改查的代码
  //让db下的index.js执行一下，要引入
  const db = require('../db')
  await db
  console.log('数据库连接成功');
  //引入model对象
  //注意：如果文件夹里是一个index.js，index.js可以省略
  const userModel = require('../model')
  // await userModel.create({
  //   name: '路人卯',
  //   age: 23,
  // })
  // // find返回的promise,如果成功了,值就是查询到的数据
  // const users = await userModel.find()
  // console.log(users);
  await userModel.deleteOne({})

})()