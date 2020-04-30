//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums) {
  let outputArr = [];
  for (let i = 0; i < nums.length; i++) {
    outputArr[i] = 0;
    for (let j = 0; j < nums.length; j++) {
      // if the first and second numbers are not the same
      // and the seconde number is less than the first number
      if (nums[i] !== nums[j] && nums[j] < nums[i]) {
        outputArr[i] += 1;
      }
    }
  }
  return outputArr;
}

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));

var minCostToMoveChips = function (chips) {
  let odd = 0;
  let even = 0;

  for (let position of chips) {
    if (position % 2 === 0) {
      even++;
      continue;
    }

    odd++;
  }

  return Math.min(even, odd);
};

console.log(minCostToMoveChips([2, 2, 2, 3, 3]));
