const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sum = 1 + "a";
    if (isNaN(sum)) {
      reject("Error is not a number");
    }
    resolve(sum);
  }, 2000);
});

promise
  .then((d) => console.log(`The sum is ${d}`))
  .catch((e) => console.log(e));
//write a promise to calculate volume of a cuboid
const volume = (l, b, h) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (l <= 0 || b <= 0 || h <= 0) {
        reject("Invalid input");
      }
      resolve(l * b * h);
    }, 2000);
  });
};

volume(2, 3, 4)
  .then((d) => console.log(`Volume is ${d}`))
  .catch((e) => console.log(e));
