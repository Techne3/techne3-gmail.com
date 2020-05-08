// https://www.hackerrank.com/test/1qe64b4hpqk/questions/en2qcmamdag

function removeNodes(listHead, x) {
  if (listHead == null) {
    return;
  }
  let dummy = new SinglyLinkedListNode(0);
  let tail = dummy;
  while (listHead !== null) {
    if (listHead.val <= x) {
      tail.next = listHead;
      tail = tail.next;
      listHead = listHead.next;
    }
  }
  return dummy.next;
}

// function removeNodes(listHead, x) {
//   if (listHead == null) {
//     return;
//   }
//   var current = listHead;
//   var prev = null;

//   while (current !== null) {
//     if (current.val <= x) {
//       if (current == listHead) listHead = current.next;
//       else if (current.next == null) prev.next = null;
//       else prev.next = current.next;

//       current = current.next;
//     } else {
//       prev = current;
//       current = current.next;
//     }
//   }
//   return current
// }
function removeNodes(listHead, x) {
  if (head === null) {
    return null;
  }
  let currentNode = new SinglyLinkedList(-1);
  currentNode.next = head;
  head = currentNode;

  while (currentNode.next !== null) {
    if (currentNode.next.val === position) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head.next;
}

///////////////////
function deleteNode(head, position) {
  if (position == 0) return head.next;

  let curNode = head;
  for (let i = 0; i < position - 1; i++) {
    curNode = curNode.next;
  }

  curNode.next = curNode.next.next;

  return head;
}
