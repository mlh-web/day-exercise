export interface AAA {
  name: string;
  age: number;
}
const haha: AAA = {
  name: "路人甲",
  age: 18,
}
console.log(haha)

interface BBB {
  name: string;
  age: number;
  hobby?: string;
  [aaa: string]: unknown;
}
let xixi:BBB={
  name:"路人乙",
  age:20,
  sex:"nv",
  hobby:"洋娃娃"
}
console.log(xixi)