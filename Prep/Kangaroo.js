// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2 || (x2 - x1) % (v1 - v2) !== 0) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(0, 3, 4, 2));

/// other solution
const sameLocation = (x1, v1, x2, v2) => {
  if (v1 < v2) return "NO";
  if (x1 < x2 && v1 > v2) {
    const xDiff = Math.abs(x1 - x2);
    const vDiff = Math.abs(v1 - v2);
    if (xDiff % vDiff == 0) {
      return "YES";
    } else {
      return "NO";
    }
  }
  return "NO";
};

console.log(sameLocation(0, 3, 4, 2));
