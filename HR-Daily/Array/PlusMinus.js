// https://www.hackerrank.com/challenges/plus-minus/problem

// function plusMinus(arr) {
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zero++;
//     } else if (arr[i] < 0) {
//       neg++;
//     } else if (arr[i] > 0) {
//       pos++;
//     }
//     results[0] = pos / arr.length;
//     results[1] = neg / arr.length;
//     results[2] = zero / arr.length;
//   }
//   return results;
// }

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

function PlusMinus(arr) {
  let negative = 0;
  let positive = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative += 1;
    } else if (arr[i] > 0) {
      positive += 1;
    } else {
      zero += 1;
    }
  }
  let pos = positive / arr.length;
  let neg = negative / arr.length;
  let zr = zero / arr.length;

  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zr.toFixed(6));
}

console.log(PlusMinus([-4, 3, -9, 0, 4, 1]));

// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let filledArray = new Array(n).fill(" ");
  while (filledArray.indexOf(" ") !== -1) {
    filledArray.shift();
    filledArray.push("#");
    console.log(filledArray.join(""));
    n--;
  }
}

console.log(staircase(6));
