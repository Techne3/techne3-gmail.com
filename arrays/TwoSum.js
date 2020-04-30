// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function TwoSums(nums, target) {
  let result = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
}

console.log(TwoSums([2, 11, 7, 15], 9));

function TwoTwo(nums, tar) {
  let results = [];
  for (let i = 0, j = i + 1; i < nums.length; i++, j++) {
    console.log(nums[i]);
    console.log(nums[i]);
    if (nums[i] + nums[j] === tar) {
      results.push(i);
      results.push(j);
    }
  }
  return results;
}

console.log(TwoTwo([2, 11, 7, 15], 9));
