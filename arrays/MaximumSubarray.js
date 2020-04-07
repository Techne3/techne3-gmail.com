// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums) {
  let max = nums[0];
  let sum = 0;

  nums.forEach((e) => {
    sum += e;
    console.log(sum);
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
    console.log(sum);
  });
  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//// SOLUTION 2////

// function maxSub(nums) {
//   let sum = 0;
//   return nums.reduce((max, curr) => {
//     sum = curr + (sum > 0 ? sum : 0);
//     console.log(curr);
//     console.log(sum);
//     console.log(max);
//     return Math.max(max, sum);
//   }, 0);
// }

// console.log(maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// // console.log(maxSub([-2, 4, -6, -2, 10, -11]));
// // console.log(maxSub([1, 2, 3, 4]));
// // console.log(maxSub([0, 0, 0, -1]));
