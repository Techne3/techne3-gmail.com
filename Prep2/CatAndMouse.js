// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);

  if (catB > catA) {
    return "Cat A";
  } else if (catB < catA) {
    return "Cat B";
  }
  return "Mouse C";
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
