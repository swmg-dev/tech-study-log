function delay(ms) {
  return new Promise((resolve, reject) =>
    setTimeout(reject(new Error('something error...')), ms)
  );
}

function getBike() {
  return new Promise((resolve) => resolve('오토바이'));
}

async function getBicycle() {
  try {
    await delay(1000);
    return '자전거';
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

getBike().then(console.log);
getBicycle()
  .then(console.log)
  .catch((err) => console.log(err.message));

// async function getBicycleBackup() {
//   //   return delay(2000).then(() =>
//   //     delay(2000).then(() => delay(2000).then(() => '자전거'))
//   //   );
// }

// const bike = getBike();
// const bicy = getBicycle();
