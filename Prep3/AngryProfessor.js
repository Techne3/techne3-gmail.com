// https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(a, k) {
  let onTime = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      onTime++;
    }
  }
  return onTime < k ? "YES" : "NO";
}

console.log(angryProfessor([-1, -1, 0, 0, 1, 1], 5));
console.log(angryProfessor([-1, -1, 0, 0, 1, 1], 4));
