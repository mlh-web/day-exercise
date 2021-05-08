//具体增删改查的代码
;
(async function () {
  const db = require('../db')
  await db
  console.log('数据库连接成功')
  //引入model对象
  //注意：如果引入的文件路径是model/index.js(文件夹里面是一个index.js文件)那么index.js可以忽略
  const usersModel = require('../model')
  //所有的增删改查方法，如果不写回调函数，返回值是一个promise对象，操作成功之后，promise的状态就被修改为成功
  usersModel.create({
    name: '路人gui',
    age: 25
  })
  const users = await usersModel.find()
  console.log(users);
})()

//1.cj项目
//2.初始化项目
//3.下载mongoose
//4.分成三个文件（连接数据库的文件，创建model文件，增删改查的文件）