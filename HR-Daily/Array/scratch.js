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
/// 16
function getMultipliedArr(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
}
console.log(getMultipliedArr([1, 3, 5]));

//17

function wordLengths(arr) {
  return arr.map((x) => x.length);
}
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));

/// add all numbers leading up to n
// example n =3      1 + 2 + 3 = 6
function addUpTo(n) {
  var sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUpTo(3));

/// find volume
function volPizza(radius, height) {
  let rad = radius * radius;
  return Math.round(rad * (height * Math.PI));
}

console.log(volPizza(7, 2));
console.log(volPizza(10, 2.5));

// find how many overlapping claps there arr in string
// function countClaps(str) {
//   let spliter = str.split("");
//   let filterSplit = spliter.filter((x) => x == "C");
//   return filterSplit.length;
// }
// console.log(countClaps(countClaps("ClaClaClaClap!")));

// function countClaps(txt) {
// 	var arr = txt.split('');
// 	var counter = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === 'C') {
// 			counter++;
// 		}
// 	}
// 	return counter;
// }

// console.log(countClaps(countClaps("ClaClaClaClap!")))

//Create a function which returns the total of all odd numbers up to and including n.

function addOddToN(n) {
  let count = 0;
  for (i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      count += i;
    }
  }
  return count;
}
console.log(addOddToN(5));
//Something which is not true is false, but something which is not not true is true! Create a function where given n number of "not", evaluate whether it's true or false.

function notNotNot(n, bool) {
  return n % 2 === 0 ? bool : !bool;
}
console.log(notNotNot(6, true));
// not not not not not not true = true
console.log(notNotNot(2, false));
//Not not false = false
console.log(notNotNot(1, true));

// class Employee {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.fullname = `${firstname} ${lastname}`;
//     this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
//   }
// }

//Create a function where given the number n, return the sum of all square numbers up to and including n.
function squaresSum(n) {
  let count = 0;
  for (i = 0; i <= n; i++) {
    count += i * i;
  }
  return count;
}
console.log(squaresSum(12));

/// return smallest num in array
function findSmallestNum(arr) {
  return Math.min(...arr);
}

console.log(findSmallestNum([34, 15, 88, 2]));

/// Given arroy of integers, remove each kth element from it
/// EXAMPLE:
//// for inputArray =[1,2,3,4,5,6,7,8,9,10] and k=3
//// output should be extractEachKth(inputArray,k) = [1,2,4,5,7,8,10]

function extractEachKth(inputArray, k) {
  return inputArray.filter((x) => x % k !== 0);
}
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// space out string

function spaceMeOut(strs) {
  return strs.split("").join(" ");
}
console.log(spaceMeOut("space"));

/// fix bug

function checkEquals(arr1, arr2) {
  if (arr1.join(",") === arr2.join(",")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEquals([1, 2], [1, 2]));
console.log(checkEquals([11, 2], [1, 12]));

/// convert number to binary

// function binary(decimal) {
// 	return decimal.toString(2);
// }

// console.log(binary(100));

function binary(decimal) {
  let result = "";
  if (decimal == 0) {
    result = "0";
  }
  while (decimal > 0) {
    result += decimal % 2;
    decimal = Math.floor(decimal / 2);
    // console.log(decimal);
    // console.log(result);
  }
  return result.split("").reverse().join("");
}
console.log(binary(100));

/// higher order function call
function whichIsLarger(f, g) {
  return f() > g() ? "f" : f() < g() ? "g" : "neither";
  // if(f() > g()){
  // 	return 'f'
  // }else if(f() < g()){
  // 	return 'g'
  // }else{
  // 	return 'neither'
  // }
}

function removeVowels(string) {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (!vowels[letter]) {
      result += string[i];
    }
  }
  return result;
}
console.log(removeVowels("If Obama resigns from office NOW, thereby"));

// function disemvowel(str) {
//   var vowels = ["a", "e", "i", "o", "u"];

//   return str.toLowerCase()
//     .split("")
//     .filter((el) {
//       return vowels.indexOf(el.toLowerCase()) == -1;
//     })
//     .join("");
// }

// console.log(disemvowel("Hello Josh"));

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let spliterStr = str.toLowerCase().split("");
  return spliterStr
    .filter((x) => {
      return vowels.indexOf(x) == -1;
    })
    .join("");
}
console.log(disemvowel("Hello Josh"));

///////  return str.replace(/[aeiouAEIOU]/g, "")
//////// return str.split("").filter(char => 'aeiouAEIOU'.indexOf(char) < 0).join("")

/// can next arrays if arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
function canNest(arr1, arr2) {
  let min1 = Math.min(...arr1);
  let min2 = Math.min(...arr2);
  let max1 = Math.max(...arr1);
  let max2 = Math.max(...arr2);

  if (min1 === min2) {
    return false;
  }
  return min1 > min2 ? true : max1 <= max2 ? true : false;
}

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([9, 9, 8], [8, 9, 10]));

// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
function matchHouses(step) {
  let count = 0;
  if (step === 0) {
    return 0;
  } else if (step) {
    return (count += 5 * step + 1);
  }
}
console.log(matchHouses(1));

///Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number

const halfQuarterEighth = (n) => {
  arr = [n / 2, n / 4, n / 8];
  return arr;
};
console.log(halfQuarterEighth(6));

////// return num of '-'
function Go(num) {
  let dash = "";
  while (num <= 60) {
    for (let i = 0; i < num; i++) {
      dash += "-";
    }
    return dash;
  }
}
console.log(Go(10));

// Create a function to calculate the determinant of a 2 x 2 matrix.
// The determinant of the following matrix is: ad - bc:

const calcDeterminant = (matrix) => {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

  //const [[a, b], [c, d]] = matrix
  // return a * d - b * c
};
console.log(
  calcDeterminant([
    [3, 1],
    [5, 3],
  ])
);
