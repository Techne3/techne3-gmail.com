// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  const sum = bill.reduce((r, v) => r + v, 0);
  const result = (sum - bill[k]) / 2;
  //   console.log(result);
  if (b - result === 0) {
    return "Bon Appetit";
  } else {
    return b - result;
  }
}

console.log(bonAppetit([2, 4, 6], 2, 3));
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
console.log(bonAppetit([3, 10, 2, 9], 1, 7));
