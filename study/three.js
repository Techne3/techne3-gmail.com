function three(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          result.push(new Array(arr[i], arr[k], arr[j]));
        }
      }
    }
  }

  return result;
}

console.log(three([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
