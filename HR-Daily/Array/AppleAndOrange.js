// https://www.hackerrank.com/challenges/apple-and-orange/problem

// function countApplesAndOranges(s, t, a, b, apples, oranges) {

// }

// console.log(countApplesAndOranges())

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
