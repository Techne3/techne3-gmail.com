function balancedBrackets(str) {
  let line = str.split("");
  // we split the string to make an array
  // I made a results array to hold the results
  const result = [];
  // I set the open brackets in an object
  // I then set the closing brackets in another obj
  const openers = { "(": ")", "{": "}", "[": "]" };
  const closers = { ")": true, "}": true, "]": true };

  for (let i = 0; i < line.length; i++) {
    // I iterate through the array and  check for whether open brackets in the string
    // we check to see if any of the open brackets are in the string
    // and push them to the array
    if (openers[line[i]]) {
      result.push(line[i]);
    } else if (closers[line[i]]) {
      // If the current element  is a ‘closed’ symbol , check if the matching
      //  open symbol of the last element that is popped off the array

      if (openers[result.pop()] !== line[i]) {
        // we will return with false
        return false;
      }
    }
  }
  // i check to see if any of the opening brackets are still left in the array
  return result.length == 0;
}

/* Some console.log tests */
console.log(balancedBrackets("{{}}")); // should print true
console.log(balancedBrackets("[]{}{{")); // should print false
