// //map

const nums = [1, 2, 3, 4];

// const multiplyThree = nums.map((cur, i, arr) => cur * 3);

// console.log(multiplyThree);

// // filter

// const moreThan2 = nums.filter((num) => num > 2);

// console.log(moreThan2);

// // reduce

// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

// // Polyfill for map();

// // Array.map((num,i,arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiplyThree = nums.myMap((num, i, arr) => {
  return num * 3;
});
console.log(multiplyThree);

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
    // temp.push();
  }
  return temp;
};
const moreThan2 = nums.myFilter((num, i, arr) => num > 2);
console.log(moreThan2);

//reduce

Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const sum = nums.myReduce((acc, num, i, arr) => {
  return acc + num;
}, 0);
console.log(sum);

// map vs forEach

const arr = [2, 5, 3, 4, 7];

const mapResult = arr.map((ar) => {
  return ar + 2;
});
const forEachResult = arr.forEach((ar, i) => {
  arr[i] = ar + 2;
});

console.log(mapResult);
console.log(arr);

console.log("testing find");

const item = arr.find((num) => num === 5);

console.log("item : ", item);

// item++;

console.log(arr);
