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
//////// Double linked list solution//////
// Create nodes with char code and counts.
// Create doubly linked list
// Iterate and remove nodes until the last node's count equals 0, prev === null andnext === null (prev === next)
const base = 97;
const total = 26;
const keys = ["next", "prev"];

class Node {
  constructor(val) {
    this.val = val;
    this.char = String.fromCharCode(base + val);
    this.count = 0;
    this.prev = null;
    this.next = null;
  }
}

function sortString(s) {
  const nodes = Array.from({ length: total }, (_, i) => new Node(i));
  for (const c of s) {
    nodes[c.charCodeAt(0) - base].count++;
  }
  for (const [index, node] of nodes.entries()) {
    node.prev = nodes[index - 1];
    node.next = nodes[index + 1];
  }
  let current = 0;
  let result = "";
  let [node] = nodes;
  while (node.count || node.next !== node.prev) {
    const key1 = keys[current];
    if (node.count !== 0) {
      result += node.char;
      node.count--;
    } else if (node[key1]) {
      const key2 = keys[current ^ 1];
      node[key1][key2] = node[key2];
    }
    if (node[key1]) {
      node = node[key1];
    } else {
      current ^= 1;
    }
  }
  return result;
}

console.log(sortString("leetcode"));
