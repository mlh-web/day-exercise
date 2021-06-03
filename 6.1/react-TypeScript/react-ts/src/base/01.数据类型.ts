// Number
export const a: number = 123;
// String
const b: string = "123456";
// Boolean
const c: boolean = true;
// Null
const d: null = null;
// Undefined
const e: undefined = undefined;
// Symbol
const f: symbol = Symbol();
// BigInt
let g: bigint = BigInt(321)

console.log(a, b, c, d, e, f, g)

// 引用类型
// 对象
interface Person {
  name: string,
  age: number,
}
const person: Person = {
  name: "路人甲",
  age: 18,
}

// 函数
// 有返回值
function add(x: number, y: number): number {
  return x + y
}
// 无返回值
function fn(x: number, y: number): void {
  console.log(x, y)
}

// 数组
const arr1: number[] = [1, 2, 3]
const arr2: Array<string> = ["1", "2", "3"]

console.log(person, add, fn, arr1, arr2)
console.log(add(1, 2))
fn(3, 4)

