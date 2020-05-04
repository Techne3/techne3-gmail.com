// https://www.hackerrank.com/challenges/find-digits/problem

// function findDigits(n) {
//   return Array.from(String(n)).filter((num) => n % num === 0).length;
// }

// console.log(findDigits(12));

function findDigits(n) {
  let num = "";
  let count = 0;
  num = n.toString();
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0 && n % num[i] === 0) {
      count++;
    }
  }
  return count;
}

console.log(findDigits(12));
