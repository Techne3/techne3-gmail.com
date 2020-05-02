//https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, arr) {
  let sorted = arr.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i++;
    }
  }

  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
