function counter(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = n + 1;
      if (num > 5) {
        reject(new Error('5보다 클 수 없습니다.'));
      } else {
        console.log(num);
        resolve(num);
      }
    }, 0);
  });
}

counter(0)
  .then(counter)
  .then(counter)
  .then(counter)
  .then(counter)
  .then(counter)
  .catch((err) => console.log(err.message));
