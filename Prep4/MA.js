function makeAnagram(a, b) {
  let aLen = a.length;
  let bLen = b.length;
  let count = 0;
  let total = 0;

  for (let i = 0; i < Math.max(aLen, bLen); i++) {
    if (a.includes(a[i]) && b.includes(a[i])) {
      b = b.replace(a[i], "");
      count++;
    }
  }
  total = aLen - count + (bLen - count);
  return total;
}

console.log(makeAnagram("cde", "abc"));
