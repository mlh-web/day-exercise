# day03

## 虚拟 DOM Diff 算法

React 对新旧虚拟 DOM 树比较时，进行了三种优化，来提升比较的速度

## tree diff

1. 原因：开发时，我们进行跨层级移动节点较少，可以忽略不计，所以我们生成的 DOM 树结构很稳定

2. tree diff 策略

- 只进行相同层级的节点比较，从上到下依次比较
- 如果比较新旧 DOM 节点相同，继续比较子节点，如果不同，就不对比子节点了

3. 避免跨层级移动节点，如果真的需要，通过 css 去控制

## component diff

1. 原因：相同类的组件生成相似的结构，不同类的组件生成不同的结构

2. component diff 策略

- 比较时，如果对比的节点时组件，走 component diff
- 对比组件是否是同一类的组件
  - 是
    - 默认会对组件子节点进行 tree diff
    - 此时可以优化，定义 shouldComponentUpdate 函数
      - 内部判断新旧 state 和 props 是否发生变化，如果有变化就返回 true，如果都没有变化就返回 false（返回 false 就会跳过子节点的比较）
  - 不是，就删除旧组件，替换成新组件

3. 尽量复用组件

## element diff

1. 原因：相同层级的多个子节点进行操作时，性能不好（往前面追加元素）

2. element diff 策略

- 给相同层级的多个子节点都要添加一个 key 属性，值是唯一的
- 比较新旧 DOM 节点时，优先比较 key，key 相同还要看位置，都相等，就不动，位置不同就要移动位置，key 不同就要重新创建节点

3. key 的值能用 id 用 id，如果想使用 index，只能用于数组最后面的操作

## 谈谈原型

- 显式原型
  每一个函数都有自己的显式原型（prototype）
  显式原型指向函数的原型对象
  只有实例化的对象才能访问原型对象
  原型对象默认存在，是一个空对象
  - 原型链
    每一个函数都有自己的显式原型（prototype）
    每个对象都有自己的隐式原型
    对象的隐式原型指向其构造函数的显式原型
    设置对象属性的时候，会直接设置给当前的对象
    获取对象属性的时候，会沿着原型链依次查找当前属性

## 总结 this 指向

1.在构造函数中,this 将永远绑定到被实例化的对象上 。
2.直接调用,this 最后都指向 window 。
3.箭头函数,无论嵌套多少层箭头函数中的 this 与最外层非箭头函数 this 相同 。
4.当做属性调用,被当做属性调用时，函数中 this 指向对最后一个调用函数的对象 。
5.定时器内 this 指向,setTimeout 中的 this 都指向 window。
6.call apply bind 硬绑定 this 指向 call 方法规定的对象。
