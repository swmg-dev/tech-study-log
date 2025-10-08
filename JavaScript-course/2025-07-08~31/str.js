let str = 'HTML';
console.log(str);

let str2 = 'Javascript';
console.log(str2);

// 이스케이프 문자(\)
// 특수 문자를 의미가 담긴 기호가 아니라 순수하게 문자로 인식하게 함

//템플릿 문자열: 변수 대입에서 사용 가능
const a = '철수';
// 백틱 안에서 변수 대입을 하려면 중괄호{} 안에 변수명을 적어준다
const str3 = `${a}야, 뭐하니?`;
console.log(str3);

//실습
const s1 = "코딩 공부는 역시 '수코딩'";
const s2 = '오늘 점심은 "순대국" 어때?';
const s3 = `'알고있다'와 "가르친다"의 차이`;

console.log(s1);
console.log(s2);
console.log(s3);

// 실습 문제
let level = 99;
let exp = 20.12;

console.log('나의 게임 레벨은 ' + level + '레벨입니다.');
console.log('현재 경험치는 ' + exp + '% 입니다.');

// 특수 자료형(undefined, null)
/* 
변수 선언 시 컴퓨터 메모리 공간에 변수가 생성이 된다. 이때 자바스크립트의 실행이 모두 끝날 때까지 선언된 변수에 해당하는 메모리 공간에 어떠한 값도 할당되지 않는다면 자바스크립트 엔진은 이 ㅁ메ㅗ리 공간에 undefined라는 값을 할당시킨다.

null: 누군가가 의도적으로 변수를 비워두려고 한 것으로 이해하기
*/

// 심볼형
/*
ES6에서 새롭게 추가된 자바스크립트의 기본 자료형
주로 중복되지 않는 고유한 값을 생성하고 싶을 때 사용
절대로 중복된 값이 생성되지 않음 -> 중복되는 일이 절대로 없는 값이 필요하면 사용해 볼 수 있음
*/

const ab = Symbol();
const bc = Symbol('message'); // message는 심볼형 데이터 값을 얻는데 영향을 주지 않고, 단순히 주석과 같이 코멘트를 남기는 정도의 역할만 함
