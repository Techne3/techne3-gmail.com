// https://www.hackerrank.com/challenges/permutation-equation/problem

// function permutationEquation(p) {
//   let indexArr = [];
//   let temp =0;
//   let resArray = [];
//   for (let i = 0; i < p.length; i++) {
//     indexArr[p[i]]=i+1;
//     console.log(indexArr)
//   }
// //   for(let j =1; j<=p.length; j++){
// //       temp = indexArr[j]
// //       console.log(indexArr[j])
// //       resArray.push(indexArr[temp])
// //   }
// //   return resArray
// }

// console.log(permutationEquation([4, 3, 5, 1, 2]));

function permutationEquation(p) {
  return p
    .slice()
    .sort((a, b) => a - b)
    .map((x) => p.indexOf(x) + 1)
    .map((x) => p.indexOf(x) + 1);
}

console.log(permutationEquation([4, 3, 5, 1, 2]));
