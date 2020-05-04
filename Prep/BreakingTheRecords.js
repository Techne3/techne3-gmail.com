// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(games) {
  let most = games[0];
  let least = games[0];

  let dMost = 0;
  let dLeast = 0;

  for (const score of games) {
    if (most < score) {
      most = score;
      dMost++;
    } else if (score < least) {
      least = score;
      dLeast++;
    }
  }

  return [dMost, dLeast];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

function records(game) {
  let most = game[0];
  let least = game[0];

  let max = 0;
  let min = 0;

  for (let score of game) {
    if (most > score) {
      most = score;
      max++;
    } else if (least < score) {
      least = score;
      min++;
    }
  }
  return [max, min];
}

console.log(records([10, 5, 20, 20, 4, 5, 2, 25, 1]));
