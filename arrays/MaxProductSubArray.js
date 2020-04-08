// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maxProduct(nums) {
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let res = nums[0];
  for (var i = 1; i < nums.length; i++) {
    maxSoFar *= nums[i];
    minSoFar *= nums[i];
    if (nums[i] < 0) {
      let tmp = maxSoFar;
      maxSoFar = minSoFar;
      minSoFar = tmp;
    }
    maxSoFar = Math.max(maxSoFar, nums[i]);
    minSoFar = Math.max(minSoFar, nums[i]);
    res = Math.max(res, maxSoFar);
  }
  return res;
}

console.log(maxProduct([2, 3, -2, 4]));
