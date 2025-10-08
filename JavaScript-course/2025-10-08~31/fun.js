// function gugudan(dan) {
//   for (i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
//   }
// }
// gugudan(3);

const printIntroduce = function (name, age) {
  console.log(`안녕하세요 ${name}이고, ${age}살입니다.`);
};

printIntroduce('민경', 23);

// // 가변 인자 함수
// function sum() {
//   let result = 0;
//   for (let value of arguments) {
//     result = result + value;
//   }
//   console.log(result);
// }

// sum(10, 20, 30);

// // 스프레드 연산자
// function sum(...args) {
//   console.log(args);
//   let result = 0;
//   for (let value of args) {
//     result = result + value;
//   }
//   console.log(result);
//   return result;
// }

// const result = sum(10, 20, 30);
// console.log(result);

// 실습 제곱근 구하기
function jaegob(a) {
  result = a ** 2;
  console.log(result);
  return result;
}
jaegob(5);
