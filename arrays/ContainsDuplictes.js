// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums) {
  const unique = new Set();

  for (let i = 0; i < nums.length; i++) {
    unique.add(nums[i]);
  }
  return nums.length !== unique.size;
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 3, 4, 2]));

// function containsDuplicate(nums) {
//   let keep = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (keep.indexOf(nums[i]) < 0) {
//       keep.push(nums[i]);
//       //   console.log(keep);
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// console.log(containsDuplicate([1, 3, 4, 2]));

// var containsDuplicate = function(nums) {
//     let arr = []
//     nums.forEach((item) => {
//         if(arr.includes(item)) {
//             return true
//         } else {
//             arr.push(item)
//         }
//     })
//     return false
// };

// function containsDuplicate(nums) {
//     unique = [];
//     for (i = 0; i < nums.length; i++) {
//       for (j = 0; j < nums.length; j++) {
//         if (i !== j) {
//           if (nums[i] === nums[j]) {
//             return true;
//           }
//         }
//       }
//     }
//     return false;
//   }

//   console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
//   console.log(containsDuplicate([1, 3, 3]));
