console.log('app');
const module1 = require('./module1')
const module2 = require('./module2')
const module3 = require('./module3')
console.log(module1);
console.log(module2);
console.log(module3);
let {
  a,
  b
} = module1;
console.log(a);
console.log(b);