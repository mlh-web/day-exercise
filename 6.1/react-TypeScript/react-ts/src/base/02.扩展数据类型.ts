// 元组 Tuple
export let arr: [number, string]
arr = [1, "1"]
arr.push("2")
console.log(arr)

// 枚举 Enum
enum Color {
  green, yellow, red
}
console.log(Color.green); //对应的下标
console.log(Color[1]);//对应的值

// 任意值 Any
let a: any;
a = 123
a = true
a = "abc"
console.log(a);
document.write(a.toUpperCase())
console.log(a.toUpperCase());


// 不知道的值
let b: unknown
b = 123
b = false
b = "efg"
if (typeof b === "string") {
  b.toUpperCase()
}
console.log(b);

// 空值 Void:与Any相反,用来表示没有任何类型
// function add(): void { }

// 永不存在的值 Never:表示的是那些用不存在的类型
/* function infiniteLoop(): never {
 while (true) { }
}
infiniteLoop() */




