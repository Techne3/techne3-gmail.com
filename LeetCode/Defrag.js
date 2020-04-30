// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function (address) {
  let splitAdd = address.split(".");
  return splitAdd.join("[.]");
};

console.log(defangIPaddr("1.1.1.1"));

// 509. Fibonacci Number
var fib = function (N) {
  const list = [0, 1];
  while (list.length <= N) {
    list.push(list[list.length - 1] + list[list.length - 2]);
  }
  return list[N];

  // Recursive
  // if (N <= 1) return 1;
  // return fib(N - 1) + fib(N - 2);
};

console.log(fib(4));
