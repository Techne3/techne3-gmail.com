// https://www.hackerrank.com/challenges/gem-stones/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function gemstones(arr) {
  let finalArr = [];
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(...new Set(arr[i]));
  }
  for (let i = 0; i < finalArr.length; i++) {
    if (map[finalArr[i]]) {
      map[finalArr[i]]++;
    } else {
      map[finalArr[i]] = 1;
    }
  }

  let count = 0;
  for (let val in map) {
    if (map[val] === arr.length) {
      count++;
    }
  }
  console.log(count);
}

console.log(gemstones(["abcddebaccdeeabg"]));
