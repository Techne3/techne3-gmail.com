// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// var subtractProductAndSum = function (n) {
//   let nStr = n.toString().split("");
//   const products = nStr.reduce((a, b) => a * b);
//   console.log(products)
//   const sums = nStr.reduce((a, b) => a + b);
//   console.log(sums)

//   return products - sums;
// };

// console.log(subtractProductAndSum(234));

/// other solution
function subtractProduct(num) {
  let product = 1;
  let sum = 0;
  for (let i of num.toString()) {
    product *= Number(i);
    sum += Number(i);
  }
  return product - sum;
}

console.log(subtractProduct(234));

const subtractProductAndSum = (n) => {
  let sum = 0;
  let prod = 1;
  while (n > 0) {
    const mod = n % 10;
    sum += mod;
    prod *= mod;
    n = Math.floor(n / 10);
  }
  return prod - sum;
};

console.log(subtractProductAndSum(2345));

// let num = 25434;
// let sum = num % 10;
// console.log(sum);
