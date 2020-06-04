// www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
https: function hourglassSum(arr) {
  let max = -63;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = arr[i + 1][j + 1];
      for (let k = 0; k < 3; k++) {
        sum += arr[i][j + k];
        sum += arr[i + 2][j + k];
      }
      if (sum > max) max = sum;
    }
  }

  return max;
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
);
