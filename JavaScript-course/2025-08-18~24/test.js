// if 실습
const studentScore = 50;
let grade;

if (studentScore >= 90) {
  grade = 'A';
} else if (studentScore >= 80 && studentScore < 90) {
  grade = 'B';
} else if (studentScore >= 70 && studentScore < 80) {
  grade = 'C';
} else if (studentScore >= 60 && studentScore < 70) {
  grade = 'E';
} else {
  grade = 'F';
}

console.log(`학생의 최종 학점은 ${grade} 학점입니다.`);

// switch 실습
const result = Math.floor(studentScore / 10); // 소수점 버림

switch (result) {
  case 10: // 100점
  case 9: // 90~99점
    grade = 'A';
    break;
  case 8: // 80~89점
    grade = 'B';
    break;
  case 7: // 70~79점
    grade = 'C';
    break;
  case 6: // 60~69점
    grade = 'D';
    break;
  default: // 0~59점
    grade = 'F';
}

console.log(`학생의 최종 학점은 ${grade} 학점입니다.`);

// while
let num = 1;
while (num < 10) {
  console.log(num);
  num++;
}

// do~while
let num1 = 1;
do {
  console.log(num1);
  num1++;
} while (false);

// for
for (let i = 0; i < 5; i++) {
  console.log(`i는 ${i}`);
}

//for문 실습 - 구구단
for (let i = 1; i < 10; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}

// for in, for of
const arr = [10, 20, 30];
const obj = {
  name: '철수',
  age: 20,
};

for (let key in obj) {
  console.log(obj[key]); // 실직적으로 배열의 데이터에 접근하고 싶다면 이런 코드
}
// obj.key는 안된다
// 여기서 사용된 key가 문자열 데이터 값으로 인식된다
// 실질적인 키의 값에 접근하려면 대괄호 연산자 사용해야 한다

for (let value of arr) {
  console.log(value); // 실질 데이터에 바로 접근해서 반복한다
}
// 객체 데이터를 반복할 수 없다

// break(if, switch 자주 사용), continue
for (let i = 0; i < 5; i++) {
  if (i === 2 || i === 4) continue;
  console.log(i);
}

// 암스트롱 수: 세 자리의 정수 중에서 각 자리의 수를 세제곱한 수의 합과 자신이 같은 수
for (let i = 1; i < 10; i++) {
  for (let k = 0; k < 10; k++) {
    for (let j = 0; j < 10; j++) {
      let sum = i * i * i + k * k * k + j * j * j;
      let currentNumber = i * 100 + k * 10 + j * 1;

      if (sum === currentNumber) {
        console.log(currentNumber);
      }
    }
  }
}
