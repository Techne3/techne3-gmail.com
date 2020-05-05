// https://www.hackerrank.com/challenges/picking-numbers/problem

// function pickingNumbers(a) {
//   let res = [];
//   a.forEach((e) => (res[e] = (res[e] || 0) + 1));
//   //   console.log(res);
//   let max = Number.NEGATIVE_INFINITY;
//   res.forEach((e, i) => {
//     const mayBeMax = e + (res[i + 1] || 0);
//     if (mayBeMax > max) {
//       max = mayBeMax;
//     }
//   });
//   return max;
// }

// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

// function pickingNumbers(a) {
//   var mySet = new Set();
//   var maxCount = 0;
//   for (var i = 0; i < a.length; i++) {
//     var count = 0;
//     if (!mySet.has(a[i])) {
//       mySet.add(a[i]);
//       for (var j = 0; j < a.length; j++) {
//         if (a[j] == a[i] || a[j] == a[i] + 1) {
//           count++;
//         }
//       }
//       maxCount = Math.max(maxCount, count);
//     }
//   }
//   return maxCount;
// }

// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

function PN(a) {
  let mySet = new Set();
  let maxNum = 0;
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    if (!mySet.has(a[i])) {
      mySet.add(a[i]);
      for (let j = 0; j < a.length; j++) {
        if (a[j] === a[i] || a[j] === a[i] + 1) {
          count++;
        }
      }
      maxNum = Math.max(maxNum, count);
    }
  }
  return maxNum;
}

console.log(PN([4, 6, 5, 3, 3, 1]));

// function P(a) {
//   a = a.map(Number);
//   var res = 0;
//   for (var i = 0; i < 100; i++) {
//     var numberA = i;
//     var numberB = i + 1;
//     var curRes = 0;
//     for (var j = 0; j < a.length; j++) {
//       if (a[j] === numberA || a[j] === numberB) {
//         curRes++;
//       }
//     }
//     if (curRes > res) {
//       res = curRes;
//     }
//   }
//   console.log(res);
// }
// console.log(P([4, 6, 5, 3, 3, 1]));

function solve(arr) {
  var table = [],
    maxLength = Number.MIN_SAFE_INTEGER;

  arr.sort(function (a, b) {
    return a - b;
  });
  //   console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    if (table.length == 0) table.push(arr[i]);
    else {
      if (Math.abs(table[0] - arr[i]) < 2) {
        table.push(arr[i]);

        if (maxLength < table.length) maxLength = table.length;
      } else {
        table = [];
        i--;
      }
    }
  }

  console.log(maxLength);
}
console.log(solve([4, 6, 5, 3, 3, 1]));
