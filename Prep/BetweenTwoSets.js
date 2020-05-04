// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  let potential = [];
  let final = [];
  // let test = a[a.length -1]
  // console.log(test)
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    if (a.every((x) => i % x === 0)) potential.push(i);
  }
  for (let i = 0, len = potential.length; i < len; i++) {
    if (b.every((x) => x % potential[i] === 0)) final.push(potential[i]);
  }
  return final.length;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
