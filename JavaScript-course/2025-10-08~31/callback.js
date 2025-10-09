// callback 함수 실습

// 전달된 callback 함수를 그 함수 내부에서 호출하는 행위를 callback
// function first(callback) {
//   console.log('first');
//   callback();
// }

// // first ()안의 내용을 callback 함수
// // 방법1
// first(function () {
//   console.log('second');
// });

// 함수(매개변수)
// 매개변수 안에 함수값이 들어갔기 때문에 callback();이라고 쓰면 second();를 실행하는거랑 똑같이 되는 거다!!

// function second() {
//   console.log('second');
// }

// first(second);

function counter(n, callback) {
  setTimeout(() => {
    const num = n + 1;
    console.log(num);
    if (callback) {
      callback(num);
    }
  }, 0);
}

// 콜백 지옥(코드 비효율 방법이 필요하다)
counter(0, (n) => {
  counter(n, (n) => {
    counter(n, (n) => {
      counter(n, (n) => {
        counter(n, (n) => {
          counter(n);
        });
      });
    });
  });
});
