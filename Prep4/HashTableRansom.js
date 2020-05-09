// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
  var map = {};
  var replicable = true;
  for (var i of magazine) {
    map[i] = (map[i] || 0) + 1;
  }
  for (var i of note) {
    map[i] = (map[i] || 0) - 1;
  }
  for (var i in map) {
    if (map[i] < 0) {
      replicable = false;
      break;
    }
  }
  console.log(replicable ? "Yes" : "No");
}

console.log(
  checkMagazine(["give me one grand today night"], ["give one grand today"])
);

function ransomNote(strMagazine, strRansom) {
  let magazine = strMagazine.split(" ");
  let ransom = strRansom.split(" ");
  for (let i = 0; i < magazine.length; i++) {
    if (ransom.includes(magazine[i])) {
      ransom.splice(ransom.indexOf(magazine[i]), 1);
    }
    if (!ransom.length) {
      return "Yes";
    }
  }
  return "No";
}

console.log(
  ransomNote(
    "you and me have only one reason to remember this day",
    "you have only one day"
  )
);
console.log(ransomNote("you have only ", "you have only one day"));
