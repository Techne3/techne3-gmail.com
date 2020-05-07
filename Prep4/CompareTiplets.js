// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let aTotal = 0;
  let bTotal = 0;

  function totalCheck(a, b) {
    if (a > b) {
      aTotal++;
    } else if (a < b) {
      bTotal++;
    }
  }

  totalCheck(a[0], b[0]);
  totalCheck(a[1], b[1]);
  totalCheck(a[2], b[2]);

  return [aTotal, bTotal];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
