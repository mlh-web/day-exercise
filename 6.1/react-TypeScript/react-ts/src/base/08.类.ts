class Animals {
  // 声明Animals类的实例有一个属性name，值为string
  name: string
  constructor(name: string) {
    // 定义实例直接的属性
    this.name = name;
  }
  // 定义实例直接的属性，类型是number
  age: number = 18

  // 定义原型上的方法
  setName(name: string): void {
    this.name = name
  }
}

class Dog extends Animals {
  // 给类定义属性
  static sex: string = '男'

  _weight: number
  constructor(name: string, weight: number) {
    super(name); // 调用父类Animals的constructor方法
    this._weight = weight;
  }
  // 属性的读取方法
  get weight() {
    return this._weight;
  }
  // 属性的设置方法
  set weight(val) {
    this._weight = val
  }
  // 类的原型定义的方法
  setName(name: string): void {
    super.setName(name); //super就相当于父类
  }

  // 实例直接方法
  setAge: (age: number) => void = (age: number): void => {
    this.age = age;
  }
}
