// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
  let counter = 0;
  let max = Math.max(...ar);

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === max) {
      counter++;
    }
  }
  console.log(counter);
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
