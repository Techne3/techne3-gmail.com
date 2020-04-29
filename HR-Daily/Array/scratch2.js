/// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

function charCount(myChar, str) {
  let splitStr = str.split("");
  let fil = splitStr.filter((x) => x === myChar);
  return fil.length;

  /// other solution
  //	return [...str].filter(x => x===myChar).length;
}

console.log(charCount("b", "big fat bubble"));

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

function sortNumsAscending(arr) {
  if (arr === null) {
    return [];
  } else {
    return arr.sort((a, b) => a - b);
  }
  // return arr ? arr.sort(function(a, b){ return a - b; }) : [];
}
console.log(sortNumsAscending([1, 2, 10, 50, 5]));
console.log(sortNumsAscending(null));

//// Given a number n, write a function that returns PI to n decimal places.
function myPi(n) {
  return Number(Math.PI.toFixed(n));
}
console.log(myPi(4));

//Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr) {
  return arr.map((x) => x * arr.length);
}

console.log(multiplyByLength([2, 3, 1, 0]));

//Create a function that takes an array of numbers and returns only the even values.

function noOdds(arr) {
  return arr.filter((x) => x % 2 === 0);
}

console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]));

// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

function cardHide(card) {
  //   return card.replace(/\d(?=\d{4})/g, "*");
  // other solution
  let arr = card.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    i < arr.length - 4 ? newArr.push("*") : newArr.push(arr[i]);
  }
  return newArr.join("");
}

console.log(cardHide("1234123456785678"));
console.log(cardHide("35123413355523"));

// /Create a function that takes a string and returns a string with its letters in alphabetical order.
function AlphabetSoup(str) {
  return str.split("").sort().join("");
}

console.log(AlphabetSoup("hello"));

// A number added with its additive inverse equals zero.
//  Create a function that returns an array of additive inverses.
// function additiveInverse(arr) {
//   let negatives = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Math.sign(arr[i]) === -1) {
//       negatives.push(arr[i] - arr[i]);
//     } else {
//       negatives.push(arr[i] - arr[i]);
//     }
//   }
//   return negatives;
// }

// console.log(additiveInverse([-5, -25, 35]));

function additiveInverse(arr) {
  let holderArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === -1) {
      holderArr.push(Math.abs(arr[i]));
    } else {
      holderArr.push(-arr[i]);
    }
  }
  return holderArr;
  // return arr.map((x) => -x)
}
console.log(additiveInverse([-5, -25, 35]));

//Create a function that takes two numbers and a mathematical operator + - / * and will
//  perform a calculation with the given numbers.
function calculator(num1, operator, num2) {
  if (operator === "/" && num2 === 0) return "Can't divide by 0!";
  return eval(`${num1}${operator}${num2}`);
}
console.log(calculator(2, "+", 2));
console.log(calculator(2, "-", 2));
console.log(calculator(2, "*", 4));
console.log(calculator(2, "/", 0));

// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
function checkEnding(str1, str2) {
  //   return str1.substr(-str2.length) === str2 ? true : false;
  return str1.endsWith(str2);
}
console.log(checkEnding("abc", "bc"));

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.

function triangle(n) {
  return (n * (n + 1)) / 2;

  //other solution
  //   let s = 0 ;
  //   for (let i=0 ; i<n ; i++){
  //       s += (i+1) ;
  //   }
  //   return s ;
}

console.log(triangle(215));

function reverse(bool) {
  if (bool === true) {
    return false;
  } else if (bool === false) {
    return true;
  } else {
    return "boolean expected";
  }

  //   return (typeof bool === "boolean") ? !bool : "boolean expected";
}

console.log(reverse(0));

//https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q

function firstDuplicate(a) {
  let nSet = new Set();

  for (let i = 0; i < a.length; i++) {
    if (nSet.has(a[i])) {
      return a[i];
    } else {
      nSet.add(a[i]);
    }
  }

  return -1;
}
console.log(firstDuplicate([1, 2, 3, 2]));

// https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC

function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    console.log(c);
    if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad"));
// console.log(firstNotRepeatingCharacter("abacabaabacaba"));

function firstNonRepeatingChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return s.charAt(i);
    }
  }
  return "_";
}

console.log(firstNonRepeatingChar("abacabad"));
console.log(firstNonRepeatingChar("abacabaabacaba"));
