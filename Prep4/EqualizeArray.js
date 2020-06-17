// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
  let obj = {};

  for (let i of arr) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  const valueArr = Object.values(obj);
  const max = Math.max(...valueArr);
  return arr.length - max;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
