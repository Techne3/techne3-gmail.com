//www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function repeatedString(s, n) {
  let loopedArr = [];
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

console.log(repeatedString(["a", "b", "a"], 10));
