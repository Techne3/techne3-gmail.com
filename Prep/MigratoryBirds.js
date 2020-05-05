// https://www.hackerrank.com/challenges/migratory-birds/problem

// function migratoryBirds(arr) {

//  let filteredArr = arr.filter((item, index) => arr.indexOf(item) !== index)
//  return Math.min(...filteredArr)

// }
// console.log(migratoryBirds([1,2,3,4,3,2,1,3,4]))
// console.log(migratoryBirds([1,3,4,4,4,5]))

// function migratoryBirds(arr) {
//     const m = {}
//     let maxArr = []
//     let max = 0

//     for (let b of arr) {
//       if (m[b]) {
//         m[b] += 1
//         if (m[b] >= max) {
//           max = m[b]
//           maxArr.push(b)
//         }
//       } else {
//         m[b] = 1
//       }
//     }

//     return maxArr.reduce((a, b) => a < b ? a : b) // pick least
//   }
//   console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))
//   console.log(migratoryBirds([1,3,4,4,4,5]))

function migratoryBirds(arr) {
  const map = new Map();
  for (const n of arr) {
    if (!map.has(n)) {
      map.set(n, 0);
    }
    map.set(n, map.get(n) + 1);
    // console.log(map);
  }
  const s = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  return s[0][0];
}

// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(migratoryBirds([1, 3, 4, 4, 4, 5]));

function MB(arr) {
  let seenBird = {};
  arr.forEach((bird) => {
    if (!seenBird[bird]) {
      seenBird[bird] = 1;
    }
    seenBird[bird]++;
  });
  let birdId = 999;
  let total = 0;

  for (let key in seenBird) {
    // is it seen more
    if (seenBird[key] > total) {
      total = seenBird[key];
      birdId = key;
    } else if (seenBird[key] === total) {
    }
    if (birdId > key) {
      birdId = key;
    }
    // is it the same
    // is the bird id less than current birdId
  }
  return birdId;
}

console.log(MB([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(MB([1, 3, 4, 4, 4, 5]));
