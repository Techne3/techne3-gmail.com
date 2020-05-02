// https://www.hackerrank.com/challenges/a-very-big-sum/problem?h_r=next-challenge&h_v=zen

function aVeryBigSum(ar) {
  let total = 0;

  for (let i = 0; i < ar.length; i++) {
    total += ar[i];
  }
  return total;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
