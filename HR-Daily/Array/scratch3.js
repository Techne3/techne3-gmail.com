// object to array
function objectToArray(obj) {
  //   const holdArr = [];
  //   const objectArray = Object.entries(obj);
  //   objectArray.map(([key, value]) => {
  //     holdArr.push([key, value]);
  //   });
  //   return holdArr;
  return Object.entries(obj);
}

console.log(objectToArray({ D: 1, B: 2, C: 3 }));

// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
function countdown(start) {
  holdArr = [];
  for (let i = -1; i < start; i++) {
    holdArr.push(i + 1);
  }
  return holdArr.reverse();
}
console.log(countdown(5));

//Write a function that returns true if two rooks can attack each other, and false otherwise.
// Two rooks can attack each other if they share the same row (letter) or column (number).
function canCapture([yourRook, opponentsRook]) {
  if (yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1]) {
    return true;
  }
  return false;
}
console.log(canCapture(["A8", "E8"]));

// add "Hello" to every name
function greetPeople(names) {
  return names ? names.map((x) => `Hello ${x}`).join(", ") : "";
}

console.log(greetPeople(["Joe", "Nala"]));

// swap first and last names
function nameShuffle(str) {
  let splitStr = str.split(" ");
  return `${splitStr[1]} ${splitStr[0]}`;
}
console.log(nameShuffle("Rosie O'Donnell"));

// https://edabit.com/challenge/erFxBbqzZPSegMwnc

function changeEnough(change, amountDue) {
  for (let i = 0; i < change.length; i++) {
    let quarter = change[0] * 0.25;
    let dime = change[1] * 0.1;
    let nickel = change[2] * 0.05;
    let pen = change[3] * 0.01;
    if (quarter + dime + nickel + pen >= amountDue) {
      return true;
    }
  }
  return false;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));

// Create a function that replaces all the vowels in a string with a specified character.
function replaceVowels(str, ch) {
  return str.replace(/[aeiouAEIOU]/g, `${ch}`);
}
console.log(replaceVowels("the aardvark", "#"));

// Create a function that filters out an array to include numbers who only have a certain number of digits.
function filterDigitLength(arr, num) {
  return arr.filter((x) => x.toString().length === num);
}

console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));

//Create a function that returns true if an input string contains only uppercase or only lowercase letters.
function sameCase(str) {
  if (str === str.toUpperCase() || str === str.toLowerCase()) {
    return true;
  }
  return false;
}
console.log(sameCase("hello"));
console.log(sameCase("HELLO"));
console.log(sameCase("HELLo"));
