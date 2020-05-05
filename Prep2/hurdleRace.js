// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(height, k) {
  height.sort((a, b) => a - b);
  let max = 0;
  height.forEach((x) => {
    if (x > k) {
      max = x - k;
      console.log(max);
    }
  });
  return max;
}

console.log(hurdleRace([1, 6, 3, 5, 2], 3));

// other solutions
function hr(height, k) {
  let count = 0;
  return Math.max(Math.max(...height) - k, count);
}

console.log(hr([1, 6, 3, 5, 2], 9));
