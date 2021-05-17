//1.函数名 取决于函数的作用，要见名知意
// 2.如果这个函数传入的数据较多，一般超过三个，就应该以对象的形式传入（优点：不需要记住传参的顺序，只需要知道属性代表的内容就可以了）

function myAjax(options) {
  // 0.先判断有没有传入对象
  //如果没有传数据，直接return，这样就能提高性能
  if (!options || typeof options !== 'object') return

  // 1.一上来要把所有的属性都解构出来
  let {
    url,
    data,
    type = 'get',
    success,
    error,
    complete,
    beforeSend,
  } = options

  // 2.判断url有没有传，没有就return
  if (!url) return

  // 3.创建xhr对象
  const xhr = new XMLHttpRequest()
  // 4. 将传入的data对象,转成键值对的字符串
  const paramStr = obj2str(data)

  //5.调用open方法
  /* if (type === "get") {
    xhr.open(type, url + '?' + paramStr)
  } else {
    xhr.open(type, url)
  } */
  if (type === "get") {
    url += '?' + paramStr
    paramStr = null
  }
  xhr.open(type, url)


  // 6.设置请求头
  if (type === 'post') {
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  }

  // 7.设置请求主体并且发送请求
  /* if (type === 'get') {
    xhr.send(null)
  } else {
    xhr.send(paramStr)
  } */
  xhr.send(paramStr)
}

//由于在myAjax中要将一个对象，转成键值对的字符串，所以单独封装一个函数，存放转化的代码，封装好之后，在myAjax中，调用一下就可以了，所以myAjax里面一行代码就搞定了转换的需求

function obj2str(obj) {
  if (!obj || typeof obj !== 'object') return
  let arr = []
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }
  return arr.join('&')
}