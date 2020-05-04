function diceGame(arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1]) {
      return 0;
    } else {
      sum = arr.flat().reduce((a, b) => a + b);
    }
  }
  return sum;
}

console.log(
  diceGame([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

// const diceGame = arr => arr.some(v => v[0]===v[1]) ? 0 :
// arr.flat().reduce((a,v) => a + v, 0);

// https://edabit.com/challenge/dzdoYrTL5vws4dFud
function nextElement(arr) {
  const gap = arr[1] - arr[0];
  return arr[arr.length - 1] + gap;
}
console.log(nextElement([3, 5, 7, 9]));

function removeEnemies(names, enemies) {
  return names.filter((x) => enemies.indexOf(x) < 0);
}

console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]));
