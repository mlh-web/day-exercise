export let num = 7 //将a的类型推论为number，后续只能作为number使用
// num = "7" //报错
console.log(num)

let a //定义未赋值，则将a的类型推论为any类型 
a = true;
a = "123"
console.log(a);
