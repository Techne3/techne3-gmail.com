// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
  const allOptions = [];
  keyboards.forEach((k) => {
    drives.forEach((d) => {
      if (k + d <= b) {
        allOptions.push(k + d);
      }
    });
  });
  return allOptions.length === 0 ? -1 : Math.max(...allOptions);
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
