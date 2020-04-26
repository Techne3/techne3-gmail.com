// const str = '[head, tail] = [1, 2, 3, 4]'
// let header=(str.split('='))
// let first=(header[0])
// let second=(header[1])
// console.log(first)
// console.log(second)
// return first, second

////// destruc
// const str = "[head,tail] = [1, 2, 3, 4]";
// let common = ([head, ...tail] = [1, 2, 3, 4]);
// console.log(tail);

///// 2 Destruc
// const str = `({ one = 1, two } = { two : 2})`
//  console.log(str)

/// 3) transform

// function transform(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       arr[i] = arr[i] - 1;
//     } else {
//       arr[i] = arr[i] + 1;
//     }
//   }

//   return arr;
// }

// console.log(transform([1, 2, 3, 4]));

function trans(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] = arr[i] + 1;
    } else {
      arr[i] = arr[i] - 1;
    }
  }
  return arr;
}
console.log(trans([1, 2, 3, 4]));

function tr(arr) {
  return arr.map((el) => (el % 2 == 0 ? el - 1 : el + 1));
}
console.log(tr([1, 2, 3, 4]));

//  4)

const user = {
  name: "John",
  email: "john@example.com",
  city: "Phoenix",
  state: "AZ",
  country: "USA",
};
const str = `({ name, email, ...rest} = user ).toString()`;

// 5)

function getSumOfItems(arr) {
  let added = arr.map((el) => el + el);
  return added;
}
///////// 6
console.log(getSumOfItems([1, 2, 3, 4]));

///////// 7\
function getSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  return sum;
}

console.log(getSum([1, 2, 3, 4]));

/// another solution

function getS(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(getS([1, 2, 3, 4]));

/// another solution

function getS(arr) {
  sum = 0;
  arr.forEach((add) => {
    sum += add;
  });
  return sum;
}

console.log(getS([1, 2, 3, 4]));

/// 8)
/// find the number of repeating syllables
function countSyllables(str) {
  let lowered = str.toLowerCase().split("");
  console.log(lowered);
  let fit = lowered.filter((el) => el == str.toLowerCase().slice(-1));
  return fit.length;
}

console.log(countSyllables("Lalalalala"));

/// 9)
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(2, 9, 5));

/// 10
function addIndexes(arr) {
  let answer = [];

  for (i = 0; i < arr.length; i++) {
    let adder = arr[i] + i;
    answer.push(adder);
  }

  return answer;
}

console.log(addIndexes([1, 2, 3, 4, 5]), [1, 3, 5, 7, 9]);
//// 11
function minMax(arr) {
  let holder = [];
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  holder.push(min, max);
  return holder;
}

console.log(minMax([4, 3, 2, 5]));

////12

function filterArray(arr) {
  return arr.filter((string) => typeof string === "number");
}
console.log(filterArray([1, "a", "b", 0, 15]));

// 13

function totalCups(n) {
  let cups = Math.floor(n / 6);
  return cups + n;
}
console.log(totalCups(12));

function pHName(pH) {
  if (pH > 14 || pH < 0) {
    return "invalid";
  }
  if (pH === 7) {
    return "neutral";
  }
  if (pH < 7) {
    return "acidic";
  }
  if (pH > 7) {
    return "alkaline";
  }
}

console.log(pHName(7.26));

// 14
function sortByLength(arr) {
  return arr.sort((a, b) => b.length - a.length);
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]));

// 15

function wumbo(words) {
  return words.replace(/M/g, "W");
}
console.log(wumbo("WHAT DO YOU MEAN WE'RE OUT OF MONEY"));

///// Another example
function wumbo(words) {
  return words
    .split("")
    .map((x) => x.replace("M", "W"))
    .join("");
}
console.log(wumbo("WHAT DO YOU MEAN WE'RE OUT OF MONEY"));
