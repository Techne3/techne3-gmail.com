function beautifulBinaryString(b) {
  var count = 0;
  for (let i = 0; i < b.length; i++) {
    console.log(b[i] + b[i + 1] + b[i + 2]);
    if (b[i] + b[i + 1] + b[i + 2] === "010") {
      count++;
      i = i + 2;
    }
  }
  return count;
}

console.log(beautifulBinaryString("0101010"));

function beautifulBinaryStrings(b) {
  let count = 0;
  let i = 0;

  while (i !== -1) {
    i = b.indexOf(`010`, i);
    if (i !== -1) {
      i += 3;
      count++;
    }
  }
  return count;
}
console.log(beautifulBinaryStrings("0101010"));
