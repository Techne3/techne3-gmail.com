// https://www.hackerrank.com/test/1qe64b4hpqk/questions/en2qcmamdag

// function removeNodes(listHead, x) {
//   if (listHead == null) {
//     return;
//   }
//   let dummy = listHead;
//   let tail = dummy;
//   while (listHead) {
//     if (listHead.val <= x) {
//       tail.next = listHead;
//       tail = tail.next;
//       listHead = listHead.next;
//     }
//   }
//   return dummy.next;
// }
function removeNodes(listHead, x) {
  if (listHead == null) {
    return;
  }
  var current = listHead;
  var prev = null;

  while (current !== null) {
    if (current.val > x) {
      if (current == listHead) listHead = current.next;
      else if (current.next == null) prev.next = null;
      else prev.next = current.next;

      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
}
