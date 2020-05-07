// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// function alternatingCharacters(s) {
//   let nextChar = s[0];
//   let counter = 0;

//   for (const letter of s) {
//     if (letter === nextChar) {
//       nextChar = nextChar === "A" ? "B" : "A";
//     } else {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(alternatingCharacters("ABABBC"));
function alternatingCharacters(word) {
  let count = 0;
  let previousSymbol = word[0];

  for (let i = 1; i < word.length; i++) {
    if (word[i] === previousSymbol) {
      count++;
    } else {
      previousSymbol = word[i];
      console.log(previousSymbol);
    }
  }

  return count;
}
console.log(alternatingCharacters("AAAA"));
