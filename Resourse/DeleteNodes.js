// // https://www.hackerrank.com/test/1qe64b4hpqk/questions/en2qcmamdag

// function removeNodes(listHead, x) {
//   if (listHead == null) {
//     return;
//   }
//   let dummy = new SinglyLinkedListNode(0);
//   let tail = dummy;
//   while (listHead !== null) {
//     if (listHead.val <= x) {
//       tail.next = listHead;
//       tail = tail.next;
//       listHead = listHead.next;
//     }
//   }
//   return dummy.next;
// }

// // function removeNodes(listHead, x) {
// //   if (listHead == null) {
// //     return;
// //   }
// //   var current = listHead;
// //   var prev = null;

// //   while (current !== null) {
// //     if (current.val <= x) {
// //       if (current == listHead) listHead = current.next;
// //       else if (current.next == null) prev.next = null;
// //       else prev.next = current.next;

// //       current = current.next;
// //     } else {
// //       prev = current;
// //       current = current.next;
// //     }
// //   }
// //   return current
// // }
// function removeNodes(listHead, x) {
//   if (head === null) {
//     return null;
//   }
//   let currentNode = new SinglyLinkedList(-1);
//   currentNode.next = head;
//   head = currentNode;

//   while (currentNode.next !== null) {
//     if (currentNode.next.val === position) {
//       currentNode.next = currentNode.next.next;
//     } else {
// //       currentNode = currentNode.next;
// //     }
// //   }
// //   return head.next;
// // }

// // ///////////////////
// // function deleteNode(head, position) {
// //   if (position == 0) return head.next;

// //   let curNode = head;
// //   for (let i = 0; i < position - 1; i++) {
// //     curNode = curNode.next;
// //   }

// //   curNode.next = curNode.next.next;

// //   return head;
// // }

// function three(arr, target) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     let finalT = target - arr[i];
//     let map = {};
//     for (let j = i + 1; j < arr.length; i++) {
//       if (map[arr[j]]) {
//         results.push([arr[j], arr[i], map[j]]);
//       } else {
//         map[finalT - arr[j]] = arr[j];
//       }
//     }
//   }
//   return results;
// }

// console.log(three([12, 3, 1, 2, -6, 5, -8, 6], 0));

// let isBalancedParenthesis = (str) => {
//   return !string.split("").reduce((uptoPrevChar, thisChar) => {
//     if (thisChar === "(" || thisChar === "{" || thisChar === "[") {
//       return ++uptoPrevChar;
//     } else if (thisChar === ")" || thisChar === "}" || thisChar === "]") {
//       return --uptoPrevChar;
//     }

//     return uptoPrevChar;
//   }, 0);
// };

// function balancedBracket (string){
//     let result = [];

//     let open = {
//         '{': '}',
//         '[': ']',
//         '(': ')'
//     };

//     let closed = {
//         '}': true,
//         ']': true,
//         ')': true
//     }

//     for (let i = 0; i < string.length; i++) {

//         let char = string[i];

//         if (open[char]) {
//             stack.push(char);
//         } else if (closed[char]) {
//             if (open[stack.pop()] !== char){
//                 return false;
//             }

//         }
//     }
//     return stack.length === 0;
// }

// console.log(balancedBracket())

// function deleteNode(){
//     let current = head;
//     let prev;
//     for(let i = 0; i < k; i++) {
//         prev = current;
//         current = current.next;
//     }
//     if (prev) {
//         prev.next = current.next;
//         return head;
//     } else {
//         return head.next;
//     }
// }
function three(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          console.log(arr[i]);
          console.log(arr[j]);
          console.log(arr[k]);
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return result;
}

console.log(three([12, 3, 1, 2, -6, 5, -8, 7], 0));
