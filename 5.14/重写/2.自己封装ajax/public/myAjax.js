// 1.函数名 取决于函数的作用，要见名知意
// 2.如果这个函数传入的数据较多，一般超过三个，就应该以对象的形式传入(有点：不需要记住传参的顺序，只需要知道属性代表的内容就可以了)
function myAjax(options) {
  // 0.先判断有没有传入对象
  // 如果没有传数据，直接return，这样就能提高性能
  // 如果判断的太复杂，真正要执行的业务代码还都没有写，就先进行了复杂的验证，其实也会影响性能，所以一般要验证，但是不会验证的太复杂
  // 1.一上来要把所有的属性都解构出来
  let {
    url,
    data,
    type = "get",
    success,
    error,
    complete,
    beforeSend,
    timeout,
    dataType = "json"
  }
  // 2.判断url有没有传，没有就return
  if (!url) return
  // 3.创建xhr对象
  const xhr = new XMLHttoRequest()
  // 设置超时时间
  xhr.timeout = timeout //设置超时时间，单位是毫秒
  // 4.将传入的data对象，转成键值对的字符串

}



// 由于在myAjax中要将一个对象，转成键值对的字符串，所以单独封装一个函数，存放转化的代码，封装好之后，在myAjax中，调用一下就可以了，所以myAjax里面一行代码就搞定了转换的需求
function obj2str(obj) {
  if (!obj || typeof obj !== 'object') return
  let arr = []
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }
  return arr.join('&')
}