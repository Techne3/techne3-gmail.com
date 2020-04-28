// var findLucky = function (arr) {
//   let seen = {};
//   arr.forEach((num) => (seen[num] ? seen[num]++ : (seen[num] = 1))); //count frequency for each num
//   let maxLuckyNumber = -1;
//   for (let num of arr) {
//     if (num === seen[num])
//       // if lucky number
//       maxLuckyNumber = Math.max(maxLuckyNumber, num);
//   }
//   return maxLuckyNumber;
// };

console.log(findLucky([1, 1, 1, 1, 2, 2, 3, 3, 3]));

function findLucky(arr) {
  let map = {};
  let max = -1;

  //Map frequencies
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] ? map[arr[i]]++ : (map[arr[i]] = 1);
    // console.log(map)
  }

  //Check for largest target
  for (let el in map) {
    console.log(el);
    if (Number(el) === map[el] && Number(el) > max) max = Number(el);
  }
  return max;
}

// var findLucky = function(arr) {
//     let m = new Map();
//     arr.forEach(x => {
//         if (!m.has(x)) m.set(x,1);
//         else m.set(x,m.get(x)+1);
//     });
//     let luckies = Array.from(m.entries())
//                 .filter(x => x[0] == x[1])
//                 .map(x => x[0]);
//     return (luckies.length == 0) ? -1 : Math.max(...luckies);
// };
