import { useState, useEffect } from "react"

export default function App() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    /* 
    函数相当于componentDidMount和componDidUpdate
    如果想要useEffect中函数只调用一次（componentDidMount）,就传入一个空数组
    */
    console.log("useEffect");
    // 数组[]作用：数组里面放置useEffect的依赖项，当依赖项发生变化，useEffect就会重新触发
    // 没有变化就不会触发
    return () => {
      // 相当于componWillUnmount
      console.log("aaa")
    }
  }, [count])

  console.log("render");

  const add: () => void = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={add}>按钮</button>
    </div>
  )
}
