// https://leetcode.com/problems/climbing-stairs/
var climbStairs = function (n) {
  if (n < 2) return n;

  let ways = [1, 1];

  for (let i = 2; i <= n; i++) {
    ways.push(ways[i - 1] + ways[i - 2]);
  }

  return ways[ways.length - 1];
};

console.log(climbStairs(5));

// var ClimbS = function (n) {
//   if (n > 1) {
//     return ClimbS(n - 1) + ClimbS(n - 2);
//   } else {
//     return 1;
//   }
// };
// console.log(ClimbS(5));
