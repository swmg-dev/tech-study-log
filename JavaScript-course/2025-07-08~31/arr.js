// 배열 (array)
/*
자바스크립트의 참조 자료형에 속하는 객체 자료형에서 파생되는 데이터 형태 중 가장 많이 사용

인덱스: 0부터 시작하는 숫자
*/

const arr = []; //빈 배열
console.log(arr);

const fruits = ['사과', '딸기', '바나나', '참외', '수박'];
console.log(fruits);

// 객체 리터럴
/*
하나의 데이터 값에 여러 개의 데이터 형태의 값을 묶어서 한 번에 할당하기 위해 사용하는 데이터 형태

{} 빈 객체
{
키 : 값,
키: 값
}
*/

const obj = {
  name: '철수',
  age: 30,
  'last visited': '2025-07-15',
};
console.log(obj['name']);
console.log(obj.age);
console.log(obj['last visited']);

