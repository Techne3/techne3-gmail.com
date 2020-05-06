// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
  let p = 5;
  let sum = 0;
  Array.from({ length: n }).forEach(() => {
    p = Math.floor(p / 2);
    sum += p;
    p *= 3;
  });

  return sum;
}

console.log(viralAdvertising(3));

// Given a positive integer return its complement. A complement for a number is the bit representation of the number flipped

let findComplement = (num) => {
  let binary = Number(num).toString(2);
  console.log(binary);
  let complement = "";
  for (let bit of binary) {
    if (bit === "0") {
      complement += "1";
    } else {
      complement += "0";
    }
  }
  return parseInt(complement, 2);
};

console.log(findComplement(20));
