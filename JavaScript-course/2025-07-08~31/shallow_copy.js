//  얕은 복사
const a = { name: '철수' };
const b = a;

a.name = '비실';

console.log(a);
console.log(b);

// 깊은 복사
let ab = 10;
let bc = a;

a = 20;

console.log(ab);
console.log(bc);
