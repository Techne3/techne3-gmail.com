// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesInRange = 0;
  let orangesInRange = 0;

  // get the max length of both arrays to use it in the for loop
  let length = Math.max(apples.length, oranges.length);

  for (let i = 0; i < length; i++) {
    //check if this index exist in apples
    if (typeof apples[i] !== "undefined") {
      if (a + apples[i] >= s && a + apples[i] <= t) {
        applesInRange++;
      }
    }

    //check if this index exist in oranges
    if (typeof oranges[i] !== "undefined") {
      if (b + oranges[i] >= s && b + oranges[i] <= t) {
        orangesInRange++;
      }
    }
  }

  console.log(applesInRange);
  console.log(orangesInRange);
}

console.log(countApplesAndOranges());

// function appleAndOrange(s, t, a, b, apple, orange) {
//   return [
//       apple.map(p => p + a).filter(p => p >= s && p <= t).length,
//       orange.map(p => p + b).filter(p => p >= s && p <= t).length
//   ]
// }

//  https://www.hackerrank.com/challenges/time-conversion/problem
function timeConversion(s) {
  let AMPM = s.slice(-2);
  let timeArr = s.slice(0, -2).split(":");

  if (AMPM === "AM" && timeArr[0] === "12") {
    timeArr[0] = "00";
  } else if (AMPM === "PM") {
    timeArr[0] = (Number(timeArr[0]) % 12) + 12;
  }
  return timeArr.join(":");
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45AM"));

function timer(str) {
  let AMPM = str.slice(-2);
  let timeArr = str.slice(0, -2).split(":");
  if (AMPM === "AM" && timeArr[0] === "12") {
    timeArr[0] = "00";
  } else if (AMPM === "PM") {
    timeArr[0] = Number((timeArr[0].indexOf(12) !== -1) + 12);
  }
  return timeArr.join(":");
}
console.log(timer("07:05:45PM"));
console.log(timer("12:05:45AM"));
