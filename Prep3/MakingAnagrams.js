// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function makeAnagram(a, b) {
  let vector = [];

  for (let element of a) {
    let index = element.charCodeAt(0) - 97;
    vector[index] = vector[index] || 0;
    vector[index] += 1;
  }
  for (let element of b) {
    let index = element.charCodeAt(0) - 97;
    vector[index] = vector[index] || 0;
    vector[index] -= 1;
  }
  return vector.reduce((a, b) => Math.abs(a) + Math.abs(b));
}
console.log(makeAnagram("abc", "cdf"));

/// other solution

function main(a, b) {
  a = a.split("");
  b = b.split("");
  var countA = a.length;
  var countB = b.length;
  var count = countA + countB;
  var pair = 0;
  for (var i = 0; i < countA; i++) {
    for (var j = 0; j < countB; j++) {
      if (a[i] == b[j]) {
        b.splice(j, 1);
        pair++;
        break;
      }
    }
  }
  console.log(count - pair * 2);
}

console.log(main("abc", "cdf"));

function makeAnagrams(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  let deletions = 0;
  let repeats = 0;
  for (let i = 0; i < Math.max(aLen, bLen); i++) {
    if (a.includes(a[i]) && b.includes(a[i])) {
      b = b.replace(a[i], "");
      repeats++;
    }
  }
  deletions = aLen - repeats + (bLen - repeats);
  return deletions;
}

console.log(makeAnagrams("abc", "cdf"));
