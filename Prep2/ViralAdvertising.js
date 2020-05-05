// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
  let p = 5;
  let sum = 0;
  Array.from({ length: n }).forEach(() => {
    p = Math.floor(p / 2);
    sum += p;
    p *= 3;
  });
  return sum;
}

console.log(viralAdvertising(3));
