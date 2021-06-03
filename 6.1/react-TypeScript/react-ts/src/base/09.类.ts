/* 
public 公共的、公开的。类和实例都可以访问
private 私有的。只有当前类才能访问，实例和子类不能访问
protected 受保护的。只有当前类和子类可以访问，实例不能访问
*/
class Person {
  public name: string
  private age: number
  protected sex: string
}
const p = new Person("bob", 22, "女")
