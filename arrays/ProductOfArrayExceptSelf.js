// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

function productOfArrayExceptSelf(array) {
  var resultArray = [];
  let product = 0;
  for (var i = 0; i < array.length; i++) {
    product = 1;
    for (var j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    resultArray.push(product);
  }
  return resultArray;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
