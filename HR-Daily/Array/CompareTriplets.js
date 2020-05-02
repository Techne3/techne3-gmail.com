// /https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aScore++;
    }
    if (b[i] > a[i]) {
      bScore++;
    }
  }
  result[0] = aScore;
  result[1] = bScore;
  return result;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
