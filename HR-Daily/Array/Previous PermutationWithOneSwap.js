// https://leetcode.com/problems/previous-permutation-with-one-swap

var prevPermOpt1 = function (arr) {
  // Find the last arr[i] where arr[i] > arr[i+1]
  var first = 0;
  for (var i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      first = arr[i - 1];
      var pos1 = i - 1;
      break;
    }
  }

  // Find the next biggest value that is smaller than the first
  var second = 0;
  for (i = pos1 + 1; i < arr.length; i++) {
    if (arr[i] > second && arr[i] < first) {
      second = arr[i];
      var pos2 = i;
    }
  }

  // Swap places
  if (first != 0) {
    arr[pos2] = first;
    arr[pos1] = second;
  }

  return arr;
};

console.log(prevPermOpt1([3, 2, 1]));
console.log(prevPermOpt1([9, 2, 3]));
