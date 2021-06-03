// 函数声明
export function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1, 2))
// 函数表达式
// 这种写法是只对右侧的匿名函数进行了类型定义，而等号左边的add2，是通过赋值操作进行了类型推论而推断出来的
/* let add2 = function (a: string, b: string): string {
  return a + b
} */

// 手动给add2添加类型
let add2: (a: string, b: string) => string = function (a: string, b: string): string {
  return a + b
}
console.log(add2("a", "b"))

// 用接口定义函数
interface AAA {
  (a: string, b: string, c: string): string
}
let add3: AAA;
add3 = function (a: string, b: string, c: string): string {
  return a + b + c
}
console.log(add3("1", "2", "3"));

// let add4: AAA; //该处不能写这个
let add4 = function (a: string, b: string, c?: string): string {
  if (c) {
    return a + b + c
  } else {
    return a + b
  }
}
console.log("add4", add4("1", "2", "3"));

let add5: AAA
add5 = function (a: string, b: string, c: string): string {
  return a + b + c
}
add5("1", "2", "3")

let add6 = function (a: string, b: string, c: string = "11111"): string {
  return a + b + c
}
console.log(add6("a", "b"))

// ...rest 的方式获取函数中的剩余参数
// 注意，rest参数只能是最后一个参数
function fn(array: any[], ...items: any[]): any[] {
  items.forEach(function (item) {
    array.push(item)
  })
  return array
}
console.log(fn([1], [2], [3], [4]));

// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
// 然而这样有一个缺点，就是不能精确的表达，输入为数字的时候，输出也应该时数字，输入为字符串的时候，输出也是字符串
function fn2(x: number, y: number): number
function fn2(x: string, y: string): string
function fn2(x: number | string, y: number | string){
  if (typeof x === "number" && typeof y === "number") {
    return x + y
  } else if (typeof x === "string" && typeof y === "string") {
    return x + y
  } 
}

console.log(fn2(10, 12)) 
console.log(fn2("10", "12"))












