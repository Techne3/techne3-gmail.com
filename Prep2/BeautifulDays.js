// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
  let count = 0;
  for (let m = i; m <= j; m++) {
    let reverse = m.toString().split("").reverse().join("");
    if (Math.abs(m - reverse) % k === 0) {
      count++;
    }
  }
  return count;
}

console.log(beautifulDays(20, 23, 6));
