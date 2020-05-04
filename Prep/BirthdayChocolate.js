// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  let answer = 0;
  // iterate bars
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    // iterate bars month times
    for (let j = i; j < m + i; j++) {
      // count sum of weights month times
      sum += s[j];
      //   console.log(sum)
    }
    // if counted sum is equal to amount of days
    // then it's +1 to possible ways!
    if (sum === d) {
      answer += 1;
    }
  }
  return answer;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));

function getWays(squares, d, m) {
  var ways = 0,
    i = 0,
    sum = 0,
    j = 0,
    index = 0;
  if (squares.length === 1 && squares[0] === d) {
    return 1;
  }
  for (i = 0; i < squares.length - (m - 1); i++) {
    sum = 0;
    index = i;
    for (j = 0; j < m; j++) {
      sum += squares[index++];
    }
    if (sum === d) {
      ways++;
    }
  }
  return ways;
}

console.log(getWays([1, 2, 1, 3, 2], 3, 2));

function solve(s, d, m) {
  let combos = 0;

  for (let i = 0; i < s.length; i++) {
    let total = 0;

    for (let x = i; x < i + m; x++) {
      total += s[x];
      console.log(total);
    }

    if (total === d) {
      combos++;
    }
  }

  return combos;
}

console.log(solve([1, 2, 1, 3, 2], 3, 2));

// function tester(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//       console.log(i)
//     for (let j = i; j < 3; j++) {
//       console.log(j)
//       total += arr[j]
//       console.log(total)
//     }
//   }
//   return total;
// }

// console.log(tester([1, 2, 1, 3, 2]));
