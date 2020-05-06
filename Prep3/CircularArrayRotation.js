// https://www.hackerrank.com/challenges/circular-array-rotation/problem

// function circularArrayRotation(a, k, queries) {
// Array.from({length: k}).forEach(()=> a.unshift(a.pop()))
// console.log(a)
// return queries.map(i => a[i])
// }

// console.log(circularArrayRotation([3,4,5],2,[1,2]))
function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
    console.log(a);
    return queries.map((x) => a[x]);
  }
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

function CR(a, k, queries) {
  let results = [];
  while (k > 0) {
    let temp = a.pop();
    a.unshift(temp);
    k--;
  }
  for (let i = 0; i < queries.length; i++) {
    results.push(a[queries[i]]);
  }

  return results;
}

console.log(CR([3, 4, 5], 2, [1, 2]));
