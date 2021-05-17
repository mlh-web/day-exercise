//对表单进行校验

//1.获取表单元素
const username = document.querySelector('input[name=username]')
const password = document.querySelector('input[name=password]')
const repassword = document.querySelector('input[name="repassword"]')
const userSpan = document.querySelector('#tip-username')
const pswSpan = document.querySelector('#tip-password')
const repswSpan = documennt.querySelector('tip-repassword')
const registerBtn = document.querySelector('input[type=submin]')

//2.给表单元素注册失去焦点的事件
username.oninput = function (e) {
  //3.在事件处理函数中，获取用户输入的内容，然后进行校验
  // trim方法是去掉前后空格
  const value = this.value.trim()
  if (!value) return
  //4.使用正则去校验（可以是数字，字符，下划线）8-16位
  let reg = /^\w{8,16}$/
  if (reg.test(value)) {
    //符合要求
    userSpan.textContent = "输入正确"
    userSpan.style.color = "green"
  } else {
    //不符合要求
    userSpan.textContent = "输入错误"
    userSpan.style.color = "red"
  }
}

password.oninput = function (e) {
  //3.在事件处理函数中，获取用户输入的内容，然后进行校验
  const value = this.value.trim()
  if (!value) return
  // 4.使用正则去校验（首位为大写字母）8-16位
  let reg = /^[A-Z]+\w{7,15}$/
  if (reg.test(value)) {
    //说明符合要求
    pswSpan.textContent = "输入正确"
    pswSpan.style.color = "green"
  } else {
    pswSpan.textContent = "输入错误"
    pswSpan.style.color = "red"
  }
}

repassword.oninput = function (e) {
  const value = this.value.trim()
  if (!value) return
  if (value === password.value.trim()) {
    repswSpan.textContent = "输入正确"
    repawSpan.style.colot = "green"
  } else {
    repswSpan.textContent = "输入错误"
    repswSpan.style.color = "red"
  }
}

registerBtn.onclick = function () {
  if (!userSpan.style.color || !pswSpan.style.color || !repswSpan.style.color) return e.preventDefault()
  if (!(userSpan.style.color === "green" && pswSpan.style.color === "green" && repswSpan.style.color === "green")) e.preventDefault()
}