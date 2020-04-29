// https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC
function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    console.log(c);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}
console.log(firstNonRepeatedCharacter("abbacabd"));
