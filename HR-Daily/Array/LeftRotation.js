// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// function rotLeft(arr, d) {
//   d = d % arr.length;
//   if (d === 0) {
//     return arr;
//   }
//   const rightSide = arr.splice(0, d);
//   console.log(arr)
//   return arr.concat(rightSide);
// }

// console.log(rotLeft([1, 2, 3, 4, 5], 4));

function rotLeft(a, d) {
  const rotatedArray = a.concat();

  for (let i = 0; i < d; i++) {
    // shift off the first item
    let frontItem = rotatedArray.shift();
    // add the first item to end of array
    rotatedArray.push(frontItem);
  }
  return rotatedArray;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
