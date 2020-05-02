// function diagonalDifference(arr) {
//   let sum = 0;
//   for (var i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i][i] - arr[i].reverse()[i];
//     console.log(sum);
//   }
//   return Math.abs(sum);
// }

// console.log(
//   diagonalDifference([
//     [1, 2, 4],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
function diagonalDifference(arr) {
  let n = arr.length;
  console.log(n);
  let leftSum = 0;
  let rightSum = 0;

  for (var i = 0, j = n - 1; i < n; i++, j--) {
    leftSum += arr[i][i];
    rightSum += arr[i][j];
    console.log(leftSum);
    console.log(rightSum);
  }
  let difference = leftSum - rightSum;
  return Math.abs(difference);
}

console.log(
  diagonalDifference([
    [1, 2, 4],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
