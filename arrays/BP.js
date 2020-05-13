function balancedBrackets(str) {
  let line = str.split("");
  // we use a stack to keep track of the opening brackets
  const stack = [];
  // we use an object to store the possible openers with
  // their corresponding closers
  const openers = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const closers = {
    ")": true,
    "}": true,
    "]": true,
  };

  for (let i = 0; i < line.length; i++) {
    // if we see an opener, push it onto our stack
    if (openers[line[i]]) {
      stack.push(line[i]);
    } else if (closers[line[i]]) {
      // if the closer doesn't correspond to the most
      // recently seen unclosed opener, return false
      if (openers[stack.pop()] !== line[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/* Some console.log tests */
console.log(balancedBrackets("{}[]()")); // should print true
console.log(balancedBrackets("{(([]))}")); // should print true
console.log(balancedBrackets("{ [jhkjhdjkh ] asdf(asdf ) }")); // should print true
console.log(balancedBrackets("{ [ ( ] ) }")); // should print false
console.log(balancedBrackets("(")); // should print false
console.log(balancedBrackets("{[}")); // should print false
