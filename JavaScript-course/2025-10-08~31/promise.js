new Promise((resolve, reject) => {
  //비동기 로직
  // promise 문법 내부에는 앞으로 처리하기로 약속된 코드를 적는다
  // 1. 대기(pending)
  console.log('code running...');

  // 2. 이행(Fulfilled)
  //   resolve('sample sucess');

  // 3. 거절(rejected)
  reject(new Error('sample fail'));
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
