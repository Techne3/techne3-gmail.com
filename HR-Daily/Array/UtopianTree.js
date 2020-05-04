// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
  let growth = 0;
  for (let i = 0; i <= n; i++) {
    i % 2 ? (growth *= 2) : (growth += 1);
  }
  return growth;
}
console.log(utopianTree(6));

function utopianT(n) {
  let height = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      height *= 2;
    } else {
      height += 1;
    }
  }

  return height;
}
console.log(utopianT(6));
