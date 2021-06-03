export let a: number | string | boolean;
a = 123
a = true
a = "abc"
// a=Symbol()
console.log(a)

function fn(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y
  } else if (typeof x === "string" && typeof y === "string") {
    return x + y
  }
}
console.log(fn(1, 2)) //3
console.log(fn("3", "4")) //"34"
console.log(fn(5, "6")) //undefined