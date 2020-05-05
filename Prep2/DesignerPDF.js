// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  const map = new Map();
  let i = "a".charCodeAt(0);
  let j = "z".charCodeAt(0);

  for (; i <= j; i++) {
    map.set(String.fromCharCode(i), h[i - 97]);
  }
  const max = word
    .split("")
    .reduce((acc, curr) => (map.get(curr) > acc ? map.get(curr) : acc), 0);
  return max * word.length;
}

console.log(
  designerPdfViewer(
    [
      1,
      3,
      1,
      3,
      1,
      4,
      1,
      3,
      2,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      7,
    ],
    "zaba"
  )
);
