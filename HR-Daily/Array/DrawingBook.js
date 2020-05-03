// hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
  let begCount = 0;
  let revCount = 0;

  if (n === p) {
    return 0;
  } else if (p <= Math.floor(n / 2)) {
    // start from beginning
    for (let i = 1; i < n; i += 2) {
      if (p > i) {
        begCount += 1;
      }
    }
    return begCount;
  } else if (p > Math.floor(n / 2)) {
    //start from end
    if (n % 2 != 0) {
      n -= 1;
    }
    for (let j = n; j >= 0; j -= 2) {
      if (p < j) {
        revCount += 1;
      }
    }
    return revCount;
  }
}

console.log(pageCount(6, 2));

function pCount(n, p) {
  // var pageCount = parseInt(stdin[0]),
  //     targetPage = parseInt(stdin[1]);

  let leftStart = Math.floor(p / 2);
  let rightStart = Math.floor(n / 2) - leftStart;

  return Math.min(leftStart, rightStart);
}
console.log(pCount(6, 2));
