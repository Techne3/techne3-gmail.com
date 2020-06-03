// https://www.hackerrank.com/challenges/pangrams/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

function pangrams(s) {
  const alphaSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-zA-Z]/)) {
      alphaSet.add(s[i].toLowerCase());
    }
  }
  return alphaSet.size >= 26 ? "pangram" : "not pangram";
}
