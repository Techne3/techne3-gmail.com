// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  let res = [];
  a.forEach((e) => (res[e] = (res[e] || 0) + 1));
  //   console.log(res);
  let max = Number.NEGATIVE_INFINITY;
  res.forEach((e, i) => {
    const mayBeMax = e + (res[i + 1] || 0);
    if (mayBeMax > max) {
      max = mayBeMax;
    }
  });
  return max;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
