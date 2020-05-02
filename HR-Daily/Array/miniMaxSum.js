// https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen

function miniMaxSum(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let filterMin = arr.filter((x) => x !== min);
  let filterMax = arr.filter((x) => x !== max);

  let maximum = filterMin.reduce((a, b) => a + b);
  let minimum = filterMax.reduce((a, b) => a + b);

  console.log(minimum, maximum);
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
