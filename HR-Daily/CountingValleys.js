// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function countingValleys(n, s) {
  let elevation = 0;
  let traversedValleys = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "D") {
      --elevation;
    } else if (s[i] === "U") {
      if (elevation === 0) {
        traversedValleys++;
      }
    }
  }
  return traversedValleys;
}

console.log(countingValleys(8, "UDDDUDUU"));
