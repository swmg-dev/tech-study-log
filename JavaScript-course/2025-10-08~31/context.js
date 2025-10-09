// const a = 10;
// function outer() {
//   console.log(a);
// }
// outer();

// function outer() {
//   const a = 10;
//   function inner() {
//     return a;
//   }
//   return inner;
// }

// const inner = outer();
// console.log(inner());

// 클로저
// let num = 0;
// function counter() {
//   ++num;
//   return num;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());

function counter() {
  let num = 0;
  function inner() {
    return ++num;
  }
  return inner;
}

const increase = counter();

// increse에는 함수 그 자체가 담겨있다. 저장된 값이 함수이기 때문에 increse()처럼 호출 가능
console.log(increase());
console.log(increase());
console.log(increase());

num = 10;
console.log(increase());
console.log(num);

// 실습 - 호이스팅 과정 거친 코드로 변경하기
var sum;
var result;

function printResult(res) {
  console.log(res);
}

sum = (a, b) => {
  return a + b;
};

result = sum(10, 20);
printResult(res);
