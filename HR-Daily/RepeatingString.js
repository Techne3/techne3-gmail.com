//www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function repeatedString(s, n) {
  let loopedArr = [];
  // let splitArr = s.split("");
  let counter = 0;
  // loops over the string and as long as j is not n
  for (let i = 0, j = 0; j < n; i++, j++) {
    // we check if we reached the end of the string and reset i to 0
    if (i === s.length) {
      i = 0;
    }
    // we push each character to the array until j is n
    loopedArr.push(s[i]);
  }
  // loops over the arr and checks any letter 'a' instances and increases count by 1
  for (let letterA in loopedArr) {
    if (loopedArr[letterA] === "a") {
      counter++;
    }
  }
  return counter;
}

console.log(repeatedString("aba", 10));

function repeatString(str, num) {
  const splitArr = str.split("").filter((c) => c === "a").length;

  let repeat = Math.floor(num / str.length);
  // console.log(repeat);
  let rest = num % str.length;
  // console.log(rest);

  // console.log(str.slice(0, rest));

  const total =
    repeat * splitArr +
    str
      .slice(0, rest)
      .split("")
      .filter((c) => c === "a").length;

  return total;
}

console.log(repeatString("aba", 14));

//// other solution
// function repeatedString(s, n) {
//   let c = 0,
//     ca = 0,
//     r = n % s.length;

//   for (let i = s.length; i-- > 0; ) {
//     if (s.charAt(i) == "a") {
//       ++c;

//       if (i < r) ++ca;
//     }
//   }

//   return ((n - r) / s.length) * c + ca;
// }
// console.log(repeatedString("aba", 10));

function repeated(s, n) {
  let splitArr = s.split("").filter((c) => c === "a").length;
  let times = Math.floor(n / s.length);
  let mod = n % s.length;

  let together = splitArr * times;

  return (
    together +
    s
      .slice(0, mod)
      .split("")
      .filter((x) => x === "a").length
  );
}

console.log(repeated("aba", 10));
