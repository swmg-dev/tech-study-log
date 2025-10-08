// 함수
/* 
자바스크립트의 참조 자료형에 속하는 객체 자료형에서 파생되는 데이터 형태 중 가장 많이 사용

1. 함수 선언문
function 함수명(){
// code
}

2. 함수 표현식
const 변수명 = function 함수명(){
// code
}

3. 함수 호출
함수명()
-> 똑같은 이름을 가지고 있는 함수가 호출되고, 함수 중괄호 안에 있는 코드들이 일괄 실행
*/

const gugu = function dan() {
  console.log('3 * 1 = 3');
  console.log('3 * 2 = 6');
  console.log('3 * 3 = 9');
  console.log('3 * 4 = 12');
  console.log('3 * 5 = 15');
  console.log('3 * 6 = 18');
  console.log('3 * 7 = 21');
  console.log('3 * 8 = 24');
  console.log('3 * 9 = 27');
};

function gugudan() {
  console.log('3 * 1 = 3');
  console.log('3 * 2 = 6');
  console.log('3 * 3 = 9');
  console.log('3 * 4 = 12');
  console.log('3 * 5 = 15');
  console.log('3 * 6 = 18');
  console.log('3 * 7 = 21');
  console.log('3 * 8 = 24');
  console.log('3 * 9 = 27');
}

gugudan();
gugu();
