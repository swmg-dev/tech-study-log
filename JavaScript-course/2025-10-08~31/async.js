function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getBike() {
  return new Promise((resolve) => resolve('오토바이'));
}

async function getBicycle() {
  await delay(2000);
  await delay(2000);
  await delay(2000);
  return '자전거';
}

// async function getBicycleBackup() {
//   //   return delay(2000).then(() =>
//   //     delay(2000).then(() => delay(2000).then(() => '자전거'))
//   //   );
// }

// const bike = getBike();
// const bicy = getBicycle();
getBike().then(console.log);
getBicycle().then(console.log);
