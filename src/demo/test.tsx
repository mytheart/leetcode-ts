// function asyncAdd(a, b, callback) {
//   setTimeout(function () {
//     callback(null, a + b);
//   }, 500);
// }

var findKthLargest = function(nums, k) {
  nums.sort((a, b) => b - a);
  console.log(nums);

  // nums = [...new Set(nums)]
  console.log(nums);
  return nums[k - 1];
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

console.log(bubbleSort(arr));

// 柯里化
function curry(fn, ...args) {
  if (fn.lenght < args.length) {
    return (..._args) => curry(fn, ...args, ..._args);
  } else {
    fn(...args);
  }
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

const newSum = curry(sum, 1);

// function musum(...arg) {
//   return new Promise(res => {

//     if (arg.length <= 1) res(arg[0]);

//     new Promise(res0 => {

//       asyncAdd(arg[0], arg[1], (err, data) => {
//         res0(data)
//       })
//     }).then((data) => {
//       res(musum(data, ...arg.slice(2)))
//     })
//   })
// }

// async function sum(...args) {
//   if (args.length <= 1) return args[0];

//   const result = await new Promise(resolve => {
//     asyncAdd(args[0], args[1], (err, result) => {
//       if (!err) {
//         resolve(result);
//       }
//     });
//   });

//   return sum(result, ...args.slice(2));
// }

// (async () => {

//   const data = await sum(1, 2, 3, 4)
//   console.log(data)
// })()
